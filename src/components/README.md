# Header Components

Modern, responsive header components for the GreenLine application built with Next.js and shadcn/ui.

## Components

### 1. Header (Main Header)
A fully-featured header component with navigation, dropdown menus, and mobile support.

**Features:**
- Responsive design with mobile menu
- Dropdown navigation for services  
- Sticky positioning with contact info bar
- Glass morphism background effect
- Mobile-first approach with hamburger menu
- Integrated call button with phone number display

**Usage:**
```jsx
import Header from '@/components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

### 2. SimpleHeader
A lightweight header component for minimal layouts.

**Features:**
- Clean, simple design
- Basic navigation with call button
- Responsive layout
- Lightweight implementation

### 3. PremiumHeader
An enhanced header component with premium styling and contact information.

**Features:**
- Top contact information bar with phone, email, and hours
- Enhanced logo design with animated elements
- Premium gradient styling and hover effects
- Comprehensive services dropdown with visual indicators
- Mobile-optimized contact display
- Professional business appearance

**Usage:**
```jsx
import SimpleHeader from '@/components/SimpleHeader';

export default function SimpleLayout({ children }) {
  return (
    <>
      <SimpleHeader />
      <main>{children}</main>
    </>
  );
}
```

**PremiumHeader Usage:**
```jsx
import PremiumHeader from '@/components/PremiumHeader';

export default function PremiumLayout({ children }) {
  return (
    <>
      <PremiumHeader />
      <main>{children}</main>
    </>
  );
}
```

## Customization

### Navigation Items
To customize navigation items, edit the `navigation` array in the component:

```jsx
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
```

### Services Dropdown
To modify the services dropdown menu, update the `services` array:

```jsx
const services = [
  { name: "Environmental Consulting", href: "/services/environmental" },
  { name: "Sustainability Planning", href: "/services/sustainability" },
  { name: "Carbon Footprint Analysis", href: "/services/carbon" },
  { name: "Green Technology", href: "/services/technology" },
];
};
```

### Contact Information
To customize contact details in the headers, update the contact information:

```jsx
// In Header.jsx and PremiumHeader.jsx
<a href="tel:+77271234567" className="flex items-center space-x-2">
  <Phone className="h-4 w-4" />
  <span>Позвонить</span>
</a>
```

For PremiumHeader, also update the contact bar:
```jsx
<Phone className="h-4 w-4" />
<span className="font-medium">+7 (727) 123-45-67</span>
// Update email and address as needed
```

### Styling
The components use Tailwind CSS classes. Key customizable elements:

- **Brand colors**: `green-600`, `green-700` (can be changed to match your brand)
- **Logo**: Update the logo section with your own branding
- **Typography**: Font weights and sizes can be adjusted via Tailwind classes
- **Contact info**: Phone numbers, email, and business hours can be customized

### Logo Customization
Replace the default logo with your own:

```jsx
<Link href="/" className="flex items-center space-x-2">
  <img src="/your-logo.png" alt="Your Logo" className="h-8 w-8" />
  <span className="text-xl font-bold text-green-600">Your Brand</span>
</Link>
```

## Dependencies

The header components require the following:

- **Next.js** (for Link component and routing)
- **Tailwind CSS** (for styling)
- **shadcn/ui components**:
  - Button
  - DropdownMenu
  - Sheet (for mobile menu)
- **Lucide React** (for icons: Menu, X, ChevronDown, Phone, Mail, Clock, MapPin)

## Installation

If you haven't already installed the required shadcn/ui components:

```bash
npx shadcn@latest add button dropdown-menu sheet
```

## Mobile Behavior

- **Desktop**: Full navigation with dropdown menus and prominent call button
- **Tablet**: Condensed navigation with hamburger menu
- **Mobile**: Slide-out sheet menu with contact information and call button

## Call Button Features

All header variants include:
- **Direct dialing**: `tel:` links for instant phone calls
- **Localized text**: Russian language support
- **Visual prominence**: Eye-catching design to encourage calls
- **Mobile optimization**: Touch-friendly buttons on all devices

### Phone Numbers
Currently configured for Kazakhstan (+7) numbers:
- Main: `+7 (727) 123-45-67`
- Mobile format: `+77271234567` (for tel: links)

Update these in the component files to match your business contact information.

## Accessibility

Both header components include:
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly markup
- Focus management for interactive elements

## Browser Support

Compatible with all modern browsers that support:
- CSS Grid and Flexbox
- CSS backdrop-filter (for glass morphism effect)
- ES6+ JavaScript features

## Performance

- **Lightweight**: Minimal JavaScript bundle size
- **Optimized**: Uses Next.js Link for client-side navigation
- **Responsive**: Mobile-first CSS approach
- **Fast**: Sticky positioning with hardware acceleration