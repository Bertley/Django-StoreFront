import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import StoreFront from "./containers/ShopifyStoreFront";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Client from "shopify-buy";
import "./assets/app.css";

const client = Client.buildClient({
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "graphql.myshopify.com"
});

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
    <Route
      path="/shop"
      render={props => <StoreFront {...props} client={client} />}
    />
  </div>
);

export default BaseRouter;
