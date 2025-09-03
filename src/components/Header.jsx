"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X, CaretDown, Phone, Clock, Envelope, MapPin } from "phosphor-react";
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
  { name: "CARPET CLEANING", href: "/services/carpet-cleaning" },
  { name: "Rug Cleaning", href: "/services/rug-cleaning" },
  { name: "Professional Upholstery Cleaning", href: "/services/professional-upholstery-cleaning" },
  { name: "Carpet Sanitizer", href: "/services/carpet-sanitizer" },
  { name: "Upholstery Cleaning and Sanitizing", href: "/services/upholstery-cleaning-and-sanitizing" },
  { name: "COVID-19", href: "/services/covid-19" },
  { name: "Mattress Cleaning", href: "/services/mattress-cleaning" },
  { name: "Pet Carpet Cleaning", href: "/services/pet-carpet-cleaning" },
  ];

const InfoItem = ({ icon, title, subtitle, href }) => (
  <div className="flex items-center space-x-3 2xl:space-x-3">
    <div className="text-sky-400">{icon}</div>
    <div>
      {/* title — просто текст */}
      <p className="text-sm 2xl:text-xl text-gray-600 font-medium">
        {title}
      </p>

      {/* subtitle — может быть HTML */}
      {href ? (
        <a
          href={href}
          className="font-bold text-gray-800 2xl:text-2xl hover:text-blue-500 transition-colors whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      ) : (
        <p
          className="font-bold text-gray-800 2xl:text-2xl whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  </div>
);


  const NavLink = ({ item }) => (
    <div className="relative">
      {item.hasDropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-blue-200 font-medium text-xl 2xl:text-2xl transition-colors py-2 focus:outline-none">
            <span>{item.name}</span>
            <CaretDown className="h-4 w-4" weight="fill" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-64 2xl:w-96 bg-white border-gray-200 shadow-xl">
            <div className="py-2">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link
                    href={service.href}
                    className="flex items-center px-4 py-3 text-base 2xl:text-xl text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
          className="text-white hover:text-blue-200 font-medium text-xl 2xl:text-2xl transition-colors py-2"
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
        <div className="w-full mx-auto px-4 hidden lg:block">
          <div className="flex items-center h-28 2xl:h-40">
            <div className="flex-1 flex items-center justify-end space-x-6">
              <InfoItem
                icon={<Phone size={32} className="2xl:w-12 2xl:h-12" weight="fill" />}
                title="Call For Help"
                subtitle="+1 720-462-8866"
                href="tel:+17204628866"
              />
              <div className="h-10 border-r border-gray-300"></div>
              <InfoItem
                icon={<Clock size={32} className="2xl:w-12 2xl:h-12" weight="fill" />}
                title="Monday-Saturday"
                subtitle="9am - 9pm"
              />
            </div>

            {/* Spacer for the absolute positioned logo */}
            <div className="w-56 2xl:w-96 flex-shrink-0"></div>

            <div className="flex-1 flex items-center justify-start space-x-6">
              <InfoItem
                icon={<Envelope size={32} className="2xl:w-12 2xl:h-12" weight="fill" />}
                title="Mail to us"
                subtitle="greenlinecarpetco@gmail.com"
                href="mailto:greenlinecarpetco@gmail.com"
              />
              <div className="h-10 border-r border-gray-300"></div>
              <InfoItem
                icon={
                  <div className="flex items-center space-x-2">
                    <MapPin size={32} className="2xl:w-12 2xl:h-12" weight="fill" />
                  </div>
                }
                title="Address"
                subtitle="<span>9855 E Louisiana dr <br /> Aurora Colorado 80247<span>"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Logo */}
      <div className="hidden lg:block absolute top-8 2xl:top-12 left-1/2 -translate-x-1/2 z-20">
        <Link href="/">
          <div className="bg-white rounded-full p-4 2xl:p-6 shadow-lg border-4 2xl:border-6 border-white">
            <img src="/images/logo.png" alt="GreenLine logo" className="h-32 w-32 2xl:h-52 2xl:w-52" />
          </div>
        </Link>
      </div>

      {/* Separator Line */}
      <div className="hidden lg:block h-px bg-gray-200"></div>

      {/* Navigation Bar - Blue Bar */}
      <div className="bg-sky-300" >
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-16 2xl:h-24">
            <div className="flex-1 flex items-center justify-end space-x-20 2xl:space-x-28">
                {navLeft.map((item) => <NavLink key={item.name} item={item} />)}
            </div>
            <div className="w-48 2xl:w-68 flex-shrink-0"></div>
            <div className="flex-1 flex items-center justify-start space-x-20 2xl:space-x-28">
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
                  <List className="h-6 w-6" weight="fill" />
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
                        icon={<Phone size={24} weight="fill" />}
                        title="Call For Help"
                        subtitle="+1 720-462-8866"
                        href="tel:+17204628866"
                      />
                      <InfoItem
                        icon={<Envelope size={24} weight="fill" />}
                        title="Mail to us"
                        subtitle="greenlinecarpetco@gmail.com"
                        href="mailto:greenlinecarpetco@gmail.com"
                      />
                      <InfoItem
                        icon={<Clock size={24} weight="fill" />}
                        title="Monday-Saturday"
                        subtitle="9am - 9pm"
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