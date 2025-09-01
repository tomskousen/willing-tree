import React, { useState } from 'react';

export default function MinimalApp() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Minimal App - No Firebase</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>If you see this, React is working but Firebase imports are causing issues.</p>
    </div>
  );
}