import { useState } from 'react';

export default function SimpleApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: '18px',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#2563eb',
        color: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '32px' }}>
          🎉 Willing Box App
        </h1>
        <p style={{ margin: '0', fontSize: '16px' }}>
          Relationship Growth Through Intentional Actions
        </p>
      </div>

      <div style={{
        backgroundColor: '#f3f4f6',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0 0 15px 0', color: '#1f2937' }}>
          Welcome! Ready to get started?
        </h2>
        <p style={{ margin: '0 0 15px 0', color: '#374151' }}>
          Click the button below to test interactivity:
        </p>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#10b981',
            color: '#ffffff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Clicked {count} times
        </button>
        
        <button
          onClick={() => alert('Authentication would start here!')}
          style={{
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Start Login Process
        </button>
      </div>

      <div style={{
        backgroundColor: '#fef3c7',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #f59e0b'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#92400e' }}>
          🔧 Debug Info
        </h3>
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#b45309' }}>
          <li>React is rendering ✅</li>
          <li>State management working ✅</li>
          <li>Event handlers functional ✅</li>
          <li>CSS styles applying ✅</li>
        </ul>
      </div>
    </div>
  );
}