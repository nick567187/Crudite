$(document).ready(function() {
  
//attach event listener to buttons
//create function stub for read/write/delete
  //research local storage

  $('.store-btn').on('click', function() {
  	let titleValue = $('.input-field-title').val();
  	let contentValue = $('.input-field-body').val();
    localStorage.setItem(titleValue, contentValue)
  });

  $('.get-btn').on('click', function() {
    // console.log(localStorage.getItem("hrext"));
    let titleValue = localStorage.getItem('titleValue')
    let contentValue = localStorage.getItem('contentValue')
    $('.debug').html(`<p>${titleValue} ${contentValue}</p>`)
  });

  $('.delete-btn').on('click', function() {
    //TODO add in a confirm if want to delete
    //throw up confirm window
    //capture result
    //test boolean to delete
    localStorage.removeItem('titleValue');
    localStorage.removeItem('contentValue');
    $('.debug').html(`<p>Items deleted</p>`)

  });



});
