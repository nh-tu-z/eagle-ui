import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'
import Authentication from './containers/authentication/Authentication';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Authentication>
        <AppRoutes/>
      </Authentication>
    </BrowserRouter>
  )
}

export default App;
