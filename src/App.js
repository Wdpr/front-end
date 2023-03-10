import React, { Component } from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './Styles/custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
            <Route path="*" element={<h1>404: Not Found</h1>} />
          </Routes>
      </Layout>
    );
  }
}
