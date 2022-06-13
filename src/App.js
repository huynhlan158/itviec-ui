import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import MainLayout from '~/layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            const Layout = route.layout ? route.layout : route.layout === null ? Fragment : MainLayout;

            return (
              <Route
                key={index}
                path={route.path}
                exact
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
