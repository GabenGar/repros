import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

const routes = [
  layout("./layouts/language-select.tsx", [
    index("./routes/language-select.tsx"),
  ]),
  route(":language", "./layouts/localized.tsx", [index("./routes/home.tsx")]),
] satisfies RouteConfig;

export default routes;
