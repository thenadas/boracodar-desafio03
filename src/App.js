import { useState } from 'react';
import { List, arrayMove } from 'react-movable';
import { GiArrowCursor, GiMove } from "react-icons/gi";

import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';
import ButtonTerciario from './components/ButtonTerciario';
import Cursor from './components/Cursor';
import './global.css';  

function App() {

  const[items, setItems] = useState([
    "Era o primeiro", 
    "Era o ultimo", 
    "depois do ultimo",
  ])

  const[disabled, setDisabled] = useState(false);

  function disabledClick() {  
    setDisabled(true);
}

  return (
    <div className='container-main'>
      <div className="container">
        <header>
          <span></span>
          <h2>Botão Primário</h2>
          <h2>Botão Secundário</h2>
          <h2>Botão Terciário</h2>
          <h2>Cursor</h2>
        </header>
        <div className='container-buttons'>
        <ul>
          <li>Default</li>
          <li>Hover</li>
          <li>Focus</li>
          <li>Disabled</li>
          <li>Loading</li>
          <li>Movable</li>
        </ul>
          <section>
            <ButtonPrimary name='Default Primary' className='btn-primary'/>
            <ButtonSecondary name='Default Secondary' className='btn-secondary'/>
            <ButtonTerciario name='Default Tertiary' className='btn-terciario'/> 
            <GiArrowCursor className='cursor-icon'/>

            <ButtonPrimary name='Hover Primary' className='btn-hover btn-primary'/>
            <ButtonSecondary name='Hover Secondary' className='btn-hover btn-secondary'/>
            <ButtonTerciario name='Hover Tertiary' className='btn-hover btn-terciario'/>
            <GiArrowCursor className='cursor-icon'/>

            <ButtonPrimary name='Focus Primary' className='btn-focus btn-primary'/>
            <ButtonSecondary name='Focus Secondary' className='btn-focus btn-secondary'/>
            <ButtonTerciario name='Focus Tertiary' className='btn-focus btn-terciario'/>
            <GiArrowCursor className='cursor-icon'/>

            <ButtonPrimary name='Disabled Primary' className='btn-disabled btn-primary' disabled={disabled} onClick={disabledClick}/>
            <ButtonSecondary name='Disabled Secondary' className='btn-disabled btn-secondary' disabled={disabled} onClick={disabledClick}/>
            <ButtonTerciario name='Disabled Tertiary' className='btn-disabled btn-terciario' disabled={disabled} onClick={disabledClick}/>
            <Cursor name='Cursor Disabled' className='cursor'/>

            <ButtonPrimary name='Loading Primary' className='btn-primary btn-loading' status='loading'/>
            <ButtonSecondary name='Loading Secondary' className='btn-secondary btn-loading' status='loading'/>
            <ButtonTerciario name='Loading Tertiary' className='btn-terciario btn-loading' status='loading'/>
            <Cursor name='Cursor loading' className='cursor'/>

            <ButtonPrimary name='Movable Primary' className='btn-primary'/>
            <ButtonSecondary name='Movable Secondary' className='btn-secondary'/>
            <ButtonTerciario name='Movable Tertiary' className='btn-terciario'/>
            <GiMove className='cursor-icon'/>
          
          </section>
        </div>
      </div>
      <article className='container-left'>
          <h1>Teste os Botões</h1>
          <p>Interaja com os botões e observe a mudança de aparência e de cursores.</p>
          <p>Mexa-os</p>
          <div className='container-btn'>
            <List
            values={items}
            onChange={({ oldIndex, newIndex }) =>
              setItems(arrayMove(items, oldIndex, newIndex))
            }
            renderList={({ children, props }) => <div className='container-btn' {...props}>{children}</div>}
            renderItem={({ value, props }) =>  
              <button className="btn-movable"{...props}>{value}</button>
              }
            />
          </div>
        </article>
    </div>
  );
}

export default App;
