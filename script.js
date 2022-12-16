var virno = 0;
var nevirno = 0;
var l= 0 ;

const arr = new Map([
  ['world', 'мир'],
  ['always', 'всегда'],
  ['never', 'никогда'],
  ['one', 'один'],
  ['day', 'день'],
  ['submit', 'отправить'],
  ['ball', 'мяч'],
  ['sweet', 'конфета'],
  ['suitcase', 'чемодан'],
  ['book', 'книга'],
]);


$(function () {
  let i = 0;
  let kol2 = Math.floor(Math.random() * 10);

  for (let pair of arr.entries()) {

    if(i==kol2){
    $("#kard").html(pair[0]);
    }
    i++;

  }
  $("#but").click(function () {
    var jzn=$('#user_text').val();
    var jkey=$('#kard').text();

    if(jzn==arr.get(jkey)){
      $(".b3").html( ++virno);
      $("#vir").html( virno);
    }
    else{
      $(".b4").html(++nevirno);
    }
    
  });



  $("#right1").click(function () {
    let k = 0;
    let kol3 = Math.floor(Math.random() * 10);
    console.log(kol3);
    for (let pair of arr.entries()) {
      console.log(k);
      if(k==kol3){
      $("#kard").html(pair[0]);
      $("#rol").html(++l);
      break;
      break;
      }

      k++;
    }
    
  });

  $("#left1").click(function () {
    let k = 0;
    let kol3 = Math.floor(Math.random() * 10);
    console.log(kol3);
    for (let pair of arr.entries()) {
      console.log(k);
      if(k==kol3){
      $("#kard").html(pair[0]);
      $("#rol").html(--l);
      break;
      break;
      }

      k++;
    }
    
  });
       
  /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
event.preventDefault(); // вырубaем стaндaртнoе пoведение
var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
overlay.fadeIn(400, //пoкaзывaем oверлэй
function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
$(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
.css('display', 'block')
.animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
});
});

close.click( function(){ // лoвим клик пo крестику или oверлэю
modal // все мoдaльные oкнa
.animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
function(){ // пoсле этoгo
$(this).css('display', 'none');
overlay.fadeOut(400); // прячем пoдлoжку
}
);
});

});


           

    





  

