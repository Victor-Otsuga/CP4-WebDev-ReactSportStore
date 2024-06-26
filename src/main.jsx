import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import Produtos from './routes/Produtos.jsx'
import Contato from './routes/Contato.jsx'
import SingleProduct from './routes/SingleProduct.jsx'
import SingleProduct2 from './routes/SingleProduct2.jsx'
import SingleProduct3 from './routes/SingleProduct3.jsx'
import SingleProduct4 from './routes/SingleProduct4.jsx'
import Error from './routes/Error.jsx';


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/Sobre', element: <Sobre /> },
      { path: '/Produtos', element: <Produtos /> },
      { path: '/Contato', element: <Contato /> },
      { path: '/SingleProduct', element: <SingleProduct /> },
      { path: '/SingleProduct2', element: <SingleProduct2 /> },
      { path: '/SingleProduct3', element: <SingleProduct3 /> },
      { path: '/SingleProduct4', element: <SingleProduct4 /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
