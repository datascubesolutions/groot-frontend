"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2">
      {/* Left Panel - Hero/Branding */}
      <div className="hidden lg:flex flex-col justify-center items-center p-8 xl:p-12 relative overflow-hidden bg-secondary text-white">
        {/* Background Gradients/Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl opacity-40 mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/5 opacity-90" />
          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight"
          >
            Transforming Data into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-primary">Intelligent Action</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-10 relative w-full flex justify-center perspective-1000"
          >
            {/* Glow effect behind logo - intensified for contrast */}


            <Image
              src="/svg/Groot final logo.png"
              alt="Groot Logo"
              width={900}
              height={340}
              className="h-auto w-full max-w-[900px] object-contain drop-shadow-2xl relative z-10"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-mint/90 font-light leading-relaxed max-w-lg"
          >
            Unlock the power of your enterprise data with our advanced analytics platform.
          </motion.p>
        </div>

        {/* Footer Links */}
        <div className="absolute bottom-8 left-0 w-full z-10 flex justify-center">
          <div className="flex items-center gap-6 text-sm text-mint/60 font-medium whitespace-nowrap">
            <span>© 2026 Groot Analytics</span>
            <Link href="/privacy" className="hover:text-mint transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-mint transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 bg-background relative overflow-hidden">
        {/* Blog-like Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60 mix-blend-screen translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[90px] opacity-40 mix-blend-screen -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        </div>

        <div className="w-full max-w-[420px] space-y-8 relative z-10 bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h2>
            <p className="text-muted-foreground/90 font-medium">
              Sign in to your dashboard
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleLogin}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="email">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="pl-10 h-11 bg-white/60 border-input transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground" htmlFor="password">Password</label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm font-bold text-secondary hover:text-primary transition-colors hover:underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-11 bg-white/60 border-input transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-secondary to-primary text-white shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 text-sm font-bold tracking-wide"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="h-11 bg-white/50 border-secondary/20 text-secondary font-semibold hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button" className="h-11 bg-white/50 border-secondary/20 text-secondary font-semibold hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
                GitHub
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
