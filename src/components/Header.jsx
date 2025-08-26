"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    { name: "Carpet Sanitizer", href: "/services/carpet-sanitizer" },
    { name: "Rug Cleaning", href: "/services/rug-cleaning" },
    { name: "Upholstery Cleaning", href: "/services/upholstery-cleaning" },
  ];

  return (
    <header className="bg-slate-900 text-white">
      {/* Top Section */}
      <div className="bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/images/logo.png" alt="GreenLine logo" className="h-24 w-auto" />
              </Link>

              {/* Promo Badge */}
              <div className="hidden lg:block">
                <Link href="/booking?discount=30" className="block">
                  <div className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wide cursor-pointer transition-colors">
                    <div className="text-xs">Free Consultation</div>
                    <div className="text-sm">Save 30%</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right CTA Buttons */}
            <div className="flex items-center space-x-4">
              {/* Call Button */}
              <div className="hidden lg:flex flex-col items-end">
                <div className="text-sm font-semibold text-white">
                  Call Now for a FREE Consultation!
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Phone className="h-4 w-4 text-green-400" />
                  <a
                    href="tel:+77271234567"
                    className="text-lg font-bold text-white hover:text-green-400 transition-colors"
                  >
                    1-877-GREEN-LINE
                  </a>
                </div>
              </div>

              {/* Quote Button */}
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hidden lg:inline-flex lg:px-6 lg:py-3 lg:text-base"
                asChild
              >
                <Link href="/booking" className="flex items-center space-x-2">
                  <span className="uppercase tracking-wide">Quote & Schedule</span>
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full px-10 bg-slate-900 text-white border-slate-700">
                    <SheetHeader>
                      <SheetTitle className="text-white text-left">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-lg font-bold text-white">GREEN</span>
                          <span className="text-lg font-bold text-green-400">LINE</span>
                        </div>
                      </SheetTitle>
                    </SheetHeader>

                    <div className="mt-8 space-y-6">
                      {/* Mobile Promo */}
                      <Link href="/booking?discount=30" onClick={() => setIsOpen(false)}>
                        <div className="mb-5 bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-center cursor-pointer transition-colors">
                          <div className="text-xs font-bold uppercase tracking-wide">Free Consultation</div>
                          <div className="text-sm font-bold">Save 30%</div>
                        </div>
                      </Link>

                      {/* Mobile Contact */}
                      <div className="bg-slate-800 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-gray-300 mb-2">Call Now for FREE Consultation</div>
                          <a
                            href="tel:+77271234567"
                            className="text-lg font-bold text-white block"
                          >
                            1-877-GREEN-LINE
                          </a>
                        </div>
                      </div>

                      {/* Mobile Navigation */}
                      <div className="space-y-4">
                        {navigation.map((item) => (
                          <div key={item.name}>
                            {item.hasDropdown ? (
                              <div>
                                <div className="font-medium text-white border-b border-slate-700 pb-2 mb-3">
                                  Services
                                </div>
                                <div className="ml-4 space-y-2">
                                  {services.map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="block text-sm text-gray-300 hover:text-green-400 py-1 transition-colors"
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
                                className="block text-white font-medium py-2 border-b border-slate-700 hover:text-green-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Mobile CTA */}
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
                        onClick={() => setIsOpen(false)}
                        asChild
                      >
                        <Link href="/booking">Quote & Schedule</Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-start space-x-8 py-3">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-green-400 font-medium text-base transition-colors py-2">
                      <span>Services</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-64 bg-white border-gray-200 shadow-xl">
                      <div className="py-2">
                        {services.map((service) => (
                          <DropdownMenuItem key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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
                    className="text-white hover:text-green-400 font-medium text-base transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
