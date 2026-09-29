// Single source of company facts: footer, JSON-LD, legal pages, contact.
// Empty strings / null hide the related link or line — never render a dead link.

export const company = {
  legalName: 'Uyir AI Labs Private Limited',
  shortName: 'Uyir AI Labs',
  cin: 'U62011TZ2025PTC036108',
  udyam: 'UDYAM-TN-03-0340943',
  address: {
    street: 'No. 1, KKR Nagar, Perumal Koil Street, Vadavalli',
    locality: 'Coimbatore',
    region: 'Tamil Nadu',
    postalCode: '641041',
    country: 'IN',
  },
  email: 'hello@uyirailabs.com',
  siteUrl: 'https://uyirailabs.com',
  dpiitRecognised: true,
  gstin: null as string | null, // TODO: add when issued.
  founder: {
    name: 'Gowtham Venkatesh Rajmohan',
    role: 'Founder & Director',
  },
  linkedinUrl: '', // TODO(Gowtham): company or founder LinkedIn URL.
  whatsappNumber: '', // TODO(Gowtham): WhatsApp business number, digits with country code, e.g. '919876543210'.
};

export const NATIVE_NIGHTS_URL: string = ''; // TODO(Gowtham): live Native Nights web app URL.

export const addressLine = `${company.address.street}, ${company.address.locality}, ${company.address.region} ${company.address.postalCode}`;

export const whatsappUrl = company.whatsappNumber
  ? `https://wa.me/${company.whatsappNumber.replace(/\D/g, '')}`
  : '';

export const mailto = `mailto:${company.email}`;
