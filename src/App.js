import './App.css';
import Header from './component/HeaderComponent/Header';
import SideBar from './component/SideBarComponent/SideBar';
import About from './component/AboutComponent/about';
import Home from './component/HomeComponent/home';
import Portfolio from './component/PortfolioComponent/Portfolio';
import Service from './component/ServiceComponent/Service';
import Footer from './component/FooterComponent/footer';
import Contact from './component/ContactComponent/contact';
import Register from './component/RegisterComponent/register';
// import UserHome from './component/UserComponent/UserHome';
import Login from './component/LoginComponent/login';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminHome from './AdminComponent/Admin';
import Logout from './component/LogoutComponent/Logout';
import ManageUser from './ManageUserComponent/ManageUser';
import EpAdmin from './component/EpAdmin/epAdmin';
import EpUser from './component/epUser/epUser';
import CPadmin from './component/cpAdmin/cpAdmin';
import AddCategory from './component/AddCategoryComponent/AddCategory';
import AddSubCategory from './component/AddSubCategory/AddSubCategory';
import Products from './component/ProductComponent/Product';
import CartPage from './component/CartComponent/Cart';
import VerifyUser from './component/VerifyuserComponent/VerifyUser';
import HomeProduct from './component/HomeProduct/HomeProduct';

function App() {
  const location = useLocation();

  // Show sidebar only on home route
  const shouldShowSidebar = location.pathname === '/';

  return (
    <>
      <div id='container'>
        <Header />
        {shouldShowSidebar && <SideBar />}
        {shouldShowSidebar && <HomeProduct />}
        

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/service' element={<Service />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contactUs' element={<Contact />} />
          {/* <Route path="/user" element={<UserHome />} /> */}
          <Route path="/admin" element={<AdminHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/ManageUser' element={<ManageUser />} />
          <Route path='/epAdmin' element={<EpAdmin />} />
          <Route path='/epUser' element={<EpUser />} />
          <Route path='/cpAdmin' element={<CPadmin />} />
          <Route path='/addCategory' element={<AddCategory />} />
          <Route path='/addsubCategory' element={<AddSubCategory />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/verify/:email" element={<VerifyUser />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
