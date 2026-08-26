import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Scroll restoration is intentionally off: this is a one-page marketing
    // site with in-page hash links, and restoring the previous offset made
    // fresh loads/reloads land mid-page. Hash scrolling is handled in __root.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });


  return router;
};
