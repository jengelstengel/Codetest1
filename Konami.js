const script = document.createElement('script');
script.setAttribute('src', 'https://cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js');
script.setAttribute('async', false);
document.body.appendChild(script);

setTimeout(() =>
  window.cheet('t w a n i s c o o l', function() {
    // document.body.innerHTML = '<h1 class="h1landing">MADE BY TWAN</h1>';
    document.body.getElementsByClassName('stylelandingp')[0].innerHTML = '<h1 class="h1landing">MADE BY TWAN</h1>';
  }), 1000)
