$(document).ready(function() {
  
//attach event listener to buttons
//create function stub for read/write/delete
  //research local storage

  $('.store-btn').on('click', function() {
  	let titleValue = $('.input-field-title').val();
  	let contentValue = $('.input-field-body').val();
    localStorage.setItem(titleValue, contentValue)
    $('.speech').html(`<p>I'll never forget what you told me about ${titleValue}</p>`)
    $('.speech').css('display', 'block')
  });

  $('.get-btn').on('click', function() {
  	console.log('did it get')
    let titleValue = localStorage.getItem($('.input-field-title').val())
    $('.item-holder').html(`<p>${titleValue}</p>`)
  });

  $('.delete-btn').on('click', function() {
    //TODO add in a confirm if want to delete
    //throw up confirm window
    //capture result
    //test boolean to delete
    localStorage.removeItem($('.input-field-title').val());
    $('.item-holder').html(`<p>Items deleted</p>`)

  });



});
