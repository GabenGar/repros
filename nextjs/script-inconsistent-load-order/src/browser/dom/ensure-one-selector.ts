export function ensureOneSelector<ReturnElement extends Element = Element>(
  selector: string,
  parentElement?: ParentNode,
) {
  const parentNode = parentElement ?? document;
  const results = parentNode.querySelectorAll<ReturnElement>(selector);

  if (results.length === 0) {
    throw new Error(`Failed to find element for selector "${selector}".`);
  }

  if (results.length !== 1) {
    throw new Error(
      `Expected to find one element for selector "${selector}", but got ${results.length}.`,
    );
  }

  const result = results[0];

  return result;
}
