import React from "react";
import { useRoutes } from "react-router-dom";

import routes from './config/routers';

const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      <h1>Qiankun Web App Example</h1>
      {element}
    </>
  );
}

export default App;