import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'

function App(): ReactElement {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App;
