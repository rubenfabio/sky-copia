//Navbar a class add Active
$(document).ready(function () {
  var url = window.location.href;
  let me = $('ul li a');
  //using jquery map
  $(me).map(function (idx, elem) {
    // console.log($(elem).attr('target'));
    if (url.includes($(elem).attr('target'))) {
      //   console.log('active');
      $(elem).addClass('active');
    } else {
      //   console.log('No');
    }
  });
});
console.log(
  'Desenvolvido por Ruben Fabio github.com/rubenfabio para WolMarketing'
);
