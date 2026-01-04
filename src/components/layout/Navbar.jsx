"use client";

import { Container } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { NAVIGATION_CONFIG } from '@/config';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronDown, ChevronRight, FileCheck, UserCheck, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Icon mapping for stats since we can't store components in JSON safely if we want strict serializability
const ICON_MAP = {
  award: Award,
  'file-check': FileCheck,
  users: Users,
  'user-check': UserCheck
};

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Software Product Development');

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Biztech
            </span>
            <sup className="text-xs text-muted-foreground">®</sup>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAVIGATION_CONFIG.main.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.type === 'mega' ? 'mega' : null)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors",
                    (activeMenu === 'mega' && item.type === 'mega') && "text-orange-500"
                  )}
                >
                  {item.label}
                  {item.type !== 'link' && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeMenu === 'mega' && item.type === 'mega' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[90vw] max-w-7xl bg-white shadow-xl border-t border-slate-100 rounded-b-xl overflow-hidden"
                      style={{ transform: 'translate(-50%, 0)' }} // Centering fix
                    >
                      <div className="flex h-[500px]">
                        {/* Column 1: Categories */}
                        <div className="w-1/4 bg-orange-50 p-6 border-r border-orange-100">
                          <h3 className="font-semibold text-orange-600 mb-6 px-4">Services</h3>
                          <div className="space-y-1">
                            {item.columns[0].items.map((cat) => (
                              <button
                                key={cat.label}
                                onMouseEnter={() => setActiveCategory(cat.label)}
                                className={cn(
                                  "w-full flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-all",
                                  activeCategory === cat.label
                                    ? "bg-white text-orange-600 shadow-sm font-medium"
                                    : "text-slate-600 hover:bg-orange-100/50"
                                )}
                              >
                                <span className="flex items-center">
                                  {/* {cat.icon && <cat.icon className="mr-2 h-4 w-4" />} */}
                                  {cat.label}
                                </span>
                                {activeCategory === cat.label && (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Sub-items */}
                        <div className="w-1/2 p-8 grid grid-cols-2 gap-x-8 gap-y-4 content-start">
                          <div className="col-span-2 mb-4">
                            <h3 className="font-bold text-slate-800 text-lg">{activeCategory}</h3>
                            <div className="h-1 w-12 bg-orange-500 mt-2 rounded-full"></div>
                          </div>
                          {item.columns[1].items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="group flex items-center p-2 rounded-md hover:bg-slate-50 transition-colors"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-orange-500 mr-3 transition-colors"></span>
                              <span className="text-slate-600 group-hover:text-orange-600 font-medium transition-colors">
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* Column 3: Stats */}
                        <div className="w-1/4 bg-slate-50 p-8 flex flex-col justify-center space-y-8 border-l">
                          {item.columns[2].items.map((stat, idx) => {
                            const Icon = ICON_MAP[stat.icon];
                            return (
                              <div key={idx} className="flex items-start space-x-4">
                                <div className={cn(
                                  "p-3 rounded-xl bg-orange-100/50 text-orange-600",
                                  idx === 1 && "text-blue-600 bg-blue-100/50",
                                  idx === 2 && "text-pink-600 bg-pink-100/50",
                                  idx === 3 && "text-amber-600 bg-amber-100/50"
                                )}>
                                  {Icon && <Icon className="h-6 w-6" />}
                                </div>
                                <div>
                                  <div className={cn(
                                    "text-2xl font-bold text-orange-600",
                                    idx === 1 && "text-blue-600",
                                    idx === 2 && "text-pink-600",
                                    idx === 3 && "text-amber-600"
                                  )}>
                                    {stat.value}
                                  </div>
                                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                                    {stat.label}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-6 font-semibold shadow-lg shadow-orange-200">
              Let's Connect <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
