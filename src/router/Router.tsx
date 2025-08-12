import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { Posts } from "../pages/posts/Posts";
import { PostDetails } from "../pages/postDetails/PostDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RoutePaths.HOME}
          element={<Navigate to={RoutePaths.POSTS} replace />}
        />
        <Route path={RoutePaths.POSTS} element={<Posts />} />
        <Route path={RoutePaths.POST_DETAILS} element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
