import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/post/:id", element: <PostDetail /> },
]);

export default router;
