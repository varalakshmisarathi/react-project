import React from 'react';
import UseCustom from './UseCustom';

function App() {
  const [data] = UseCustom('https://jsonplaceholder.typicode.com/todos');

  // Check if data is available before rendering
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
