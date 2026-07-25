import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import PrivateClientsPage from './components/PrivateClientsPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/services',
    Component: ServicesPage,
  },
  {
    path: '/pricing',
    Component: PricingPage,
  },
  {
    path: '/private-clients',
    Component: PrivateClientsPage,
  },
  {
    path: '/service/order',
    Component: ServiceDetailPage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
