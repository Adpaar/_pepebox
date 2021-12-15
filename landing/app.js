const colors = [
    '#70C1FF', 
    '#f19dde', 
    '#ebcffa', 
    '#63C6FF', 
    '#faf1d4',
    '#eed3f8'
  ]
  
  const bubbles = Array.from(document.querySelectorAll('.bubble'));
  
  let randomColor = [];
  
  for (let i = 0; i < bubbles.length; i++) {
    randomColor.push(~~(Math.random()*colors.length));
  }
  
  bubbles.map((bubble, index) => {
    bubble.style.backgroundColor = colors[randomColor[index]];
  })
    