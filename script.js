window.addEventListener('scroll', () => {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
  
    const scrollPosition = window.scrollY;
  
    // Move row1 from right to left
    row1.style.transform = `translateX(-${scrollPosition}px)`;
  
    // Move row2 from left to right
    row2.style.transform = `translateX(${scrollPosition}px)`;
  });
  
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.classList.add('enlarge');
    });
  
    box.addEventListener('mouseleave', () => {
      box.classList.remove('enlarge');
    });
  });
  