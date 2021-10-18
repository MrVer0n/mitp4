import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './AppState';



function AppTask2() {
 

let [isContainerActive, setIsContainerActive] = React.useState(AppState.getIsContainerActive());

let [isRe, setIsRe] = React.useState(true)

  function log(id) {
    alert('Click at ' + id);
    console.log('Click at ' + id);
  }

  return (  
    <div className="App">
      Задание 2
      <div
      id="React1"
      onClick={() => log('React1')}
      className={`Rect1${isContainerActive[1] ? " Rect-active" : ""}`}>
       1
      </div>

      <div
      id="React2" 
      onClick={() => log('React2')}
      className={`Rect2${isContainerActive[2] ? " Rect-active" : ""}`}>
      2
      </div>

      <div 
      id="React3" 
      onClick={() => log('React3')}
      className={`Rect3${isContainerActive[3] ? " Rect-active" : ""}`}>
        3
      </div>

      <div 
      id="React4" 
      onClick={() => log('React4')}
      className={`Rect4${isContainerActive[4] ? " Rect-active" : ""}`}>
        4
      </div>

      <div 
      id="React5" 
      onClick={() => log('React5')}
      className={`Rect5${isContainerActive[5] ? " Rect-active" : ""}`}>
        5
      </div>

      <div 
      id="React6" 
      onClick={() => log('React6')}
      className={`Rect6${isContainerActive[6] ? " Rect-active" : ""}`}>
        6
      </div>

      <div 
      id="React7" 
      onClick={() => log('React7')}
      className={`Rect7${isContainerActive[7] ? " Rect-active" : ""}`}>
        7
      </div>

      <div 
      id="React8" 
    onClick={() => log('React8')}
      className={`Rect8${isContainerActive[8] ? " Rect-active" : ""}`}>
        8
      </div>

      <div 
      id="React9" 
      onClick={() => log('React9')}
      className={`Rect9${isContainerActive[9] ? " Rect-active" : ""}`}>
        9
      </div>

      <div 
      id="React10" 
      onClick={() => log('React10')}
      className={`Rect10${isContainerActive[10] ? " Rect-active" : ""}`}>
        10
      </div>

      <div 
      id="React11" 
      onClick={() => log('React11')}
      className={`Rect11${isContainerActive[11] ? " Rect-active" : ""}`}>
        11
      </div>

      <div 
      id="React12" 
      onClick={() => log('React12')}
      className={`Rect12${isContainerActive[12] ? " Rect-active" : ""}`}>
        12
      </div>

      <div 
      id="React13" 
      onClick={() => log('React13')}
      className={`Rect13${isContainerActive[13] ? " Rect-active" : ""}`}>
        13
      </div>
           
    </div>
  );
}

export default AppTask2;


