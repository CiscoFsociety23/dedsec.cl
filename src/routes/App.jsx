
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;