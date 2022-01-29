import { useState, useEffect } from 'react';
import './App.css';
import Controls from './components/Controls';


function App() {
  const [values, setValues] = useState({
    horizontal:10,
    vertical:10,
    blur:10,
    spread:10,
    color:'#000000',
    checked:false
  });

  const valuesInputHandler = (values) => {
    setValues(values);
  };

  return (
    <div className="App">
      <div className="controls">
        <Controls valuesInputHandler={valuesInputHandler} />
      </div>
      <div className='output'>
        <div className="box" style={{ boxShadow: `${values.checked ? 'inset' : ''} ${values.horizontal}px ${values.vertical}px ${values.blur}px ${values.spread}px ${values.color}` }}>
        </div>
      </div>
    </div>
  );
}

export default App;
