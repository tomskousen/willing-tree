import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#fee', border: '1px solid #fcc', margin: '20px' }}>
          <h2 style={{ color: '#c00' }}>Something went wrong!</h2>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
            <summary>Error Details (click to expand)</summary>
            <p><strong>Error:</strong> {this.state.error?.toString()}</p>
            <p><strong>Stack:</strong></p>
            <pre style={{ fontSize: '12px', overflow: 'auto' }}>{this.state.error?.stack}</pre>
            {this.state.errorInfo && (
              <>
                <p><strong>Component Stack:</strong></p>
                <pre style={{ fontSize: '12px', overflow: 'auto' }}>{this.state.errorInfo.componentStack}</pre>
              </>
            )}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}