import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import {
  HomePage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  AboutPage,
  DashboardPage,
} from './pages';
import {
  Routes as AppRoutes,
  PrivateRoutes as PrivateAppRoutes,
} from './routes/routes';
import { lightTheme, darkTheme } from './styles/theme';
import { Layout, PrivateRoute } from './components';
import { getTheme } from './store/selectors/themeSelector';

const App: React.FC = () => {
  const { isDarkMode } = useSelector(getTheme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route path={AppRoutes.HOME} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoutes.ABOUT} element={<AboutPage />} />
            <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
            <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
            <Route
              path={AppRoutes.RESET_PASSWORD}
              element={<ResetPasswordPage />}
            />
            {/* auth users */}
            <Route
              path={PrivateAppRoutes.DASHBOARD}
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
