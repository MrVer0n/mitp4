import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppTask2 from './AppTask2';
import AppState from './AppState';

function App() {

window.addEventListener('keyup', 
function(event){
 const mapBox = AppState.getMapBoxState()
 let isRe = AppState.getIdBox()
 let isContainerActive = AppState.getIsContainerActive()

if(event.repeat) return;
switch (event.key) {
  case 'Enter':
    alert('Click at '+ isRe)
    
  break;

  case 'ArrowUp':
    if(mapBox[isRe-1].road.up != null){
      isContainerActive[isRe] = false
      isContainerActive[mapBox[isRe-1].road.up] = true
      AppState.setIsContainerActive(isContainerActive)
      isRe=mapBox[isRe-1].road.up
      AppState.setIdBox(isRe)
    }

    break;

  case 'ArrowDown':
    if(mapBox[isRe-1].road.down != null){
      isContainerActive[isRe] = false
      isContainerActive[mapBox[isRe-1].road.down] = true
      AppState.setIsContainerActive(isContainerActive)
      isRe=mapBox[isRe-1].road.down
      AppState.setIdBox(isRe)
    }
  
    break;

  case 'ArrowLeft':
    if(mapBox[isRe-1].road.left != null){
      isContainerActive[isRe] = false
      isContainerActive[mapBox[isRe-1].road.left] = true
      AppState.setIsContainerActive(isContainerActive)
      isRe=mapBox[isRe-1].road.left
      AppState.setIdBox(isRe)
    }

    break;

  case 'ArrowRight':
    if(mapBox[isRe-1].road.right != null){
      isContainerActive[isRe] = false
      isContainerActive[mapBox[isRe-1].road.right] = true
      AppState.setIsContainerActive(isContainerActive)
      isRe=mapBox[isRe-1].road.right
      AppState.setIdBox(isRe)
    }

    break;

  default:
    break;
}
  return;
});
return(
  ReactDOM.render(
    <AppTask2 />,
  document.getElementById('root'))
)
}
export default App;