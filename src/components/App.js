// import React, { Component } from "react";
// import { Route } from 'react-router-dom';
// import HomePage from '../HomePage';
// import About from './About';
// import Contact from './Contact'

// const App = () => (
//   <>
//     <Route path="/" exact component={HomePage} />
//     {/* <Route path="/movies" component={MoviesPage} />
//     <Route path="/movies/:movieId" component={MovieDetailsPage} />
//     <Route path="/movies/:movieId/cast" component={Cast} />
//     <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
//   </>
// );



import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Loader from "react-loader-spinner";
import "../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Navigation from "./Navigation";
import routes from "../routes";

const AsyncHomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);

const AsyncMoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "Movies-page" */)
);

const AsyncMovieDetails = lazy(() =>
  import(
    "./views/DetailsPage" /* webpackChunkName: "DetailsPage-page" */
  )
);

const { homePage, moviesPage, moviesDetailsPage } = routes;

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
          />
        }
      >
        <Switch>
          <Route path={homePage} exact component={AsyncHomePage} />
          <Route path={moviesPage} exact component={AsyncMoviesPage} />
          <Route path={moviesDetailsPage} component={AsyncMovieDetails} />

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
