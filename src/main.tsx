import React, { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.css'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Wedding App caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF5EE] flex flex-col items-center justify-center p-6 text-center text-[#7E2E40]">
          <h1 className="text-xl font-cinzel font-bold text-[#7E2E40] mb-2">
            Swetha & Deepak Kumar Wedding Invitation
          </h1>
          <p className="text-sm mb-4 text-[#5C1D2A]">
            Welcome to our wedding celebration!
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false })
              window.location.reload()
            }}
            className="px-6 py-2.5 rounded-full bg-[#7E2E40] text-[#FFF0F3] font-cinzel text-xs tracking-wider uppercase border border-[#E8C5CB]"
          >
            Enter Wedding Invitation
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
)
