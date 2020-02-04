// Hand this function selectors, such as '.a','.b', and it returns lines between elements
  function tween(a,b){
    a = document.querySelector(a)
    b = document.querySelector(b)
    const difx = Math.abs(a.offsetLeft - b.offsetLeft) // get dif between
    const dify = Math.abs(a.offsetTop - b.offsetTop) // get dif between
    const lineW = Math.sqrt((Math.pow(difx, 2) + Math.pow(dify, 2))) // distance between two points
    let lineAngle = Math.atan2(dify, difx) * 180 / Math.PI // angle between two points
    let negative = ''
    let scale = ''
    if(a.offsetTop >= b.offsetTop){
      negative = '-'
    }
    if(a.offsetLeft >= b.offsetLeft){
       scale = 'scale(-1, 1)'
       if(a.offsetTop >= b.offsetTop){
         negative = ''
       } else {
         negative = '-'
       }
    }
