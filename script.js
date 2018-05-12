setTimeout(() => {
          $('#loading').addClass('hidden');
          $('#content').css('visibility','initial');
}, 1500);

$("#dkg").fadeOut(2000)
$("#EviEx").fadeOut(2000)

//CLEAR ALL FIELDS
resetAllValues = () => {
  $('.col-sm').find('input:text').val('');
  $("#result").html("");
}