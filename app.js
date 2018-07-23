$(document).ready(function() {
  
//attach event listener to buttons
//create function stub for read/write/delete
  //research local storage
  $('.speech').on('click', function() {
  document.execCommand("copy");
  });

  $('.store-btn').on('click', function() {
  	let titleValue = $('.input-field-title').val();
  	let contentValue = $('.input-field-body').val();
    localStorage.setItem(titleValue, contentValue)
    $('.speech').html(`<p>You're <strong>'${titleValue}'</strong> secret is safe with me ;)</p>`)
    $('.speech').css('display', 'block')
  });

  $('.get-btn').on('click', function() {
    let titleValue = localStorage.getItem($('.input-field-title').val())
    console.log(titleValue)
    if(titleValue === '') {
       $('.speech').html("<p>You haven't coded this yet, silly</p>")
       $('.speech').css('display', 'block')	
    } else {
    $('.speech').html(`<p>${titleValue}</p>`)
    $('.speech').css('display', 'block')
    }
  });

  $('.delete-btn').on('click', function() {
    let titleValue = $('.input-field-title').val()
    if(localStorage.getItem(titleValue) === null) {
      $('.speech').html("<p>You haven't coded this yet, silly</p>")
      $('.speech').css('display', 'block')	
    } else {
    	$('.speech').html("<div class='dialogTitle'></div><input type='button' value='yes' id='btnYes' /> <input type='button' value='no' id='btnNo'/>")
    	$('.speech').css('display', 'block')
    	confirm("Are you sure you want me to forget this?", function() {
    	  localStorage.removeItem(titleValue);	
          $('.speech').html(`<p>I didn't care about <strong>'${titleValue}'</strong> anyway</p>`)	
    	}, function() {
    	  $('.speech').html("<p>I'll keep this safe for you for now</p>")
    	});
      // let result = window.confirm("Are you sure you want to delete this?");
      // result;
      // if(result) {
      //   localStorage.removeItem(titleValue);	
      //   $('.speech').html(`<p>I didn't care about <strong>'${titleValue}'</strong> anyway</p>`)
      // }
      //   $('.speech').html("<p>I'll keep this safe for you for now</p>")
      //   $('.speech').css('display', 'block')
    }
    
    function confirm(message, yes, no) {
      $('.dialogTitle').html(message);
      $('#btnYes').click(function() {	
      	yes();
      })
      $('#btnNo').click(function() {
      	no();
      });
    } 
   

  });



});
