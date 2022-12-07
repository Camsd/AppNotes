import { useState } from 'react';
import './App.css';
import Mensaje from './components/mensaje'

function App() {
  // const [nombre, setNombre] = useState('cambio 1');
  const [items, setItems] = useState([{
    id:0,
    title: 'mi primer nota',
    text: '# Hola a todos',
    pinned: false,
    created: Date.now()
  },
  {
    id:0,
    title: 'mi segunda nota',
    text: '# Hola a todos',
    pinned: false,
    created: Date.now()
  }]);

  function handleClick(){
    const note = {
    id:2,
    title: 'mi tercera nota nota',
    text: '# Hola a todos',
    pinned: false,
    created: Date.now()
    };
    setItems([...items, note]);
  }

  return(
    <div className="App container">
      <div className='panel'>
        <div className='menu'>
          <input className='search' placeholder='search....'></input>
          <button className='btn' onClick={(e)=>handleClick()}>+ Nueva nota</button>
        </div>
        <div className='list'>
            {
              items.map((item, i)=>{
                return <div key={item.id}>{item.title}</div>
              })
            }
          </div>
      </div>
      <div>
        <div className='editor'></div>
        <div className='preview'></div>
      </div>
    </div>
  );
  
}

export default App;
