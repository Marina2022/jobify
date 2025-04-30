'use client'
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {AlignLeft} from "lucide-react";
import {links} from "@/utils/links";
import Link from "next/link";
import {usePathname} from "next/navigation";

const LinksDropdown = () => {
  const path = usePathname()
  const pathName = path.slice(1)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:hidden" asChild>
        <Button variant="outline" size="icon">
          <AlignLeft/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:hidden w-52 " align="start">
        {
          links.map((link, i) => {
            const isActive = path.slice(1) === link.href
            return <DropdownMenuLabel key={i}>
              <Button variant={isActive ? 'default' : 'link' as 'default' | 'link'} asChild
                      className="flex gap-x-2 items-center">
                <Link href={link.href}>{link.icon} {link.label} </Link>
              </Button>
            </DropdownMenuLabel>
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown;