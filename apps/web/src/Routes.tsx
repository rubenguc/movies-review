import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Home } from "./pages/home";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home
});

const clubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/club",
  component: Home
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: Home
})


const routeTree = rootRoute.addChildren([homeRoute, clubRoute, profileRoute])

export const router = createRouter({ routeTree })
