import { useRoutes } from "react-router-dom";

import routes from './config/routers';

const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  );
}

export default App;