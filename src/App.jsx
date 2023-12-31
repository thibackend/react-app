import { useState, useEffect } from 'react'
import './App.css'
import ApiService from './services/apiconfig'
function App() {
  const [data, setData] = useState([])
  // Example of using the ApiService
  const fetchData = () => {
    ApiService.get('/posts').then(data => console.log('GET response:', data))
  };
  setData(['thi handsome'])
  useEffect(() => {
    console.log("UseEffect run")
    fetchData();
  }, []);
  console.log("side run");
  console.log("data:",data);
  return (
    <div>
      {console.log("DOM render")}
      <h1>MyComponent</h1>
      {/* Your component UI goes here */}
    </div>
  )
}
export default App
