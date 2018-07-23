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
  	if(titleValue === '') {
  	$('.speech').html("<p> Hurry and give this a title! I can't wait to affirm you! </p>")
  	} else if(contentValue === '') {
    $('.speech').html("<p> Come on...fill the content box with <em>stellar</em> affirmations!</p>")
  	} else {
    localStorage.setItem(titleValue, contentValue)
    $('.speech').html(`<p>I can't wait to tell you how good you are at <strong>'${titleValue}'</strong> ;)</p>`)
    }
    $('.speech').css('display', 'block')
  });

  $('.get-btn').on('click', function() {
    let titleValue = localStorage.getItem($('.input-field-title').val())
    let text = $('.input-field-title').val()
    if(titleValue === null) {
       $('.speech').html(`<p>You haven't told me how good you are at ${text} yet</p>`)
       $('.speech').css('display', 'block')	
    } else {
    $('.speech').html(`<p>${titleValue}</p>`)
    $('.speech').css('display', 'flex')
    }
  });

  $('.delete-btn').on('click', function() {
    let titleValue = $('.input-field-title').val()
    if(localStorage.getItem(titleValue) === null) {
      $('.speech').html(`<p>You haven't told me how good you are at ${text} yet</p>`)
      $('.speech').css('display', 'block')	
    } else {
    	$('.speech').html("<div class='dialogTitle'></div><input type='button' value='yes' id='btnYes' /> <input type='button' value='no' id='btnNo'/>")
    	$('.speech').css('display', 'block')
    	confirm("Are you sure you want me to forget this?", function() {
    	  localStorage.removeItem(titleValue);	
          $('.speech').html(`<p>It's not that important to be good at <strong>'${titleValue}'</strong> anyway</p>`)	
    	}, function() {
    	  $('.speech').html("<p>I'll keep this safe for you for now</p>")
    	});
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
