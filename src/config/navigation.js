/**
 * Navigation Configuration
 *
 * @fileoverview Defines the main navigation structure and menu items
 * Matches the reference design with centralized data
 *
 * @module config/navigation
 */

import {
  Cloud,
  Code,
  Cpu,
  Layers,
  ShoppingCart,
  Zap
} from 'lucide-react';

export const NAVIGATION_CONFIG = {
  main: [
    {
      label: 'Services',
      href: '/services',
      type: 'mega',
      columns: [
        {
          id: 'categories',
          title: 'Categories',
          items: [
            { label: 'Software Product Development', href: '/services/software-product-development', icon: Code, active: true },
            { label: 'AI-Powered Solutions', href: '/services/ai-solutions', icon: Cpu },
            { label: 'Enterprise Applications', href: '/services/enterprise-applications', icon: Layers },
            { label: 'Custom Software Solutions', href: '/services/custom-software', icon: Zap },
            { label: 'Ecommerce & Growth Consulting', href: '/services/ecommerce', icon: ShoppingCart },
            { label: 'CloudOps', href: '/services/cloudops', icon: Cloud },
          ]
        },
        {
          id: 'category-details',
          title: 'Software Product Development', // Dynamic based on selection
          items: [
            { label: 'Product Strategy', href: '/services/software-product-development/strategy' },
            { label: 'Software Architecture & Design', href: '/services/software-product-development/architecture' },
            { label: 'MVP Development', href: '/services/software-product-development/mvp' },
            { label: 'Software Product Development', href: '/services/software-product-development/development' },
            { label: 'Platform Plugin Development', href: '/services/software-product-development/plugins' },
            { label: 'Quality Assurance', href: '/services/software-product-development/qa' },
            { label: 'CTO As A Service', href: '/services/software-product-development/cto-service' },
          ]
        },
        {
          id: 'stats',
          type: 'stats',
          items: [
            { value: '19+', label: 'Years Of Experience', icon: 'award' },
            { value: '1200+', label: 'Projects Completed', icon: 'file-check' },
            { value: '250+', label: 'Dynamic Individual', icon: 'users' },
            { value: '98%', label: 'Retain Customers', icon: 'user-check' },
          ]
        }
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      type: 'dropdown',
      items: [
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Fintech', href: '/industries/fintech' },
        { label: 'Retail & Ecommerce', href: '/industries/retail' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Logistics', href: '/industries/logistics' },
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      type: 'dropdown',
      items: [
        { label: 'Data Analytics', href: '/solutions/data-analytics' },
        { label: 'IoT Solutions', href: '/solutions/iot' },
        { label: 'Mobile Apps', href: '/solutions/mobile' },
      ]
    },
    {
      label: 'Technologies',
      href: '/technologies',
      type: 'dropdown',
      items: [
        { label: 'React / Next.js', href: '/technologies/react' },
        { label: 'Node.js', href: '/technologies/node' },
        { label: 'Python / AI', href: '/technologies/python' },
        { label: 'Cloud (AWS/Azure)', href: '/technologies/cloud' },
      ]
    },
    {
      label: 'Our Work',
      href: '/work',
      type: 'link'
    },
    {
      label: 'About Us',
      href: '/about',
      type: 'dropdown',
      items: [
        { label: 'Company Overview', href: '/about/company' },
        { label: 'Careers', href: '/about/careers' },
        { label: 'Contact', href: '/contact' },
      ]
    }
  ]
};
