import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { Layout } from './components';
import { HomePage, LoginPage, RegisterPage, ResetPasswordPage } from './pages';
import { Routes as AppRoutes } from './routes/routes';
import { lightTheme, darkTheme } from './styles/theme';
import AboutDeveloperPage from './pages/AboutDeveloperPage';

const App: React.FC = () => {
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path={AppRoutes.ABOUT_DEVELOPER}
              element={<AboutDeveloperPage />}
            />
            <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
            <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
            <Route
              path={AppRoutes.RESET_PASSWORD}
              element={<ResetPasswordPage />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
