import type { Route } from "next";
import type { ILocale } from "#lib/internationalization";

export function createHomePageURL(language: ILocale): Route {
  return `/${language}` as Route;
}
