"use client";

/**
 * Error Boundary Component
 * 
 * @fileoverview Catches JavaScript errors in component tree and displays fallback UI
 * @module components/errors/ErrorBoundary
 */

import { Component } from "react";
import { ROUTES } from "@/lib/routes";
import { captureException } from "@/lib/error-tracking";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/**
 * @typedef {Object} ErrorBoundaryState
 * @property {boolean} hasError - Whether an error has occurred
 * @property {Error | null} error - The error object
 */

/**
 * @typedef {Object} ErrorBoundaryProps
 * @property {React.ReactNode} children - Child components
 * @property {React.ComponentType} [fallback] - Custom fallback component
 */

class ErrorBoundary extends Component {
  /**
   * @param {ErrorBoundaryProps} props
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * @param {Error} error
   * @returns {ErrorBoundaryState}
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * @param {Error} error
   * @param {import('react').ErrorInfo} errorInfo
   */
  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // Send to error tracking service
    captureException(error, {
      errorInfo,
      componentStack: errorInfo.componentStack,
      errorBoundary: true,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const Fallback = this.props.fallback;
        return <Fallback error={this.state.error} reset={this.handleReset} />;
      }

      return (
        <Container className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-4xl font-bold">Something went wrong</h1>
            <p className="text-muted-foreground">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="text-left bg-muted p-4 rounded-lg">
                <summary className="cursor-pointer font-semibold mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <Button onClick={this.handleReset} variant="primary">
                Try Again
              </Button>
              <Button
                onClick={() => (window.location.href = ROUTES.PUBLIC.HOME)}
                variant="secondary"
              >
                Go Home
              </Button>
            </div>
          </div>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
