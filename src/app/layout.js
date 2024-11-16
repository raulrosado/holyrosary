"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, ChevronDownIcon, CreditCardIcon, MapIcon } from '@heroicons/react/20/solid'

const navigationtop = [
  {
    name: 'ABOUT US', 'opciones': [
      { name: 'Hours and Locations', description: 'Get a better understanding of your traffic', href: 'https://holyrosarycu.org/hours-and-locations.html', icon: MapIcon },
      { name: 'Annual Report', description: 'Speak directly to your customers', href: '#', icon: ChartPieIcon },
      { name: 'Career Opportunities', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
      { name: 'Contact Us', description: 'Connect with third-party tools', href: '/about', icon: SquaresPlusIcon },
      { name: 'Meet the Team', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
      { name: 'Volunteer Board', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]
  },
  { name: 'RESOURCES', 'opciones': [
    { name: 'Calculators', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Forms', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'e-Statements', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Newsletter', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Other Resources', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Auto Rates', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Shared Branch', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Videos', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ] },
  { name: 'LOANS', 'opciones': [
    { name: 'Business Loans', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Summer Loans', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Skip-a-Pay', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Auto', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Boat/Recreational Vehicle', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Home Equity Loans', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Loan Protection', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Mortgage Loans', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Personal', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Personal Line of Credit', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Secured/Credit Builders', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Tight Spot', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'VISA Credit Card', description: 'Connect with third-party tools', href: '#', icon: CreditCardIcon },
  ] },
  { name: 'SERVICES', 'opciones': [
    { name: 'Business Services', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Cards', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Checking', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Money Market', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Certificates of Deposit', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Savings', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Rates CDs and Savings', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Youth Savings', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Save the Change', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Wealth Builders CD', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Mobile App', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Video Banking', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Online Banking', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Other Services', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ] },
  { name: 'FINANCIAL WELLNESS', 'opciones': [
    { name: 'Business Resources', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Budgeting & Saving', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Getting Out of Debt', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    { name: 'Buying a Home', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Credit Score', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Credit Check Plus', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Solid Foundations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'HomeStart', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'College Roadmap', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'GreenPath', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ] },
]

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}


export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Holy Rosary</span>
              <img
                className="h-2/3 w-auto object-cover"
                src="holylogo.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigationtop.map((item) => (
              <Popover className="relative" key={item.name}>
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  <span >{item.name}</span>
                  <ChevronDownIcon aria-hidden="true" className="size-5" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {item.opciones.map((item)=>(
                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div>
                              <Link href={item.href} className="font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                            </div>
                          </div>
                      ))
                      }
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>
        
        
        {children}


        <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img
                className="h-16 w-auto object-cover"
                src="holylogo.png"
                alt="Company name"
              />
              <p className="text-sm leading-6 text-gray-600">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
