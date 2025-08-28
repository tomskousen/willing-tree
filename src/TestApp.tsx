export default function TestApp() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#ff0000',
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: 'bold',
      minHeight: '100vh'
    }}>
      <h1>🚀 TEST APP IS WORKING!</h1>
      <p>If you can see this red background and white text, React is rendering.</p>
      <button onClick={() => alert('Button clicked!')}>
        Click me to test JavaScript
      </button>
    </div>
  );
}