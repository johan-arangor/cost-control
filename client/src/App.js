import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Principal from './features/principal/index';
import EntitysPrincipal from './features/entitys/index';
import CategoriesPrincipal from './features/categories/index';
import SubCategoriesPrincipal from './features/subcategories/index';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Principal />} />
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
