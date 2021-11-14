var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=516dade0cfbca31bc085f3c206d87bc5&language=en-US&page=1')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 20)
        return;
      if (j == 0) {
        main.innerHTML += `
      
        <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original/` + i.backdrop_path + `')"></div>

      `;
      } else {
        if (j == 1) {
          main.innerHTML += `
          <h2>Assista aos melhores filmes</h2>
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500` + i.poster_path + `" /></div>
        `;
        } else {
          main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500` + i.poster_path + `" /></div>
        `;
        }
      }
    })
  })

fetch('https://api.themoviedb.org/3/movie/popular?api_key=516dade0cfbca31bc085f3c206d87bc5&language=en-US&page=2')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 20)
        return;
      if (j == 0) {
        main.innerHTML += `
      
        <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original/` + i.backdrop_path + `')"></div>

      `;
      } else {
        if (j == 1) {
          main.innerHTML += `
          <h2>Assista aos melhores filmes</h2>
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500` + i.poster_path + `" /></div>
        `;
        } else {
          main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500` + i.poster_path + `" /></div>
        `;
        }
      }
    })
  })

fetch('https://api.themoviedb.org/3/movie/popular?api_key=516dade0cfbca31bc085f3c206d87bc5&language=en-US&page=3')
  .then(response => response.json())
  .then(data => {
    data.results.map((i, j) => {

      if (j > 20)
        return;
      if (j == 0) {
        main.innerHTML += `
      
        <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original/` + i.backdrop_path + `')"></div>

      `;
      } else {
        if (j == 1) {
          main.innerHTML += `
          <h2>Assista aos melhores filmes</h2>
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500` + i.poster_path + `" /></div>
        `;
        } else {
          main.innerHTML += `
          <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500` + i.poster_path + `" /></div>
        `;
        }
      }
    })
  })


// teste
/*
$(function(){   
  var nav = $('#menu');   
  $(window).scroll(function () { 
      if ($(this).scrollTop() > 150) { 
          nav.addClass("menu");
          $('body').css('padding-top', 70);
      } else { 
          nav.removeClass("menu"); 
          $('body').css('padding-top', 0);
      } 
  });  
});

*/

/* scrooll animation */
const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 3.5


function animarScroll() {
  const topoItem = scrollAnima.getBoundingClientRect().top

  const itemVisivel = topoItem - metadeWindow < 0

  if (itemVisivel) {
    scrollAnima.classList.add('show-button')
  } else {
    scrollAnima.classList.remove('show-button')
  }

}

window.addEventListener('scroll', animarScroll)

/* scroll da forma suave */
const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

function scrollTop(event) {
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href');

  const topo = document.querySelector(href)

  topo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

linkInterno.addEventListener('click', scrollTop)
