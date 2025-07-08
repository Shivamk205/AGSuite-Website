"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image';

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
    title: 'Contact Us',
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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenMegaMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-24 flex items-center justify-between">
        <Link href="/" className={`flex items-center gap-2 text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? 'text-gray-700' : 'text-white'
        }`}>
          <Image
            src={isScrolled ? "/agsuite_logo.webp" : "/agsuite-logo1.webp"}
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
            <div key={index} className="relative dropdown-container">
              <button 
                onClick={() => toggleDropdown(item.title)}
                className={`font-medium hover:text-purple-600 transition-colors duration-300 flex items-center gap-1 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
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
              
              {/* Regular Dropdown */}
              {!item.children.some(child => child.megaMenu) && (
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                    openDropdown === item.title 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <ul className="py-2">
                    {item.children.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Page Mega Menu for Solutions */}
              {item.title === 'Solutions' && item.children.some(child => child.megaMenu) && (
                <div 
                  className={`hidden lg:block fixed top-24 left-0 right-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300 ${
                    openDropdown === item.title 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 py-8 relative">
                    {/* Close Button */}
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold focus:outline-none"
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
                                ? 'border-purple-400 bg-purple-50' 
                                : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
                            }`}
                            onClick={() => {
                              if (openDropdown === 'Solutions') handleMegaMenuClick('NETSUITE');
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className={`text-base font-bold transition-colors duration-200 ${
                                openMegaMenu === 'NETSUITE' ? 'text-purple-600' : 'text-gray-900 group-hover:text-purple-600'
                              }`}>
                              NetSuite
                            </h3>
                              <span className="text-xs text-gray-400">Click</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">ERP & Business Management</p>
                          </div>
                          <div 
                            className={`group cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 ${
                              openMegaMenu === 'ZOHO' 
                                ? 'border-purple-400 bg-purple-50' 
                                : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
                            }`}
                            onClick={() => {
                              if (openDropdown === 'Solutions') handleMegaMenuClick('ZOHO');
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className={`text-base font-bold transition-colors duration-200 ${
                                openMegaMenu === 'ZOHO' ? 'text-purple-600' : 'text-gray-900 group-hover:text-purple-600'
                              }`}>
                              Zoho
                            </h3>
                              <span className="text-xs text-gray-400">Click</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">Complete Business Suite</p>
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-h-[400px]">
                        {/* NetSuite Content - Show when clicked */}
                        <div className={`transition-all duration-300 ${openMegaMenu === 'NETSUITE' ? 'opacity-100 visible' : 'opacity-0 invisible absolute'}`}>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              {item.children.find(child => child.label === 'NETSUITE')?.megaMenu?.categories.map((category, catIndex) => (
                                <div key={catIndex} className="space-y-2">
                                  <h4 className="text-md font-semibold text-purple-600 uppercase tracking-wide border-b border-purple-200 pb-1">
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
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
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                              {item.children.find(child => child.label === 'ZOHO')?.megaMenu?.categories.map((category, catIndex) => (
                                <div key={catIndex} className="space-y-2">
                                  <h4 className="text-md font-semibold text-purple-600 uppercase tracking-wide border-b border-purple-200 pb-1">
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {item.children.find(child => child.label === 'NETSUITE')?.megaMenu?.categories.map((category, catIndex) => (
                                <div key={catIndex} className="space-y-2">
                                  <h4 className="text-xs font-semibold text-purple-600 uppercase tracking-wide border-b border-purple-200 pb-1">
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-xs font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
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
              )}

              {/* Regular Mega Menu for other sections */}
              {item.title !== 'Solutions' && item.children.some(child => child.megaMenu) && (
                <div 
                  className={`absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                    openDropdown === item.title 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {item.children.map((child, i) => {
                        if (child.megaMenu) {
                          return (
                            <div key={i} className="space-y-4">
                              <div className="border-b border-gray-200 pb-3">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{child.megaMenu.title}</h3>
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                {child.megaMenu.categories.map((category, catIndex) => (
                                  <div key={catIndex} className="space-y-2">
                                    <h4 className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                                      {category.title}
                                    </h4>
                                    <ul className="space-y-1">
                                      {category.items.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <Link
                                            href={subItem.href}
                                            className="block text-xs text-gray-700 hover:text-purple-600 transition-colors duration-200 group">
                                            <div className="text-xs font-medium text-gray-900 group-hover:text-purple-600">
                                              {subItem.label}
                                            </div>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              )}
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
                isScrolled ? 'text-gray-700' : 'text-white'
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
            className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-3xl border-red-400  border-2  transition-all duration-300 ${
              isScrolled 
                ? 'text-black hover:bg-red-400' 
                : 'text-white border border-amber-400 hover:bg-red-400'
            }`}
          >
            Get in Touch
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
                  className={`w-full flex items-center justify-between text-lg font-semibold mb-2 transition-colors duration-300 ${
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
                                className={`block text-xs font-medium ${isScrolled ? 'text-gray-900 hover:text-purple-600 hover:bg-purple-50' : 'text-white/80 hover:text-purple-400 hover:bg-white/10'} transition-colors duration-200 rounded px-2 py-1`}
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
                                className={`block text-xs font-medium ${isScrolled ? 'text-gray-900 hover:text-purple-600 hover:bg-purple-50' : 'text-white/80 hover:text-purple-400 hover:bg-white/10'} transition-colors duration-200 rounded px-2 py-1`}
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
                              <div className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white/80'}`}>{link.label}</div>
                              <div className="pl-2 space-y-2">
                            {link.megaMenu.categories.map((category, catIndex) => (
                              <div key={catIndex} className="space-y-1">
                                    <div className={`text-xs font-semibold uppercase tracking-wide ${isScrolled ? 'text-purple-600' : 'text-purple-400'}`}>{category.title}</div>
                                <ul className="pl-2 space-y-1">
                                  {category.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={subItem.href}
                                            className={`block text-xs font-medium ${isScrolled ? 'text-gray-900 hover:text-purple-600 hover:bg-purple-50' : 'text-white/80 hover:text-purple-400 hover:bg-white/10'} transition-colors duration-200 rounded px-2 py-1`}
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
                              ? 'text-gray-700 hover:bg-gray-100' 
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
                className="block w-full text-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
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
