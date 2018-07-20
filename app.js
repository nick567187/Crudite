$(document).ready(function() {
  
//attach event listener to buttons
//create function stub for read/write/delete
  //research local storage

  $('.store-btn').on('click', function() {
    localStorage.setItem("hrext", "three is the best")
  });

  $('.get-btn').on('click', function() {
    console.log(localStorage.getItem("hrext"));
  });

  $('.delete-btn').on('click', function() {
    localStorage.removeItem("hrext");
  });



});
