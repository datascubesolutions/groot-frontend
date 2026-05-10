// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authService } from "@/services/authService";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Signing you in...");

    try {
      await authService.login(email, password);
      toast.success("Login successful! Redirecting...", { id: toastId });
      router.push("/admin/dashboard");
    } catch (err) {
      const isNetworkError =
        err instanceof TypeError && err.message === "Failed to fetch";
      toast.error(
        isNetworkError
          ? "Network error. Please check your connection."
          : err.message || "Login failed. Please try again.",
        { id: toastId }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* Left Panel - Hero/Branding */}
      <div className="relative hidden flex-col items-center justify-center overflow-hidden bg-[#0A1A1F] px-6 text-white lg:flex">
        {/* Background Gradients/Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 opacity-20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-secondary/10 opacity-20 blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/60 opacity-80" />

          {/* Subtle Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/svg/Groot%20final%20logo.png"
              alt="Groot Logo"
              width={800}
              height={320}
              className="h-64 w-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl"
          >
            Transforming Data into <br />
            <span className="font-black text-primary">Intelligent Action</span>
          </motion.h1>

          {/* Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-md text-base leading-relaxed text-gray-400"
          >
            Unlock the power of your enterprise data with our advanced analytics
            platform. Drive decisions with precision and speed.
          </motion.p>
        </div>

        {/* Footer Links - Inline (Spread) */}
        <div className="absolute bottom-12 z-10 flex w-full justify-between px-12 text-xs font-medium uppercase tracking-widest text-gray-500">
          <span>© 2026 Groot Analytics</span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#050C0F] p-6 sm:p-12 lg:p-16">
        {/* Navigation Back */}
        <Link
          href="/"
          className="absolute left-6 top-6 z-20 flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white sm:left-12 sm:top-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to website
        </Link>

        {/* Blog-like Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-primary/10 opacity-30 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/10 opacity-20 blur-[90px]" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-[420px] space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/30">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Welcome Back
            </h2>
            <p className="font-medium text-gray-400">
              Sign in to your Admin Panel
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
                <label
                  className="text-sm font-medium text-gray-300"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="group relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-mint" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 border-white/10 bg-white/5 pl-10 text-white transition-all duration-300 placeholder:text-gray-500 focus:border-mint/50 focus:bg-white/10 focus:ring-2 focus:ring-mint/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    className="text-sm font-medium text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="group relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-mint" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 border-white/10 bg-white/5 pl-10 pr-10 text-white transition-all duration-300 placeholder:text-gray-500 focus:border-mint/50 focus:bg-white/10 focus:ring-2 focus:ring-mint/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="h-11 w-full transform border border-white/10 bg-neutral-800 text-sm font-bold tracking-wide text-white shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-700"
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
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0E1517] bg-transparent px-2 text-gray-500">
                  Or continue with
                </span>
                {/* Small hack for the bg color of "Or continue with" text to match container, but since container is glass, transparent is better, or just text-shadow */}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                type="button"
                className="h-11 border-white/10 bg-white/5 font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                type="button"
                className="h-11 border-white/10 bg-white/5 font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.9 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
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
