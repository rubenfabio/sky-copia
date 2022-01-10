// Modal Function

function toggleModal() {
  document.getElementById('modal').classList.toggle('hidden');
  var element = document.body;
  element.classList.toggle('open-modal');
}
function toggleModal2() {
  document.getElementById('modal-3').classList.toggle('hidden');
  var element = document.body;
  element.classList.toggle('open-modal');
}
function toggleModal3() {
  document.getElementById('modal-4').classList.toggle('hidden');
  var element = document.body;
  element.classList.toggle('open-modal');
}
function openModalFale() {
  document.getElementById('modal-2').classList.toggle('hidden');
  var element = document.body;
  element.classList.toggle('open-modal');
}
function openModalContato() {
  document.getElementById('modal-3').classList.toggle('hidden');
  document.getElementById('modal-2').classList.toggle('hidden');
}
function openModalContato2() {
  document.getElementById('modal-3').classList.toggle('hidden');
  document.getElementById('modal').classList.toggle('hidden');
}
function openModalContatoNavbar() {
  document.getElementById('modal-3').classList.toggle('hidden');
  var element = document.body;
  element.classList.toggle('open-modal');
}

// Faq

function showVermaisdestaques() {
  document.getElementById('vermaisdestaques').classList.toggle('hidden');
}
function togglemenucontato() {
  document.getElementById('menu-contato').classList.toggle('hidden');
}
function togglemenu() {
  document.getElementById('menu').classList.toggle('hidden');
}

// Swiper Js Slider
function darktheme() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}
var swiper = new Swiper('.navigationSlider', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
function mask(o, f) {
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, '');
  r = r.replace(/^0/, '');
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '(0$1) $2-$3');
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,5}).*/, '(0$1) $2-$3');
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, '(0$1) $2');
  } else if (r.length > 0) {
    r = r.replace(/^(\d*)/, '(0$1');
  }

  return r;
}
