/// <reference types="react-router-dom" />

declare module 'react-router-dom' {
  export function createBrowserRouter(
    routes: import('react-router-dom').RouteObject[],
    opts?: {
      basename?: string;
      future?: {
        v7_relativeSplatPath?: boolean;
      };
    }
  ): import('react-router-dom').Router;

  export function RouterProvider({ router }: { router: ReturnType<typeof createBrowserRouter> }): JSX.Element;

  export function Outlet(): JSX.Element;
}

