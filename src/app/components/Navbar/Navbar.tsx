"use client";

import React from "react";
import { NavbarMenu } from "../../mockData/data";
import Link from "next/link";
import Image from "next/image";
// icons
import logo from "../../../../public/images/logo.png";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  // Función para cerrar el menú móvil
  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="bg-slate-800">
        <div className="container flex justify-evenly items-center py-4">
          {/* TODO: Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <Link
              href="/"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo}
                alt="Logo"
                width={60}
                height={40}
                className="text-white cursor-pointer"
              />
            </Link>
            {/* Ajusta el tamaño según sea necesario */}
            {/* <p className="text-white">Autos</p> */}
            {/* <p className="text-secondary">Pardo</p> */}
          </div>

          {/* TODO: Menú section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* TODO: Icons section */}
          <div className="flex items-center gap-4">
            {/* icono lupa para buscar hidden=true*/}
            <button
              type="button"
              className="hidden text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"
            >
              <CiSearch />
            </button>
            {/* icono carrito de compras hidden=true*/}
            <button
              type="button"
              className="hidden text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"
            >
              <PiShoppingCartThin />
            </button>
            {/* icono Login */}
            {/* <button
              type="button"
              className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
            >
              {" "}
              Login
            </button> */}
          </div>

          {/* TODO: Mobile hamburger Menu section */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="md:hidden hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl text-white" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar section */}
      {/* Pasamos la función handleCloseMenu al menú móvil */}
      <ResponsiveMenu open={open} onClose={handleCloseMenu} />
    </>
  );
};
