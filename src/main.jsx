import React, { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/40 shadow-lg">
            <span className="material-symbols-outlined text-[48px] text-primary mb-4">
              refresh
            </span>
            <h2 className="text-xl font-bold text-on-surface mb-2">Memuat Ulang Halaman...</h2>
            <p className="text-sm text-on-surface-variant mb-6">
              Sistem sedang menyegarkan tampilan klinik untuk kenyamanan Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm shadow hover:bg-primary/90 transition-all"
            >
              Muat Ulang
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
