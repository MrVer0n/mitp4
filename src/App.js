import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppTask2 from './AppTask2';
import AppState from './AppState';

const mapBox = [
  {
    title: 1,
    road: {
      left: null,
      right:2,
      up:null,
      down:4
    }
  },
    {
    title: 2,
    road: {
      left: 1,
      right:3,
      up:null,
      down:5
    }
  },
  {
    title: 3,
    road: {
      left: 2,
      right:null,
      up:null,
      down:7
    }
  },
  {
    title: 4,
    road: {
      left: null,
      right:5,
      up:1,
      down:11
    }
  },
  {
    title: 5,
    road: {
      left: 4,
      right:6,
      up:2,
      down:8
    }
  },
  {
    title: 6,
    road: {
      left: 5,
      right:7,
      up:2,
      down:10
    }
  },
  {
    title: 7,
    road: {
      left: 6,
      right:null,
      up:3,
      down:10
    }
  },
  {
    title: 8,
    road: {
      left: 4,
      right:9,
      up:5,
      down:12
    }
  },
  {
    title: 9,
    road: {
      left: 8,
      right:10,
      up:2,
      down:null
    }
  },
  {
    title: 10,
    road: {
      left: 9,
      right:null,
      up:7,
      down:13
    }
  },
  {
    title: 11,
    road: {
      left: null,
      right:12,
      up:4,
      down:null
    }
  },
  {
    title: 12,
    road: {
      left: 11,
      right:13,
      up:8,
      down:null
    }
  },
  {
    title: 13,
    road: {
      left: 12,
      right:null,
      up:10,
      down:null
    }
  },
]

function App() {
  let [isContainerActive, setIsContainerActive] = React.useState(AppState.getIsContainerActive());
  let [isRe, setIsRe] = React.useState(AppState.getIdBox())
  window.addEventListener('keyup', 
  function(event){
    if(AppState.getChek()){
    isContainerActive = AppState.getIsContainerActive()
    setIsContainerActive(isContainerActive)
    isRe = AppState.getIdBox()
    setIsRe(isRe)
    AppState.setFChek()
    }
  if(event.repeat) return;
  switch (event.key) {
    case 'Enter':
      alert('Click at ' + isRe);
      console.log('Click at ' + isRe);
    break;

    case 'ArrowUp':
      if(mapBox[isRe-1].road.up != null){
        isContainerActive[isRe] = false
        isContainerActive[mapBox[isRe-1].road.up] = true
        setIsContainerActive(isContainerActive)
        AppState.setIsContainerActive(isContainerActive)
        isRe=mapBox[isRe-1].road.up
        setIsRe(isRe)
        return ReactDOM.render(
          <AppTask2 />,
        document.getElementById('root')
      );
      }

      break;

    case 'ArrowDown':
      if(mapBox[isRe-1].road.down != null){
        isContainerActive[isRe] = false
        isContainerActive[mapBox[isRe-1].road.down] = true
        setIsContainerActive(isContainerActive)
        AppState.setIsContainerActive(isContainerActive)
        isRe=mapBox[isRe-1].road.down
        setIsRe(isRe)
        return ReactDOM.render(
          <AppTask2 />,
        document.getElementById('root')
      );
      }
    
      break;

    case 'ArrowLeft':
      if(mapBox[isRe-1].road.left != null){
        isContainerActive[isRe] = false
        isContainerActive[mapBox[isRe-1].road.left] = true
        setIsContainerActive(isContainerActive)
        AppState.setIsContainerActive(isContainerActive)
        isRe=mapBox[isRe-1].road.left
        setIsRe(isRe)
        return ReactDOM.render(
          <AppTask2 />,
        document.getElementById('root')
      );
      }

      break;

    case 'ArrowRight':
      if(mapBox[isRe-1].road.right != null){
        isContainerActive[isRe] = false
        isContainerActive[mapBox[isRe-1].road.right] = true
        setIsContainerActive(isContainerActive)
        AppState.setIsContainerActive(isContainerActive)
        isRe=mapBox[isRe-1].road.right
        setIsRe(isRe)
        return ReactDOM.render(
          <AppTask2 />,
        document.getElementById('root')
      );
      }

      break;

    default:
      break;
  }
    return;
});

return (  
    ReactDOM.render(
      <AppTask2 />,
    document.getElementById('root')
  )
  )
}

export default App;