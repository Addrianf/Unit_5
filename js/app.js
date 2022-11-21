
baguetteBox.run('.gallery');


  const search = document.getElementById('search');
  search.addEventListener('keyup', e =>{
    let currentValue = e.target.value.toLowerCase();
    let imagename = document.querySelectorAll('img.alt');
    imagename.forEach(imagename =>{
        if(imagename.textContent.toLowerCase().includes(currentValue)){
            imagename.style.display = '';
        }else {
            imagename.style.display = 'none';
        }
    })
  })