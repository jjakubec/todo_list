  $( ".input1" ).click(function () {
    todo=document.forms.dolist.value;
    $('ul').append(
      '<li>'+todo+'</li>'
    );
  });