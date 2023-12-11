"use client";
import {useState} from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {useTheme} from "next-themes";

const Navbar = () => {
  const {theme} = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Tools", "Blog", "About", "Contact"];

  return (
    <NextNavbar isBordered maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src={
              theme == "dark"
                ? "/images/logo-seo-hive-dark.svg"
                : "/images/logo-seo-hive.svg"
            }
            alt="Logo"
            width={130}
            height={200}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#">Services</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#">Tools</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#">Blog</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#">About</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#">Contact</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
};
export default Navbar;
