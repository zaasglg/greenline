import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SimpleHeader = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">GreenLine</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <Button className="bg-green-600 hover:bg-green-700 hidden md:inline-flex" asChild>
            <a href="tel:+77771234567" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Позвонить</span>
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
