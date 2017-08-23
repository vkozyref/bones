import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Template from './page/Template';
import Route from './Route';

export default () => (
  <BrowserRouter>
    <Template>
      <Route />
    </Template>
  </BrowserRouter>
);
