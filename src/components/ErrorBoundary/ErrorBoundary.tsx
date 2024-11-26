'use client';
import { Component } from 'react';
import { ButtonNavigate } from '@components/buttonNavigate/buttonNavigate';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo?: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col gap-6 items-center justify-center h-[100vh]">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <ButtonNavigate path={'/'} text={'back to home'} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
