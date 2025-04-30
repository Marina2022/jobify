import React, {PropsWithChildren} from 'react';
import {UserButton} from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Layout = ({children}: PropsWithChildren) => {
  return (
    <main className="mx-auto grid lg:grid-cols-5">
      <div className="hidden lg:block lg:min-h-screen">
        <Sidebar/>
      </div>
      <div className="col-span-4">
        <Navbar/>
        <div className="py-16 px-4 sm:px-8 lg:px-16">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;