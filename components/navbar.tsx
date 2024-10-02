'use client';
import React from 'react';
import {
  Navbar as NextUINavBar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

import Button from './common/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const menuItems = [
    {
      label: 'PROJECTS',
      href: 'projects',
    },
    {
      label: 'MMP RENT',
      href: 'rent',
    },
    {
      label: 'MMP LABEL',
      href: 'label',
    },
    {
      label: 'ABOUT US',
      href: 'about-us',
    },
    {
      label: 'CONTACT US',
      href: 'contact-us',
    },
  ];

  return (
    <NextUINavBar
      disableAnimation
      maxWidth="full"
      position="sticky"
      isMenuOpen={isNavOpen}
      isBlurred={false}
      classNames={{
        base: 'bg-transparent absolute',
        wrapper:
          'p-0 py-[15px] px-[30px] md:pt-main-layout-t md:px-main-layout-x h-full',
        menu: 'mt-4 gap-4',
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarBrand className="sm:hidden pr-3">
        {/* <p className="font-bold text-inherit">ACME</p> */}
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={190} height={50} />
        </Link>
      </NavbarBrand>

      <NavbarBrand className="hidden sm:flex">
        {/* <p className="font-bold text-inherit">ACME</p> */}
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={190} height={50} />{' '}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map(({ label, href }, index) => (
          <NavbarItem
            key={`${label}-${index}`}
            isActive={pathname.includes(href)}
            className="hover:after:absolute hover:after:-bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px]
            hover:after:bg-secondary group
            data-[active]:after:bg-secondary data-[active]:font-normal"
          >
            <Link
              href={`/${href}`}
              className={`text-2xl group-hover:text-secondary hover:opacity-100
                ${pathname.includes(href) ? 'text-secondary' : ''}`}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem className="w-min">
          <Button as={Link} href="#">
            EN/MN
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-8">
        {menuItems.map(({ label, href }, index) => (
          <NavbarMenuItem key={`${label}-${index}`}>
            <Link
              className={`w-full text-2xl group-hover:text-secondary hover:opacity-100
                ${pathname.includes(href) ? 'text-secondary' : ''}`}
              href={`#${href}`}
              size="lg"
              onClick={() => setIsNavOpen(false)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          className="min-h-14"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </NavbarContent>
    </NextUINavBar>
  );
}
