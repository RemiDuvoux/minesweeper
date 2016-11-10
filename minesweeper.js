// Good luck!

$(document).on('contextmenu',function (e) {
    e.preventDefault();
})

// générer random des mines sous les cases
$( document ).ready(function() {

$('tr').each(function(index, row) {
  var column = 0
  $(row).children().each(function(index,tile) {
    $(tile).data("col", column);
    column += 1;
  });
});

$('tr').each(function(index, row) {
  $(row).children().each(function(i, tile) {
    $(tile).data("row", index);
    console.log($(tile).data());
  });
});



$('td').each(function(index, tile) {
    $(tile).removeClass("unopened")
    var random = Math.random() ;
    if (random < 0.2) {
      $(tile).addClass("hidden-mine");
    } else {
      $(tile).addClass("unopened")};
  });


$('.hidden-mine').on('click', function(event) {
    $(this).addClass("mine");
    alert('Game over poto');
    });

  $('.unopened').on('click', function(event) {
    $(this).removeClass("unopened")
    var column = $(this).data("col") ;
    var row_id = $(this).data("row") ;
    var counter = 0 ;
    for (var i= -1; i < 2; i += 1){
      for (var j= -1; j < 2; j += 1){
        $('td').each(function(index, tile) {
          if ($(tile).data("col") === column + i && $(tile).data("row") === row_id + j && $(tile).hasClass("hidden-mine")){
            console.log('index =' + index +'Colonne=' + (parseInt(column) + i) + ' Ligne=' + (parseInt(row_id) + j));
            counter += 1 ;
          }
        });
      }
    }
    for (var k=0; k <= 9; k+=1){
      if (counter === k) {
        $(this).addClass("mine-neighbour-"+counter)
      }
    }

    if (counter === 0){
      for (var i= -1; i < 2; i += 1){
        for (var j= -1; j < 2; j += 1){
          $('td').each(function(index, tile) {
            if ($(tile).data("col") === column + i && $(tile).data("row") === row_id + j && $(tile).hasClass("unopened")){
              $(tile).trigger("click")
            }
          });
        };
      };
    };
  });

  $('.unopened').on('rightclick', function(event) {
    $(this).addClass("flagged");
  });
});


// clic gauche > découvre

// clic droit pour marquer avec drapeau

// faire 3 boutons beginner, medium, hard qui décident la taille de la grille
