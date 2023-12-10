import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Login from './features/login/index';
import Signup from './features/signup/index';
import ConfirmAccount from './features/signup/indexConfirmAccount';
import RenewPassword from './features/login/indexRenewPassword';
import ChangePassword from './features/login/indexChangePassword';
import Principal from './features/principal/index';
import Settings from './features/settings/index';
import EntitysPrincipal from './features/entitys/index';
import CategoriesPrincipal from './features/categories/index';
import SubCategoriesPrincipal from './features/subcategories/index';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/confirmAccount/:token" element={<ConfirmAccount />} />
            <Route exact path="/renewPassword" element={<RenewPassword />} />
            <Route exact path="/changePassword/:token" element={<ChangePassword />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/principal" element={<Principal />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/entitys" element={<EntitysPrincipal />} />
            <Route exact path="/categories" element={<CategoriesPrincipal />} />
            <Route exact path="/subCategories/:id" element={<SubCategoriesPrincipal />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;