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
} from "./Pages/index";
import Homepage from "./Pages/Homepage";
import Map from "./Pages/Map";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/role-management" element={<Role />} />
          <Route path="/content-management" element={<ContentManagement />} />
          <Route path="/customer-management" element={<CustomerManagement />} />
          <Route path="/home-service" element={<HomeService />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/showcase-management" element={<ShowcaseManagement />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/map" element={<Map />} />
        </Routes>
        <br />
        
      </main>
    </BrowserRouter>
  );
};

export default App;
