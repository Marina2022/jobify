'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import {links} from "@/utils/links";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Sidebar = () => {

  const path = usePathname()


  return (
    <aside className="h-full py-4 px-8 bg-muted">
      <img src="/images/logo.svg" alt="logo"/>

      <ul className="flex flex-col gap-5 mt-10">
        {
          links.map((link, i) => {

            const isActive = path.slice(1) === link.href;
            const buttonVariant = isActive ? 'default' : 'link';

            return <Button asChild variant={buttonVariant as 'default' | 'link'} key={i}  >
              <Link
                href={link.href}                
                className={`flex gap-2 items-center px-4 py-2 rounded-lg `}
              >{link.icon} <span>{link.label}</span></Link>
            </Button>
          })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;