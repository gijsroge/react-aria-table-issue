import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("2", "./routes/2.tsx"),
] satisfies RouteConfig;
