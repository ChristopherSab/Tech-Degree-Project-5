

$(document).ready(function(){
  $("#search-input").keyup(function(){

      // Retrieve the input field text 
      var filter = $(this).val();

      // Loop through the comment list
      $("[data-alt]").each()(function(){

          // If the list item does not contain the text phrase fade it out
          if ($(this).text().search(new RegExp(filter, "i")) < 0) {
              $(this).fadeOut();

          // Show the list item if the phrase matches and increase the count by 1
          } else {
              $(this).show();
          }
      });

  });
});


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
  })