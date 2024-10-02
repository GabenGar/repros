import { ensureOneSelector } from "./ensure-one-selector";

export function ensureIDSelector<ReturnElement extends Element = Element>(
  id: string,
) {
  return ensureOneSelector<ReturnElement>(`#${id}`);
}
