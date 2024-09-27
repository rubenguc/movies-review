import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import BottomBar from "./components/layout/BottomBar";
import { Review } from "./pages/review";
import { Movie } from "./pages/movie";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

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

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login
})

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: Signup
})

const movieRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/movie/$id',
  component: Movie
})




const routeTree = rootRoute.addChildren([homeRoute, profileRoute, reviewRoute, movieRoute, loginRoute, signUpRoute])

export const router = createRouter({ routeTree })
