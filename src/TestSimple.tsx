export default function TestSimple() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1>Test Simple - App is Loading!</h1>
      <p>If you see this, the React app is working.</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}