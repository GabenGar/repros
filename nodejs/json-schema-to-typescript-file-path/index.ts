import fs from "node:fs/promises";
import path from "node:path";
import { cwd } from "node:process";
import { isNativeError } from "node:util/types";
import { compile } from "json-schema-to-typescript";

interface IJSONSchema {
  $id: string;
}

interface ISchemaMap extends Map<string, IJSONSchema> {}
interface ISchemaInterfaceMap extends Map<string, string> {}

const __dirname = cwd();
const schemaFolderPath = path.resolve(__dirname, "schema");
const schemaFileExtension = ".schema.json";
const outputFolderPath = path.join(__dirname, "src", "schema");

await run(schemaFolderPath, outputFolderPath);

async function run(inputFolder: string, outputFolder: string) {
  const schemas = await collectSchemas(inputFolder);
  const schemaInterfaces = await createSchemaInterfaces(schemas);

  console.log(schemaInterfaces.size);
}

async function collectSchemas(schemaFolder: string): Promise<ISchemaMap> {
  const schemas: ISchemaMap = new Map();

  const directory = await fs.opendir(schemaFolder, {
    encoding: "utf8",
    recursive: true,
  });

  for await (const entry of directory) {
    const isValidSchemaFile =
      entry.isFile() && entry.name.endsWith(schemaFileExtension);

    if (!isValidSchemaFile) {
      continue;
    }

    const schemaPath = path.join(entry.path, entry.name);
    const schema = await collectSchema(schemaPath);

    if (schemas.has(schema.$id)) {
      throw new Error(
        `JSON Schema with ID "${schema.$id}" at "${schemaPath}" already exists.`,
      );
    }

    schemas.set(schema.$id, schema);
  }

  return schemas;
}

async function collectSchema(schemaPath: string): Promise<IJSONSchema> {
  const fileContent = await fs.readFile(schemaPath, { encoding: "utf-8" });
  const schema = JSON.parse(fileContent);

  try {
    validateSchemaFileContents(schema);
  } catch (error) {
    if (!isNativeError(error)) {
      throw error;
    }

    throw new Error(
      `Schema at "${schemaPath}" is not a valid JSON Schema file.`,
      { cause: error },
    );
  }

  return schema;
}

function validateSchemaFileContents(
  input: unknown,
): asserts input is IJSONSchema {
  const isValid =
    typeof input === "object" &&
    input !== null &&
    "$id" in input &&
    typeof input.$id === "string";

  if (!isValid) {
    throw new Error("Not valid schema.");
  }
}

async function createSchemaInterfaces(
  schemaMap: ISchemaMap,
): Promise<ISchemaInterfaceMap> {
  const interfaceMap: ISchemaInterfaceMap = new Map();
  const options: Parameters<typeof compile>["2"] = {
    format: false,
    bannerComment: "",
    cwd: schemaFolderPath,
    enableConstEnums: false,
    declareExternallyReferenced: false,
    $refOptions: {
      resolve: {
        http: false,
        file: {
          async read(file) {
            const filePath = file.url;
            // juggling the path around because the lib normalizes the ID,
            // i.e. `/strings/nanoid` is resolved to `c:/strings/nanoid` on windows
            // and passed as `file.url` to the function
            const schemaID = filePath.slice(path.parse(filePath).root.length);
            const schema = schemaMap.get(schemaID);

            if (!schema) {
              throw new Error(`No schema exists for ID "${schemaID}".`);
            }

            return schema;
          },
        },
      },
    },
  };

  for await (const [schemaID, schema] of schemaMap) {
    console.log(`Generating interface for schema "${schemaID}"...`);

    const content = await compile(schema, schemaID, options);

    interfaceMap.set(schemaID, content);

    console.log(`Generated interface for schema "${schemaID}".`);
  }

  return interfaceMap;
}
