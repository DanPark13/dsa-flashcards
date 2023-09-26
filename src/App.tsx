import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  const updateCount = () => setCount(count);

  return (
    <>
      <Header />
      {/* <p>Card Count: {count}</p> */}
      <div style={{ padding: "40px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card />
      </div>
    </>
  )
}

export default App;
