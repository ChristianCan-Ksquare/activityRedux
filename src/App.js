import React from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import NotFoundScreen from "./components/NotFoundScreen";
import PostForm from "./components/PostForm";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <ProtectedRoute path="/posts/:id" exact children={<SinglePost />}>
          <SinglePost />
        </ProtectedRoute>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <ProtectedRoute exact path="/createPost">
          <PostForm />
        </ProtectedRoute>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/" component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}
