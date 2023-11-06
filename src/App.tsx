import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ErrorPage from './pages/Error';
import Careers from './pages/careers/Careers';
import CareerDetails from './pages/careers/CareerDetails';
import CareerError from './pages/careers/CareerError';

import RootLayout from './layouts/Root';
import HelpLayout from './layouts/HelpLayout';

import Faq from './components/help/Faq';
import Contact from './components/help/Contact';
import CareerLayout from './layouts/CareersLayout';

import { careersLoader, careerDetailsLoader } from './helpers/loaders';
import { contactAction } from './helpers/actions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'help',
        element: <HelpLayout />,
        children: [
          {
            path: 'faq',
            element: <Faq />,
          },
          {
            path: 'contact',
            element: <Contact />,
            action: (req) => contactAction(req),
          },
        ],
      },
      {
        path: 'careers',
        element: <CareerLayout />,
        errorElement: <CareerError />,
        children: [
          { index: true, element: <Careers />, loader: () => careersLoader() },
          {
            path: ':id',
            element: <CareerDetails />,
            loader: (params) => careerDetailsLoader(params),
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
