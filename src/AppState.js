class AppState {
idBox = 1
isContainerActive = [false, true, false, false, false, false, false, false, false, false, false, false, false, false]
mapBox = [
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

setIdBox(x){
    this.idBox = x
}
getIdBox(){
    return this.idBox
}

setIsContainerActive(x){
    this.isContainerActive = x
}
getIsContainerActive(){
    return this.isContainerActive
}

getMapBoxState(){
    return this.mapBox
}

}
export default new AppState()