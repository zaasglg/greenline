"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Clock, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service Booking", href: "/booking" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    { name: "Carpet Sanitizer", href: "/services/carpet-sanitizer" },
    { name: "Rug Cleaning", href: "/services/rug-cleaning" },
    { name: "Upholstery Cleaning", href: "/services/upholstery-cleaning" },
  ];

  const InfoItem = ({ icon, title, subtitle, href }) => (
    <div className="flex items-center space-x-3">
      <div className="text-blue-500">{icon}</div>
      <div>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
        {href ? (
          <a href={href} className="font-bold text-gray-800 hover:text-blue-500 transition-colors whitespace-nowrap">
            {subtitle}
          </a>
        ) : (
          <p className="font-bold text-gray-800 whitespace-nowrap">{subtitle}</p>
        )}
      </div>
    </div>
  );

  const NavLink = ({ item }) => (
    <div className="relative">
      {item.hasDropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-blue-200 font-medium text-base transition-colors py-2 focus:outline-none">
            <span>{item.name}</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-64 bg-white border-gray-200 shadow-xl">
            <div className="py-2">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link
                    href={service.href}
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href={item.href}
          className="text-white hover:text-blue-200 font-medium text-base transition-colors py-2"
        >
          {item.name}
        </Link>
      )}
    </div>
  );

  const navMidIndex = Math.ceil(navigation.length / 2);
  const navLeft = navigation.slice(0, navMidIndex);
  const navRight = navigation.slice(navMidIndex);

  return (
    <header className="relative">
      {/* Top Section - White Bar */}
      <div className="bg-white">
        <div className="container mx-auto px-4 hidden lg:block">
          <div className="flex items-center h-24">
            <div className="flex-1 flex items-center justify-end space-x-6">
              <InfoItem
                icon={<Phone size={32} />}
                title="Call For Help"
                subtitle="+1 970-368-2626"
                href="tel:+19703682626"
              />
              <div className="h-10 border-r border-gray-300"></div>
              <InfoItem
                icon={<Clock size={32} />}
                title="Monday-Saturday"
                subtitle="8am - 8pm"
              />
            </div>

            {/* Spacer for the absolute positioned logo */}
            <div className="w-48 flex-shrink-0"></div>

            <div className="flex-1 flex items-center justify-start space-x-6">
              <InfoItem
                icon={<Mail size={32} />}
                title="Mail to us"
                subtitle="greenlaine@gmail.com"
                href="mailto:carpet.couch.clean@gmail.com"
              />
              <div className="h-10 border-r border-gray-300"></div>
              <InfoItem
                icon={<MapPin size={32} />}
                title="Arvada, CO 80003"
                subtitle="United States"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Logo */}
      <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <Link href="/">
          <div className="bg-white rounded-full p-2 shadow-lg border-4 border-white">
            <img src="/images/logo.png" alt="GreenLine logo" className="h-32 w-32" />
          </div>
        </Link>
      </div>

      {/* Navigation Bar - Blue Bar */}
      <div className="bg-blue-500">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-16">
            <div className="flex-1 flex items-center justify-end space-x-10">
                {navLeft.map((item) => <NavLink key={item.name} item={item} />)}
            </div>
              <div className="w-40 flex-shrink-0"></div>
            <div className="flex-1 flex items-center justify-start space-x-10">
                {navRight.map((item) => <NavLink key={item.name} item={item} />)}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <Link href="/">
              <img src="/images/logo.png" alt="GreenLine logo" className="h-16 w-auto" />
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full px-6 bg-white text-gray-800">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <img src="/images/logo.png" alt="GreenLine logo" className="h-20 w-auto mx-auto" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-6">
                  {/* Mobile Navigation */}
                  <div className="space-y-2 text-center">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.hasDropdown ? (
                          <div className="py-2">
                            <h3 className="font-semibold text-lg border-b pb-2 mb-3">Services</h3>
                            <div className="space-y-2 mt-2">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block text-gray-600 hover:text-blue-500 py-1 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block font-medium text-lg py-2 border-b hover:text-blue-500 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="border-t pt-6 mt-6 space-y-4">
                     <InfoItem
                        icon={<Phone size={24} />}
                        title="Call For Help"
                        subtitle="+1 970-368-2626"
                        href="tel:+19703682626"
                      />
                      <InfoItem
                        icon={<Mail size={24} />}
                        title="Mail to us"
                        subtitle="carpet.couch.clean@gmail.com"
                        href="mailto:carpet.couch.clean@gmail.com"
                      />
                      <InfoItem
                        icon={<Clock size={24} />}
                        title="Monday-Saturday"
                        subtitle="8am - 8pm"
                      />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;