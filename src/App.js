import { useState } from 'react';
import Panel from './components/panel';
import Menu from './components/menu';
import './App.css';

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
    title: 'mi tercera nota no debe pasar de 20 caracteres',
    text: '# Hola a todos',
    pinned: true,
    created: Date.now()
    };
    setItems([...items, note]);
  }

  return(
    <div className="App container">
      <Panel>
        <Menu>
        </Menu>
        <div className='list'>
            {
              items.map((item, i)=>{
                return <div key={item.id} className='note'>
                  <div>
                    {item.title === ''?'[Sin titulo]' : item.title.substring(0,20)}
                  </div>

                  <div>
                    <button className='pinButton'>{item.pinned? 'Pinned': 'Pin'}</button>
                  </div>
                </div>
              })
            }
          </div>
      </Panel>
      <div>
        <div className='editor'>
          <div>
            <input className='title' /></div>
          </div>

          <div className='editor-textarea'>
          <textarea className='content'></textarea>
          </div>
        </div>
        <div className='preview'></div>
      </div>
  );
  
}

export default App;
