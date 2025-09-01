import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import FirebaseApp from './FirebaseApp.tsx'
// import TestApp from './TestApp.tsx'
import { ErrorBoundary } from './ErrorBoundary.tsx'
// import SimpleTest from './SimpleTest.tsx'
// import MinimalApp from './MinimalApp.tsx'
// import TestFirebase from './TestFirebase.tsx'

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
} else {
  console.error('Root element not found!');
  document.body.innerHTML = '<h1 style="color:red">Root element not found!</h1>';
}
