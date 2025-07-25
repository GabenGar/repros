import { Page } from "@repo/ui/pages";
import { Overview, OverviewHeader } from "@repo/ui/articles";
import type {
  ICommonTranslationProps,
  ITranslationPageProps,
} from "#lib/internationalization";
import { createMetaTitle } from "#lib/router";
import { getLanguage } from "#server/lib/router";
import { getTranslation } from "#server/localization";

import type { Route } from "./+types/home";

import styles from "./home.module.scss";

interface IProps
  extends ICommonTranslationProps,
    ITranslationPageProps<"home"> {
}

export function meta({ data }: Route.MetaArgs) {
  // @ts-expect-error cannot fetch translaction
  const { translation } = data;
  const title = createMetaTitle(translation["Welcome"]);

  return [{ title }];
}

function HomePage({ loaderData }: Route.ComponentProps) {
  const { language, commonTranslation, translation } = loaderData;
  const heading = translation["Welcome"];

  return (
    <Page heading={heading}>
      <Overview headingLevel={2}>
        {() => (
          <>
            <OverviewHeader>
            </OverviewHeader>
          </>
        )}
      </Overview>
    </Page>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const language = getLanguage(params);
  const { common: commonTranslation, pages } = await getTranslation(language);
  const translation = pages.home;

  const props: IProps = {
    language,
    commonTranslation,
    translation,
  };

  return props;
}

export default HomePage;
