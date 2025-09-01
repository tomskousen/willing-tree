export default function SimpleTest() {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '48px', textAlign: 'center', marginTop: '100px' }}>
        SIMPLE TEST - NO DEPENDENCIES
      </h1>
      <p style={{ textAlign: 'center', fontSize: '24px' }}>
        If you see this, React works. Time: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}