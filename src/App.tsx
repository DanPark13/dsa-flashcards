import './App.css'

import Header from './components/Header';
import Card from './components/Card';

function App() {

  return (
    <>
      <Header />
      <div style={{ padding: "40px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Card />
      </div>
    </>
  )
}

export default App;
