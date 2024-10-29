import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { HomePage, LoginPage, RegisterPage, ResetPasswordPage } from './pages';
import { Routes as AppRoutes } from './routes/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
          <Route
            path={AppRoutes.RESET_PASSWORD}
            element={<ResetPasswordPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
