import React from 'react';
import LinksDropdown from "@/components/layout/LinksDropdown";
import {UserButton} from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 bg-secondary px-4 lg:px-8">
      <LinksDropdown/>
      
      <div className="flex gap-5 items-center ml-auto">
        <ThemeToggle />
        <UserButton/>        
      </div>
      
    </nav>
  );
};

export default Navbar;