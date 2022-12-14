import React, {useState} from 'react'
import './App.css';
import CarShow from './CarShow';
import Portals from './Portals';

function App() {
  const [currentScene, setCurrentScene] = useState('')
  switch(currentScene){
    case 'portals': return <Portals />
    case 'show': return <CarShow />
    case 'racing': return <h1>Racing</h1>
    case 'default' : <h1>Hello World!</h1>
  }
  return (
    <div className="App">
      <button onClick={()=> setCurrentScene('portals')}>Portals</button>
      <button onClick={()=> setCurrentScene('show')}>Car Show</button>
      <button onClick={()=> setCurrentScene('racing')}>Racing</button>
    </div>
  );
}

export default App;
