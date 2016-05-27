console.log('scripts say hello');

function createFortunecookie(fortunecookieData, callback) {
  callback = callback || function(){};
  $.ajax({
    method: 'post',
    url: '/api/fortunecookies',
    data: {fortunecookie: fortunecookieData},
    success: function(data){
      callback(data);
    }
  });
}

function getAllFortunecookies(callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/fortunecookies',
    success: function(data){
      var fortunecookies = data.fortunecookies;
      callback(fortunecookies);
    }
  });
}

function renderFortunecookie(fortunecookie){
  var $el = $('<li>').addClass('cookie');
  $el.append( $('<h3>').text( fortunecookie.description ) );
  return $el;
}

function renderFortunecookieList(fortunecookies, $list){
  $list.empty();
  var fortunecookie, $el;
  for (var i = 0; i < fortunecookies.length; i++) {
    fortunecookie = fortunecookies[i];
    $el = renderFortunecookie(fortunecookie);
    $list.append( $el );
  }
}

// -------------

function setFortunecookieFormHandler(){
  $('form#fortunecookie-generator').on('submit', function(e){
    e.preventDefault();
    var newDescription = $(this).find('input[name="description"]').val();
    var fortunecookieData = {description: newDescription};
    createFortunecookie(fortunecookieData, function(data){
      console.log(data);
    });
  });
}

function updateFortunecookiesAndView(){
  getAllFortunecookies(function(fortunecookies){
    renderFortunecookieList(fortunecookies, $('ul#fortunecookie-list'));
  });
}

$(function(){

  setFortunecookieFormHandler();
  updateFortunecookiesAndView();

});
