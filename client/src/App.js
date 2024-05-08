import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Register,
  Role,
  ContentManagement,
  CustomerManagement,
  HomeService,
  MarketPlace,
  Settings,
  ShowcaseManagement,
  UserManagement,
  Blog,
} from "./Pages/index";
import Homepage from "./Pages/Homepage";
import Map from "./Pages/Map";
import PropertyDetails from "./Pages/Property";

// Import admin panel components directly from their directories
import AdminDashboard from "./admin_pages/AdminDashboard";
import AdminUsers from "./admin_pages/AdminUsers";
import AdminSettings from "./admin_pages/AdminSettings";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/role-management" element={<Role />} />
          <Route path="/content-management" element={<ContentManagement />} />
          <Route path="/customer-management" element={<CustomerManagement />} />
          <Route path="/register-property" element={<HomeService />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/showcase-management" element={<ShowcaseManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/map" element={<Map />} />
          <Route path="/property/:id" element={<PropertyDetails />} />



        {/* //admin  */}

            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/settings" element={<AdminSettings />} />




        </Routes>
        <br />
        
      </main>
    </BrowserRouter>
  );
};

export default App;
