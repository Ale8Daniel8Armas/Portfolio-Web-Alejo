import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import "./i18n"; // <-- INICIALIZACIÓN GLOBAL ANTES DE LAS RUTAS
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
