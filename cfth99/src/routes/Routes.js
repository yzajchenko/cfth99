import React from "react";
import { Routes as Router, Route } from "react-router-dom";

import FormContainer from "../pages/FormPage/container/FormContainer";
import MainContainet from "../pages/MainPage/container/MainContainer";
import ROUTES from "./routesName";

const Routes = () => {
  return (
    <Router>
      <Route exact path={ROUTES.MAIN_PAGE} element={<MainContainet />} />
      <Route exact path={ROUTES.FORM_PAGE} element={<FormContainer />} />
    </Router>
  );
};

export default Routes;
