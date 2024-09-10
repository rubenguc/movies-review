import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import BottomBar from "./components/layout/BottomBar";
import { Review } from "./pages/review";
import { Movie } from "./pages/movie";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <BottomBar />
      <TanStackRouterDevtools />
    </>
  )
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home
});

// const clubRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/club",
//   component: Home
// });

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: Profile
})

const reviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/review/$id',
  component: Review
})

const movieRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/movie/$id',
  component: Movie
})

const routeTree = rootRoute.addChildren([homeRoute, profileRoute, reviewRoute, movieRoute])

export const router = createRouter({ routeTree })
