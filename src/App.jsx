import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Home />
  },
  {
    path: '/movies',
    element: <Movies />
  },
  {
    path: '/stocks',
    element: <Stocks />
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }]
);

function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;


