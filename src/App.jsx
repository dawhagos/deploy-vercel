import { useState } from 'react'

function App() {

  const [data, setData] = useState('');

  async function fetchData() {
    const url = `${import.meta.env.VITE_APP_API_URL}/test`;
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  return (
    <div className="App">
      <button onClick={fetchData}>fetch data</button>
      <div>result = {data}</div>
    </div>
  )
}

export default App
