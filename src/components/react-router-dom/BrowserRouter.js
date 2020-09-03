import React from "react";
import { RouterProvider } from './Context'
export function BrowserRouter(props) {
  return <RouterProvider>
      {props.children}
  </RouterProvider>
}