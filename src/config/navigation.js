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
  Zap
} from 'lucide-react';

export const NAVIGATION_CONFIG = {
  main: [
    {
      label: 'Services',
      href: '/services/define-your-roadmap/maturity-assessment',
      type: 'mega',
      columns: [
        {
          id: 'categories',
          title: 'Capabilities',
          items: [
            { label: 'Define Your Roadmap', href: '/services/define-your-roadmap', icon: Cloud, active: true },
            { label: 'Build Your Foundation', href: '/services/build-your-foundation', icon: Layers },
            { label: 'Decision Intelligence', href: '/services/decision-intelligence', icon: Zap },
            { label: 'AI That Ships', href: '/services/ai-that-ships', icon: Cpu },
            { label: 'Scale Your Team', href: '/services/scale-your-team', icon: Code },
          ]
        },
        {
          id: 'category-details',
          title: 'Assessments & Strategy', // Dynamic based on selection ideally, but static for now
          items: [
            { label: 'Maturity Assessment', href: '/services/define-your-roadmap/maturity-assessment' },
            { label: 'Enterprise Data Strategy', href: '/services/define-your-roadmap/enterprise-data-strategy' },
            { label: 'Stack Evaluation', href: '/services/define-your-roadmap/stack-evaluation' },
            { label: 'Data Modernization', href: '/services/build-your-foundation/data-modernization' },
            { label: 'Data Integration', href: '/services/build-your-foundation/data-integration' },
            { label: 'Executive Analytics', href: '/services/decision-intelligence/executive-analytics' },
            { label: 'Semantic Modeling', href: '/services/decision-intelligence/semantic-modeling' },
            { label: 'Self-Service Enablement', href: '/services/decision-intelligence/self-service-enablement' },
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
      label: 'Microsoft',
      href: '/microsoft/fabric',
      type: 'dropdown',
      items: [
        { label: 'Fabric', href: '/microsoft/fabric' },
        { label: 'Power BI', href: '/microsoft/power-bi' },
        { label: 'Copilot', href: '/microsoft/copilot' },
        { label: 'AI Foundry', href: '/microsoft/ai-foundry' },
        { label: 'Purview', href: '/microsoft/purview' },
        { label: 'Azure', href: '/microsoft/azure' },
        { label: 'DevOps', href: '/microsoft/devops' },
      ]
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
