"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CampaignIcon from '@mui/icons-material/Campaign';
import InsightsIcon from '@mui/icons-material/Insights';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ForumIcon from '@mui/icons-material/Forum';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';

interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
}

interface MegaMenuCategory {
  title: string;
  items: MegaMenuItem[];
}

interface MegaMenu {
  title: string;
  description: string;
  categories: MegaMenuCategory[];
}

interface NavItem {
  label: string;
  href: string;
  description?: string;
  megaMenu?: MegaMenu;
}

interface NavSection {
  title: string;
  children: NavItem[];
}

const navItems: NavSection[] = [
  {
    title: 'Solutions',
    children: [
      { 
        label: 'ZOHO', 
        href: '/solutions/zoho',
        megaMenu: {
          title: 'Zoho Complete Suite of Applications',
          description: 'Comprehensive business solutions for every department',
          categories: [
            {
              title: 'Sales',
              items: [
                { label: 'Zoho CRM', href: '/solutions/zoho/crm', description: 'Customer relationship management' },
                { label: 'Zoho CRM Plus', href: '/solutions/zoho/crm-plus', description: 'Advanced CRM with analytics' },
                { label: 'Zoho Bigin', href: '/solutions/zoho/bigin', description: 'Simple CRM for small businesses' },
              ]
            },
            {
              title: 'Human Resources',
              items: [
                { label: 'Zoho People', href: '/solutions/zoho/people', description: 'HR management system' },
                { label: 'Zoho Recruit', href: '/solutions/zoho/recruit', description: 'Recruitment and hiring' },
                { label: 'Zoho People Plus', href: '/solutions/zoho/people-plus', description: 'Advanced HR suite' },
                { label: 'Zoho Payroll', href: '/solutions/zoho/payroll', description: 'Payroll management' },
                { label: 'Zoho Expense', href: '/solutions/zoho/expense', description: 'Expense tracking' },
              ]
            },
            {
              title: 'Finance',
              items: [
                { label: 'Zoho Books', href: '/solutions/zoho/books', description: 'Online accounting software' },
                { label: 'Zoho Inventory', href: '/solutions/zoho/inventory', description: 'Inventory management' },
                { label: 'Zoho Finance Plus', href: '/solutions/zoho/finance-plus', description: 'Complete financial suite' },
              ]
            },
            {
              title: 'Project Management',
              items: [
                { label: 'Zoho Projects', href: '/solutions/zoho/projects', description: 'Project management tool' },
                { label: 'Zoho Sprint', href: '/solutions/zoho/sprint', description: 'Agile project management' },
              ]
            },
            {
              title: 'Service',
              items: [
                { label: 'Zoho Desk', href: '/solutions/zoho/desk', description: 'Customer service platform' },
                { label: 'Zoho Sales IQ', href: '/solutions/zoho/sales-iq', description: 'Live chat and analytics' },
                { label: 'Zoho FSM', href: '/solutions/zoho/fsm', description: 'Field service management' },
              ]
            },
            {
              title: 'Email & Collaboration',
              items: [
                { label: 'Zoho Mail', href: '/solutions/zoho/mail', description: 'Business email solution' },
                { label: 'Zoho Workplace', href: '/solutions/zoho/workplace', description: 'Team collaboration platform' },
              ]
            },
            {
              title: 'Marketing',
              items: [
                { label: 'Zoho Sites', href: '/solutions/zoho/sites', description: 'Website builder' },
                { label: 'Zoho Social', href: '/solutions/zoho/social', description: 'Social media management' },
                { label: 'Zoho Commerce', href: '/solutions/zoho/commerce', description: 'E-commerce platform' },
                { label: 'Zoho Marketing Automation', href: '/solutions/zoho/marketing-automation', description: 'Marketing automation' },
                { label: 'Zoho Marketing Plus', href: '/solutions/zoho/marketing-plus', description: 'Advanced marketing suite' },
              ]
            },
            {
              title: 'BI & Analytics',
              items: [
                { label: 'Zoho Analytics', href: '/solutions/zoho/analytics', description: 'Business intelligence platform' },
                { label: 'Zoho Flow', href: '/solutions/zoho/flow', description: 'Workflow automation' },
              ]
            },
            {
              title: 'Developer Platforms',
              items: [
                { label: 'Zoho Creator', href: '/solutions/zoho/creator', description: 'Low-code app development' },
                { label: 'Zoho Catalyst', href: '/solutions/zoho/catalyst', description: 'Serverless platform' },
              ]
            },
            {
              title: 'Security & IT Management',
              items: [
                { label: 'Zoho IT Management', href: '/solutions/zoho/it-management', description: 'IT asset management' },
              ]
            },
            {
              title: 'Complete Suite',
              items: [
                { label: 'Zoho One', href: '/solutions/zoho/one', description: 'Complete suite of applications' },
              ]
            }
          ]
        }
      },
      { 
        label: 'NETSUITE', 
        href: '/solutions/netsuite',
        megaMenu: {
          title: 'NetSuite Business Management Solutions',
          description: 'Comprehensive ERP and business management platform',
          categories: [
            {
              title: 'Core ERP',
              items: [
                { label: 'NetSuite ERP', href: '/solutions/netsuite/erp', description: 'Comprehensive business management and real-time insights' },
                { label: 'NetSuite Accounting Software', href: '/solutions/netsuite/accounting', description: 'Automates financial processes with accuracy' },
                { label: 'Global Business Management', href: '/solutions/netsuite/global-business', description: 'Supports multinational operations seamlessly' },
              ]
            },
            {
              title: 'Customer Management',
              items: [
                { label: 'NetSuite CRM', href: '/solutions/netsuite/crm', description: 'Enhances sales and customer service with a 360-degree view' },
              ]
            },
            {
              title: 'Project Management',
              items: [
                { label: 'NetSuite SRP', href: '/solutions/netsuite/srp', description: 'Optimizes project management and resource allocation' },
                { label: 'SuiteProject Pro (OpenAir)', href: '/solutions/netsuite/suiteproject-pro', description: 'Project management and professional services automation' },
              ]
            },
            {
              title: 'Analytics & Intelligence',
              items: [
                { label: 'NetSuite Business Intelligence', href: '/solutions/netsuite/bi', description: 'Advanced analytics and reporting tools' },
                { label: 'NetSuite Analytics Warehouse (NSAW)', href: '/solutions/netsuite/analytics-warehouse', description: 'Centralized Data, Smarter Decisions with NetSuite' },
                { label: 'Artificial Intelligence in NetSuite', href: '/solutions/netsuite/ai', description: 'Empowering Smarter Business with AI-Driven NetSuite Solutions' },
              ]
            },
            {
              title: 'E-Commerce',
              items: [
                { label: 'NetSuite E-Commerce', href: '/solutions/netsuite/ecommerce', description: 'Integrates ERP with online and offline shopping' },
              ]
            },
            {
              title: 'Planning & Budgeting',
              items: [
                { label: 'NetSuite Planning and Budgeting', href: '/solutions/netsuite/planning-budgeting', description: 'Transform Financial Planning with NetSuite\'s Automated Budgeting System' },
              ]
            },
            {
              title: 'Specialized Solutions',
              items: [
                { label: 'SuiteSuccess', href: '/solutions/netsuite/suitesuccess', description: 'Tailored, rapid deployment for business success' },
                { label: 'India Localization for NetSuite', href: '/solutions/netsuite/india-localization', description: 'Streamlined Tax Management with AGSuite India Localization for NetSuite' },
              ]
            },
            {
              title: 'Why Choose NetSuite',
              items: [
                { label: 'Why NetSuite', href: '/solutions/netsuite/why-netsuite', description: 'Unlock Efficiency, Growth, and Flexibility with NetSuite' },
              ]
            }
          ]
        }
      },
    ],
  },
  {
    title: 'Services',
    children: [
      { label: 'Digital Transformation', href: '/services/digital-transformation' },
      { label: 'Integration Services', href: '/services/integration-services' },
      { label: 'Training Services', href: '/services/training-services' },
      { label: 'Low-Code Application Development', href: '/services/low-code' },
      { label: 'Managed Services', href: '/services/managed-services' },
    ],
  },
  {
    title: 'Industries',
    children: [
      { label: 'Software and Technology', href: '/industries/software' },
      { label: 'IT and Professional Services', href: '/industries/it-services' },
      { label: 'Wholesale Distribution', href: '/industries/wholesale' },
      { label: 'Advertising and Digital Marketing Agencies', href: '/industries/marketing' },
      { label: 'Media and Publishing', href: '/industries/media' },
      { label: 'Retail & E-Commerce', href: '/industries/retail' },
      { label: 'Transportation and Logistics', href: '/industries/transport' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
    ],
  },
  {
    title: 'Insights',
    children: [
      { label: 'Blogs', href: '/insights/blogs' },
      { label: 'Case Study', href: '/insights/case-studies' },
      { label: 'Whitepapers', href: '/insights/whitepapers' },
      { label: 'News Feeds', href: '/insights/news' },
      { label: 'Events', href: '/insights/events' },
      { label: 'Awards & Achievements', href: '/insights/awards' },
    ],
  },
  {
    title: 'Contact',
    children: [
      { label: 'Careers', href: '/contact/careers' },
      { label: 'Support', href: '/contact/support' },
      { label: 'Request Quote', href: '/contact/quote' },
      { label: 'Free Consultation', href: '/contact/free-consultation' },
    ],
  },
];

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Delay close timeout for desktop dropdowns
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Determine if we are on the home page
  const isHomePage = pathname === '/';

  // Determine if we are on a Solution subpage
  const isSolutionSubpage = pathname.startsWith('/solutions/zoho/') || pathname.startsWith('/solutions/netsuite/');

  // Always show fixed Navbar except on home page
  const alwaysScrolled = !isHomePage;

  const toggleNavbar = () => setOpenNavbar(prev => !prev);
  
  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    setOpenMegaMenu(null);
    } else {
      setOpenDropdown(title);
      // Set NetSuite as default for Solutions mega menu
      if (title === 'Solutions') {
        setOpenMegaMenu('NETSUITE');
      }
    }
  };

  const handleMegaMenuClick = (label: string) => {
    setOpenMegaMenu(label);
  };

  useEffect(() => {
    if (alwaysScrolled || isSolutionSubpage) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled, isSolutionSubpage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenMegaMenu(null);
      }
    };

    // Only add click outside handler for click events, not mouse over
    const handleMouseLeave = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenMegaMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled || alwaysScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-20 flex items-center justify-between">
        <Link href="/" className={`flex items-center gap-2 text-2xl font-bold transition-colors duration-300 ${
          isScrolled || alwaysScrolled ? 'text-gray-500' : 'text-white'
        }`}>
          <Image
            src={isScrolled || alwaysScrolled ? "/agsuite_logo.webp" : "/agsuite-logo1.webp"}
            alt="AGSuite Logo"
            width={120}
            height={40}
            className="h-10 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative dropdown-container"
              onMouseEnter={() => {
                if (closeTimeout.current) {
                  clearTimeout(closeTimeout.current);
                  closeTimeout.current = null;
                }
                setOpenDropdown(item.title);
                if (item.title === 'Solutions') {
                  setOpenMegaMenu('NETSUITE');
                }
              }}
              onMouseLeave={() => {
                if (closeTimeout.current) {
                  clearTimeout(closeTimeout.current);
                }
                closeTimeout.current = setTimeout(() => {
                  setOpenDropdown(null);
                  setOpenMegaMenu(null);
                }, 150);
              }}
              style={{ display: 'inline-block', width: '100%' }}
            >
              <>
                <button
                  className={`text- px-5 py-3 hover:text-red-600 transition-colors duration-300 flex items-center gap-2 ${
                    isScrolled || alwaysScrolled ? 'text-black' : 'text-white'
                  }`}
                  tabIndex={0}
                  onClick={() => toggleDropdown(item.title)}
                  onFocus={() => {
                    setOpenDropdown(item.title);
                    if (item.title === 'Solutions') {
                      setOpenMegaMenu('NETSUITE');
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      if (!document.querySelector('.dropdown-container:hover')) {
                        setOpenDropdown(null);
                        setOpenMegaMenu(null);
                      }
                    }, 100);
                  }}
                >
                  {item.title}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === item.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Mega Menus here... */}
                {item.title !== 'Solutions' && item.children.length > 0 && (
                  openDropdown === item.title && (
                    <div
                      className="fixed left-0 right-0 top-20 w-screen bg-gradient-to-br from-orange-50 via-white to-red-100 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-200 z-50"
                    >
                      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 md:px-12 lg:px-5 py-8">
                        {/* For Services, use a two-column layout: first column for heading, second for links */}
                        {item.title === 'Services' ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* First column: Our Services heading and description */}
                            <div className=" p-6 flex flex-col items-start">
                              <h3 className="text-5xl font-bold text-red-500 mb-">Our Services</h3>
                              <p className="text-lg text-gray-500">Explore our comprehensive range of digital, integration, training, low-code, and managed services to accelerate your business growth.</p>
                            </div>
                            {/* Second and third columns: Service links and descriptions in two columns */}
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                              {item.children.map((link: NavItem, i: number) => {
                                let IconComponent = null;
                                let desc = '';
                                switch (link.label) {
                                  case 'Digital Transformation':
                                    IconComponent = RocketLaunchIcon;
                                    desc = 'Transform your business with cutting-edge digital solutions and strategies.';
                                    break;
                                  case 'Integration Services':
                                    IconComponent = IntegrationInstructionsIcon;
                                    desc = 'Seamlessly connect your systems and data for improved efficiency.';
                                    break;
                                  case 'Training Services':
                                    IconComponent = SchoolIcon;
                                    desc = 'Empower your team with expert-led training and upskilling.';
                                    break;
                                  case 'Low-Code Application Development':
                                    IconComponent = BuildIcon;
                                    desc = 'Rapidly build and deploy custom apps with low-code platforms.';
                                    break;
                                  case 'Managed Services':
                                    IconComponent = SettingsIcon;
                                    desc = 'Let us manage your IT and business operations for you.';
                                    break;
                                }
                                return (
                                  <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-start">
                                    <Link
                                      href={link.href}
                                      className="text-base text-red-500 mb-1 hover:underline flex items-center gap-2"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {IconComponent && <IconComponent fontSize="medium" className="text-black" />}
                                      {link.label}
                                    </Link>
                                    <p className="text-xs text-gray-600 mb-2">{desc}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : item.title === 'Industries' ? (
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* First column: Industries heading and description */}
                            <div className="p-6 flex flex-col items-start">
                              <h3 className="text-5xl font-bold text-red-500 mb-5">Industries We Serve</h3>
                              <p className="text-lg text-gray-500">We provide tailored solutions for a wide range of industries to help you grow and succeed.</p>
                            </div>
                            {/* Next three columns: Industry links and descriptions in three columns */}
                            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                              {item.children.map((link: NavItem, i: number) => {
                                let IconComponent = null;
                                let desc = '';
                                switch (link.label) {
                                  case 'Software and Technology':
                                    IconComponent = ComputerIcon;
                                    desc = 'Innovative solutions for software and tech companies.';
                                    break;
                                  case 'IT and Professional Services':
                                    IconComponent = WorkIcon;
                                    desc = 'Optimize your IT and professional service operations.';
                                    break;
                                  case 'Wholesale Distribution':
                                    IconComponent = LocalShippingIcon;
                                    desc = 'Streamline distribution and supply chain management.';
                                    break;
                                  case 'Advertising and Digital Marketing Agencies':
                                    IconComponent = CampaignIcon;
                                    desc = 'Boost your agency’s performance and client results.';
                                    break;
                                  case 'Media and Publishing':
                                    IconComponent = NewspaperIcon;
                                    desc = 'Modern tools for media and publishing businesses.';
                                    break;
                                  case 'Retail & E-Commerce':
                                    IconComponent = StoreIcon;
                                    desc = 'Enhance your retail and online sales experience.';
                                    break;
                                  case 'Transportation and Logistics':
                                    IconComponent = LocalShippingIcon;
                                    desc = 'Efficient solutions for logistics and transport.';
                                    break;
                                  case 'Manufacturing':
                                    IconComponent = PrecisionManufacturingIcon;
                                    desc = 'Drive productivity and quality in manufacturing.';
                                    break;
                                }
                                return (
                                  <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-start">
                                    <Link
                                      href={link.href}
                                      className="text-base text-red-500 mb-1 hover:underline flex items-center gap-2"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {IconComponent && <IconComponent fontSize="medium" className="text-black" />}
                                      {link.label}
                                    </Link>
                                    <p className="text-xs text-gray-600 mb-2">{desc}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : item.title === 'Insights' ? (
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* First column: Insights heading and description */}
                            <div className="p-6 flex flex-col items-start">
                              <h3 className="text-5xl font-bold text-red-500 mb-5">Insights & Resources</h3>
                              <p className="text-lg text-gray-500">Stay updated with our latest blogs, case studies, whitepapers, news, and more.</p>
                            </div>
                            {/* Next three columns: Insights links and descriptions in three columns */}
                            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                              {item.children.map((link: NavItem, i: number) => {
                                let IconComponent = null;
                                let desc = '';
                                switch (link.label) {
                                  case 'Blogs':
                                    IconComponent = InsightsIcon;
                                    desc = 'Expert articles and thought leadership.';
                                    break;
                                  case 'Case Study':
                                    IconComponent = ForumIcon;
                                    desc = 'Real-world success stories from our clients.';
                                    break;
                                  case 'Whitepapers':
                                    IconComponent = LocalLibraryIcon;
                                    desc = 'In-depth research and industry analysis.';
                                    break;
                                  case 'News Feeds':
                                    IconComponent = NewspaperIcon;
                                    desc = 'Latest updates and announcements.';
                                    break;
                                  case 'Events':
                                    IconComponent = EventIcon;
                                    desc = 'Upcoming and past events.';
                                    break;
                                  case 'Awards & Achievements':
                                    IconComponent = EmojiEventsIcon;
                                    desc = 'Our recognitions and milestones.';
                                    break;
                                }
                                return (
                                  <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-start">
                                    <Link
                                      href={link.href}
                                      className="text-base text-red-500 mb-1 hover:underline flex items-center gap-2"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {IconComponent && <IconComponent fontSize="medium" className="text-black" />}
                                      {link.label}
                                    </Link>
                                    <p className="text-xs text-gray-600 mb-2">{desc}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : item.title === 'Contact' ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* First column: Contact heading and description */}
                            <div className="p-6 flex flex-col items-start">
                              <h3 className="text-5xl font-bold text-red-500 mb-5">Contact Us</h3>
                              <p className="text-lg text-gray-500">Reach out for support, career opportunities, or to request a quote or consultation.</p>
                            </div>
                            {/* Second and third columns: Contact links and descriptions distributed */}
                            <div className="md:col-span-2 grid grid-cols-2 gap-4">
                              {item.children.map((link: NavItem, i: number) => {
                                let IconComponent = null;
                                let desc = '';
                                switch (link.label) {
                                  case 'Careers':
                                    IconComponent = WorkIcon;
                                    desc = 'Join our team and grow your career.';
                                    break;
                                  case 'Support':
                                    IconComponent = SupportAgentIcon;
                                    desc = 'Get help and customer support.';
                                    break;
                                  case 'Request Quote':
                                    IconComponent = RequestQuoteIcon;
                                    desc = 'Request a custom quote for your needs.';
                                    break;
                                  case 'Free Consultation':
                                    IconComponent = ContactSupportIcon;
                                    desc = 'Book a free consultation with our experts.';
                                    break;
                                }
                                return (
                                  <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-start">
                                    <Link
                                      href={link.href}
                                      className="text-base text-red-500 mb-1 hover:underline flex items-center gap-2"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {IconComponent && <IconComponent fontSize="medium" className="text-black" />}
                                      {link.label}
                                    </Link>
                                    <p className="text-xs text-gray-600 mb-2">{desc}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {item.children.map((link: NavItem, i: number) => (
                              <div key={i} className="bg-white p-4 rounded-lg shadow flex flex-col items-start col-span-1">
                                <Link
                                  href={link.href}
                                  className="text-base text-red-500 mb-1 hover:underline"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {link.label}
                                </Link>
                                {link.description && <p className="text-xs text-gray-600 mb-2">{link.description}</p>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                )}
                {item.title === 'Solutions' && item.children.some(child => child.megaMenu) && (
                  openDropdown === 'Solutions' && (
                    <div
                      className="hidden lg:block fixed left-0 right-0 top-20 w-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300 z-50"
                      style={{ maxHeight: '80vh', overflowY: 'auto', borderRadius: '0 0 2rem 2rem' }}
                    >
                      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 md:px-12 lg:px-5 py-8 relative">
                        {/* Close Button */}
                        <button
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-500 text-xl font-bold focus:outline-none"
                          onClick={() => {
                            setOpenDropdown(null);
                            setOpenMegaMenu(null);
                          }}
                          aria-label="Close mega menu"
                        >
                          &times;
                        </button>
                        {/* Sidebar Navigation */}
                        <div className="flex gap-8">
                          {/* Sidebar */}
                          <div className="w-48 flex-shrink-0">
                            <div className="space-y-2">
                              <div 
                                className={`group cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 ${
                                  openMegaMenu === 'NETSUITE' 
                                    ? 'border-red-500 bg-red-50' 
                                    : 'border-transparent hover:border-red-300 hover:bg-red-50'
                                }`}
                                onClick={() => {
                                  if (openDropdown === 'Solutions') handleMegaMenuClick('NETSUITE');
                                }}
                                onMouseEnter={() => {
                                  if (openDropdown === 'Solutions') handleMegaMenuClick('NETSUITE');
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <h3 className={`text-base font-bold transition-colors duration-200 ${
                                    openMegaMenu === 'NETSUITE' ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                                  }`}>
                                  NetSuite
                                </h3>
                                  <span className="text-xs text-gray-500">Click</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">ERP & Business Management</p>
                              </div>
                              <div 
                                className={`group cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 ${
                                  openMegaMenu === 'ZOHO' 
                                    ? 'border-red-500 bg-red-50' 
                                    : 'border-transparent hover:border-red-300 hover:bg-red-50'
                                }`}
                                onClick={() => {
                                  if (openDropdown === 'Solutions') handleMegaMenuClick('ZOHO');
                                }}
                                onMouseEnter={() => {
                                  if (openDropdown === 'Solutions') handleMegaMenuClick('ZOHO');
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <h3 className={`text-base font-bold transition-colors duration-200 ${
                                    openMegaMenu === 'ZOHO' ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                                  }`}>
                                  Zoho
                                </h3>
                                  <span className="text-xs text-gray-500">Click</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">Complete Business Suite</p>
                              </div>
                            </div>
                          </div>
                          {/* Content Area */}
                          <div className="flex-1 min-h-[400px] pb-4">
                            {/* NetSuite Content - Show when clicked */}
                            <div className={`transition-all duration-300 ${openMegaMenu === 'NETSUITE' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                  {item.children.find(child => child.label === 'NETSUITE')?.megaMenu?.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="space-y-2 bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                                      <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide border-b border-red-200 pb-1">
                                        {category.title}
                                      </h4>
                                      <ul className="space-y-1">
                                        {category.items.map((subItem, subIndex) => (
                                          <li key={subIndex}>
                                            <Link
                                              href={subItem.href}
                                              className="block text-sm text-gray-900 group-hover:text-red-600 transition-colors duration-200"
                                              onClick={() => { setOpenDropdown(null); setOpenMegaMenu(null); }}
                                            >
                                                {subItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* Zoho Content - Show when selected */}
                            <div className={`transition-all duration-300 ${openMegaMenu === 'ZOHO' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                  {item.children.find(child => child.label === 'ZOHO')?.megaMenu?.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="space-y-2 bg-white rounded-xl shadow-md p-2 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                                      <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide border-b border-red-200 pb-1">
                                        {category.title}
                                      </h4>
                                      <ul className="space-y-1">
                                        {category.items.map((subItem, subIndex) => (
                                          <li key={subIndex}>
                                            <Link
                                              href={subItem.href}
                                              className="block text-sm text-gray-900 group-hover:text-red-600 transition-colors duration-200"
                                              onClick={() => { setOpenDropdown(null); setOpenMegaMenu(null); }}
                                            >
                                                {subItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* Default Content - Show NetSuite by default */}
                            <div className={`transition-all duration-300 ${!openMegaMenu ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {item.children.find(child => child.label === 'NETSUITE')?.megaMenu?.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="space-y-2">
                                      <h4 className="text-xs font-semibold text-red-600 uppercase tracking-wide border-b border-red-200 pb-1">
                                        {category.title}
                                      </h4>
                                      <ul className="space-y-1">
                                        {category.items.map((subItem, subIndex) => (
                                          <li key={subIndex}>
                                            <Link
                                              href={subItem.href}
                                              className="block text-xs text-gray-900 group-hover:text-red-600 transition-colors duration-200"
                                              onClick={() => { setOpenDropdown(null); setOpenMegaMenu(null); }}
                                            >
                                                {subItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavbar}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gray-100/80 hover:bg-gray-200/80' 
                : 'bg-white/20 hover:bg-white/30'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-white'
              }`}
            >
              {openNavbar ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          <Link
            href="/contact/free-consultation"
            className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-3xl border-red-500  border-2  transition-all duration-300 ${
              isScrolled 
                ? 'text-black hover:bg-red-500' 
                : 'text-white border border-amber-500 hover:bg-red-500'
            }`}
          >
            Let&apos;s Talk
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {openNavbar && (
        <div className={`lg:hidden border-t transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-gray-200' 
            : 'bg-black/90 backdrop-blur-md border-white/20'
        }`}>
          <div className="px-5 py-4 space-y-4">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className={`w-full flex items-center justify-between text-lg mb-2 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                  onClick={() => setOpenMobileSection(openMobileSection === item.title ? null : item.title)}
                  aria-expanded={openMobileSection === item.title}
                  aria-controls={`mobile-section-${index}`}
                >
                  {item.title}
                  <span className={`ml-2 transition-transform duration-200 ${openMobileSection === item.title ? 'rotate-90' : ''}`}>
                    &gt;
                  </span>
                </button>
                {/* Collapsible child menu */}
                {openMobileSection === item.title && (
                  <ul id={`mobile-section-${index}`} className="pl-4 space-y-2">
                    {item.title === 'Solutions' ? (
                      <div className="grid grid-cols-2 gap-2">
                        {/* Zoho column */}
                        <div className="space-y-1">
                          {item.children.find(child => child.label === 'ZOHO')?.megaMenu?.categories.flatMap(category =>
                            category.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block text-xs font-medium ${isScrolled ? 'text-gray-900 hover:text-red-600 hover:bg-red-50' : 'text-white/80 hover:text-red-500 hover:bg-white/10'} transition-colors duration-200 rounded px-2 py-1`}
                                onClick={() => setOpenNavbar(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))
                          )}
                        </div>
                        {/* NetSuite column */}
                        <div className="space-y-1">
                          {item.children.find(child => child.label === 'NETSUITE')?.megaMenu?.categories.flatMap(category =>
                            category.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block text-xs font-medium ${isScrolled ? 'text-gray-900 hover:text-red-600 hover:bg-red-50' : 'text-white/80 hover:text-red-500 hover:bg-white/10'} transition-colors duration-200 rounded px-2 py-1`}
                                onClick={() => setOpenNavbar(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))
                          )}
                        </div>
                          </div>
                    ) : (
                      item.children.map((link, i) => (
                        <li key={i}>
                          {link.megaMenu ? (
                            <div className="mb-2">
                              <div className={`text-sm font-medium ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>{link.label}</div>
                              <div className="pl-2 space-y-2">
                            {link.megaMenu.categories.map((category, catIndex) => (
                              <div key={catIndex} className="space-y-1">
                                    <div className={`text-xs font-semibold uppercase tracking-wide ${isScrolled ? 'text-red-600' : 'text-red-500'}`}>{category.title}</div>
                                <ul className="pl-2 space-y-1">
                                  {category.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={subItem.href}
                                            className={`block text-xs font-medium ${isScrolled ? 'text-gray-900 hover:text-red-600 hover:bg-red-50' : 'text-white/80 hover:text-red-500 hover:bg-white/10'} transition-colors duration-200 rounded px-2 py-1`}
                                        onClick={() => setOpenNavbar(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                            </div>
                          ) : (
                        <Link
                          href={link.href}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors duration-300 ${
                            isScrolled 
                              ? 'text-gray-500 hover:bg-gray-100' 
                              : 'text-white/80 hover:bg-white/10'
                          }`}
                          onClick={() => setOpenNavbar(false)}
                        >
                          {link.label}
                        </Link>
                          )}
                      </li>
                      ))
                    )}
                </ul>
                )}
              </div>
            ))}
            <div className={`pt-4 border-t transition-colors duration-300 ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <Link
                href="/contact/free-consultation"
                className="block w-full text-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md"
                onClick={() => setOpenNavbar(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
