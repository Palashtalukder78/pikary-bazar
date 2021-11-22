import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeContainer from './components/HomeContainer/HomeContainer/HomeContainer';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import Explore from './components/Explore/Explore';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './dashboard/Dashboard/Dashboard/Dashboard';
import DashboardHome from './dashboard/DashboardHome/DashboardHome';
import AddCategories from './dashboard/Dashboard/AddCategories/AddCategories';
import Products from './dashboard/Dashboard/Products/Products/Products';
import AddProduct from './dashboard/Dashboard/Products/AddProduct/AddProduct';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<PrivateRoute>
            <Explore />
          </PrivateRoute>} />
          {/* Dashboard Route start*/}
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route exact path='/dashboard' element={<DashboardHome>
            </DashboardHome>} />
            <Route path='/dashboard/add-category' element={<AddCategories></AddCategories>} />
            <Route path='/dashboard/products' element={<Products></Products>} />
            <Route path='/dashboard/add-product' element={<AddProduct></AddProduct>} />
          </Route>
          {/* Dashboard Route start*/}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
