import { useState } from 'react';
import './App.css';
import Mensaje from './components/mensaje'

function App() {
  const [nombre, setNombre] = useState('cambio 1');
  return(
    <div>
      <input type="text" onChange={ (e) => setNombre(e.target.value) } />
      <Mensaje texto={nombre} />
    </div>
  );
  
}

export default App;
