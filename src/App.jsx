import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/Cart/CartView';
import { ProductSuccess } from './components/adminComponent/ProductSuccess';
import { ProductFormContainer } from './components/adminComponent/ProductFormContainer';
import { Login } from './components/Login/Login';
import { Dashboard } from './components/adminComponent/Dashboard/Dashboard';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>

        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
