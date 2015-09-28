$(document).ready(function() {
  $.simpleWeather({
    woeid: woeid,
    unit: temp,
    success: function(weather) {
      $("#weather").append('<div id="dayOne"><h1 class="dayTitle">Today</h1><img src="assets/images/weather/'+ weather.forecast[0].code +'.png"><span class="tempNow">'+ weather.temp + '&deg;</span><div id="tempHighLow"><span class="tempHigh">'+weather.forecast[0].high+ '&deg;</span><span class="tempLow">'+weather.forecast[0].low+ '&deg;</span></div></div><div id="dayTwo"><h1 class="dayTitle">'+weather.forecast[1].day+'</h1><img src="assets/images/weather/'+ weather.forecast[1].code +'.png"><span class="tempNow">'+ weather.temp + '&deg;</span><div id="tempHighLow"><span class="tempHigh">'+weather.forecast[1].high+ '&deg;</span><span class="tempLow">'+weather.forecast[1].low+ '&deg;</span></div></div><div id="dayThree"><h1 class="dayTitle">'+weather.forecast[2].day+'</h1><img src="assets/images/weather/'+ weather.forecast[2].code +'.png"><span class="tempNow">'+ weather.temp + '&deg;</span><div id="tempHighLow"><span class="tempHigh">'+weather.forecast[2].high+ '&deg;</span><span class="tempLow">'+weather.forecast[2].low+ '&deg;</span></div></div><div id="dayFour"><h1 class="dayTitle">'+weather.forecast[3].day+'</h1><img src="assets/images/weather/'+ weather.forecast[3].code +'.png"><span class="tempNow">'+ weather.temp + '&deg;</span><div id="tempHighLow"><span class="tempHigh">'+weather.forecast[3].high+ '&deg;</span><span class="tempLow">'+weather.forecast[3].low+ '&deg;</span></div></div><div id="dayFive"><h1 class="dayTitle">'+weather.forecast[4].day+'</h1><img src="assets/images/weather/'+ weather.forecast[4].code +'.png"><span class="tempNow">'+ weather.temp + '&deg;</span><div id="tempHighLow"><span class="tempHigh">'+weather.forecast[4].high+ '&deg;</span><span class="tempLow">'+weather.forecast[4].low+ '&deg;</span></div></div>');
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }


  });
  var dayTitleDelay = function(){
    $(".dayTitle").text(function () {
      return $(this).text().replace("Mon", "Monday").replace("Tue", "Tuesday").replace("Wed", "Wednesday").replace("Thu", "Thursday").replace("Fri", "Friday").replace("Sat", "Saturday").replace("Sun", "Sunday");
    });
  };

  setTimeout(dayTitleDelay, 500);
});

    
