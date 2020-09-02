$(document).ready(function() {

  $.ajax(

    {

      url: "https://flynn.boolean.careers/exercises/api/array/music",

      method: "GET",

      success: function(risposta){

        insertCd(risposta);

      },

      error: function(){
        alert("errore");
      }

    }

  );

  $("#scelta option").click(function(){

    var genere = $(this).html();

    if (genere == "All") {

      $(".cd").show();

    } else {

      $(".cd").hide();

      $(".cd." + genere).show();

    }

  });

});

function insertCd(data) {

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < data.response.length; i++) {

    var context = data.response[i];
    var html = template(context);

    $(".cds-container").append(html);

  }

}
