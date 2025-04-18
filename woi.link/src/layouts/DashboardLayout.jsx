import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/dashboard/Header';
import Footer from '../components/dashboard/Footer';
import MobHeader from '../components/dashboard/MobHeader';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const DashboardLayout = () => {
  return (
    <main className="min-h-screen flex flex-col ">

      <div className="hidden lg:block  sticky top-0 z-20 bg-white/95 "><Header /></div>
      <div className="block lg:hidden sticky top-0 z-20 bg-white/95">< MobHeader /></div>

      <main className="flex-1 bg-gray-100">
        <Outlet /> {/* Renders nested routes */}
      </main>
      <Footer />
    </main>
  );
};

export default DashboardLayout;
