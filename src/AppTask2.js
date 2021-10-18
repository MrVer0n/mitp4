import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState';


function AppTask2() {

  
  let isContainerActive = AppState.getIsContainerActive()
  function log(id) {
    alert('Click at ' + id);
    console.log('Click at ' + id);
  }
  function moveMouse(id) {
    for (let index = 0; index < isContainerActive.length; ++index) {
      isContainerActive[index]= false
  }
    isContainerActive[id] = true
    AppState.setIsContainerActive(isContainerActive)
    AppState.setIdBox(id)
    AppState.setTChek()
    return ReactDOM.render(
      <AppTask2 />,
    document.getElementById('root')
  );
  }

  return (  
    <div className="App">
      <div
      id="React1"
      onMouseEnter={() => moveMouse(1)}
      onClick={() => log('React1')}
      className={`Rect1${isContainerActive[1] ? " Rect-active" : ""}`}>

      </div>

      <div
      id="React2" 
      onMouseEnter={() => moveMouse(2)}
      onClick={() => log('React2')}
      className={`Rect2${isContainerActive[2] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React3" 
      onMouseEnter={() => moveMouse(3)}
      onClick={() => log('React3')}
      className={`Rect3${isContainerActive[3] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React4" 
      onMouseEnter={() => moveMouse(4)}
      onClick={() => log('React4')}
      className={`Rect4${isContainerActive[4] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React5" 
      onMouseEnter={() => moveMouse(5)}
      onClick={() => log('React5')}
      className={`Rect5${isContainerActive[5] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React6" 
      onMouseEnter={() => moveMouse(6)}
      onClick={() => log('React6')}
      className={`Rect6${isContainerActive[6] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React7" 
      onMouseEnter={() => moveMouse(7)}
      onClick={() => log('React7')}
      className={`Rect7${isContainerActive[7] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React8" 
      onMouseEnter={() => moveMouse(8)}
      onClick={() => log('React8')}
      className={`Rect8${isContainerActive[8] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React9" 
      onMouseEnter={() => moveMouse(9)}
      onClick={() => log('React9')}
      className={`Rect9${isContainerActive[9] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React10" 
      onMouseEnter={() => moveMouse(10)}
      onClick={() => log('React10')}
      className={`Rect10${isContainerActive[10] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React11" 
      onMouseEnter={() => moveMouse(11)}
      onClick={() => log('React11')}
      className={`Rect11${isContainerActive[11] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React12" 
      onMouseEnter={() => moveMouse(12)}
      onClick={() => log('React12')}
      className={`Rect12${isContainerActive[12] ? " Rect-active" : ""}`}>

      </div>

      <div 
      id="React13" 
      onMouseEnter={() => moveMouse(13)}
      onClick={() => log('React13')}
      className={`Rect13${isContainerActive[13] ? " Rect-active" : ""}`}>

      </div>
           
    </div>
  );
}

export default AppTask2;


