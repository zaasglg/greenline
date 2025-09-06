import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-300 text-white">
      <div className="w-10/12 mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 2xl:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/images/logo.png" className="h-24 2xl:h-32" />
            </div>
            <p className="text-white 2xl:text-3xl leading-relaxed">
              Professional carpet and upholstery cleaning company with over 15 years of experience.
              Your trusted partner for a clean and healthy environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Facebook className="w-5 h-5 2xl:w-6 2xl:h-6 text-sky-300" />
              </a>
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Instagram className="w-5 h-5 2xl:w-6 2xl:h-6 text-sky-300" />
              </a>
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Twitter className="w-5 h-5 2xl:w-6 2xl:h-6 text-sky-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl 2xl:text-4xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl 2xl:text-4xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/carpet" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/upholstery" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Upholstery Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/office" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Vehicle Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/deep" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                  Deep Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl 2xl:text-4xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 2xl:w-5 2xl:h-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-white 2xl:text-3xl">
                    9855 E Louisiana dr<br />
                    Aurora Colorado 80247<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 2xl:w-5 2xl:h-5 text-sky-300" />
                </div>
                <div>
                  <a href="tel:+17204628866" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                    +1 720 462 8866
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 2xl:w-5 2xl:h-5 text-sky-300" />
                </div>
                <div>
                  <a href="mailto:greenlinecarpetco@gmail.com" className="text-white 2xl:text-3xl hover:text-gray-200 transition-colors">
                    greenlinecarpetco@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 2xl:w-5 2xl:h-5 text-sky-300" />
                </div>
                <div className="text-white 2xl:text-3xl">
                  <p className="font-semibold text-white mb-1">Business Hours:</p>
                  <p>Monday-Saturday: 9am - 9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-sm 2xl:text-xl">
              © 2024 GreenLine Cleaning Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm 2xl:text-xl">
              <Link href="/privacy-policy" className="text-white 2xl:text-2xl hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
