// Site navigation: header links and footer columns. Empty company values drop their links.
import { company, mailto, whatsappUrl, NATIVE_NIGHTS_URL } from './company';

export const headerLinks = [
  { href: '/#firro', label: 'Products' },
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
];

type FooterLink = { label: string; href: string; external?: boolean };

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Investors', href: '/#investors' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Firro', href: '/#firro' },
      NATIVE_NIGHTS_URL
        ? { label: 'Native Nights', href: NATIVE_NIGHTS_URL, external: true }
        : { label: 'Native Nights', href: '/#native-nights' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI and automation', href: '/#services' },
      { label: 'Web and mobile apps', href: '/#services' },
      { label: 'SaaS engineering', href: '/#services' },
      { label: 'UI/UX design', href: '/#services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: company.email, href: mailto },
      ...(whatsappUrl ? [{ label: 'WhatsApp', href: whatsappUrl, external: true }] : []),
      ...(company.linkedinUrl ? [{ label: 'LinkedIn', href: company.linkedinUrl, external: true }] : []),
    ],
  },
];
