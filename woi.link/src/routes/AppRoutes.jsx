import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import UserLayout from "../layouts/UserLayout";
import UserProfile from "../pages/user/UserProfile";
import UserSettings from "../pages/user/UserSettings";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardSettings from "../pages/Dashboard/DashboardSettings";
import IndexPage from "../pages/IndexPage";
import LoginLayout from "../layouts/LoginLayout";
import LinkInBio from "../pages/login/LinkInBio";
import Store from "../pages/login/Store";
import DigitalCard from "../pages/login/DigitalCardSignUp";
// import SelectCategories from "../components/login/digitalcard/DSelectCategories";
// import Monetization from "../components/login/digitalcard/Monetization";
import BusinessCategory from "../pages/login/common/BusinessCategory";
import LoginPage from "../components/login/digitalcard/LoginPage";
import DigitalCardSignUp from "../pages/login/DigitalCardSignUp";
import ForgotPassword from "../pages/login/forgot/ForgotPassworld";
import ForgotUsername from "../pages/login/forgot/ForgotUsername";
import DoMore from "../pages/login/common/DoMore";
import SelectTheme from "../pages/login/common/SelectTheme";
import SelectPlatforms from "../pages/login/common/SelectPlatforms";
import AddLinks from "../pages/login/common/AddLinks";
import NameImageBio from "../pages/login/common/NameImageBio";
import Complete from "../pages/login/common/Complete";
import SuggestedLinks from "../pages/login/common/SuggestedLinks";
import SelectCategories from "../pages/login/dgitalCard/SelectCategories";
import DSelectCategories from "../pages/login/dgitalCard/SelectCategories";
import LSelectCategories from "../pages/login/common/SelectCategories";
import DMonetization from "../pages/login/dgitalCard/Monetization";
import DMMonittization from "../pages/login/dgitalCard/DMMonitization";
import Monietization from "../pages/login/common/Monetization";
import Kanban from "../pages/Kanban";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/woilink-frontend">
      <Routes>
        {/* Default landing page with dropdown */}
        <Route path="/" element={<IndexPage />} />
        {/* Default Redirect to Dashboard */}
        {/* <Route path="/" element={<Navigate to="/u-d" />} /> */}
        <Route path="/" element={<DashboardHome to="/u-d" />} />
        <Route path="/user-card" element={<UserProfile to="/user-card" />} />

        {/* user register routes with correct nesting */}
        <Route path="/u-r" element={<LoginLayout />}>
          {/* digital card */}
          <Route path="digital-card" element={<DigitalCardSignUp />} />
          <Route path="d-select-categories" element={<DSelectCategories />} />
          {/* <Route path="business" element={<BusinessCategory />} /> */}
          <Route path="d-monetization" element={<DMonetization />} />
          <Route path="dm-monetization" element={<DMMonittization />} />

          {/* Link in bio */}
          <Route path="link-in-bio" element={<LinkInBio />} />
          <Route path="select-categories" element={<LSelectCategories />} />
          <Route path="business" element={<BusinessCategory />} />
          <Route path="l-monetization" element={<Monietization />} />
          <Route path="do-more" element={<DoMore />} />
          <Route path="create/select-template" element={<SelectTheme />} />
          <Route path="create/select-platforms" element={<SelectPlatforms />} />
          <Route path="create/add-links" element={<AddLinks />} />
          <Route path="create/name-image-bio" element={<NameImageBio />} />
          <Route path="create/complete" element={<Complete />} />
          <Route path="create/suggested-links" element={<SuggestedLinks />} />

          {/* common */}
          <Route path="monetization" element={<Monietization />} />

          {/* freeze */}
          {/* <Route path="billing" element={<Billing />} />
          <Route path="select-plan" element={<SelectPlan />} /> */}

          <Route path="select-category/business" element={<BusinessCategory />} />
          <Route path="link-in-bio" element={<LinkInBio />} />
          <Route path="store" element={<Store />} />
        </Route>
        {/* user login routes with correct nesting  layout are same login layout using to this*/}
        <Route path="/u-l" element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        {/* user forgot passwrod username  */}
        <Route path="/f-p" element={<ForgotPassword />} />
        <Route path="/f-u" element={<ForgotUsername />} />

        {/* Dashboard Routes */}
        <Route path="/u-d" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        {/* User Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserProfile />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="link-in-bio" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>

        <Route path="kanban" element={<Kanban/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
