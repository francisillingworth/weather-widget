{"filter":false,"title":"weather.js","tooltip":"/assets/js/weather.js","undoManager":{"mark":-1,"position":-1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["$(document).ready(function(){","   ","    $('#submitWeather').click(function(){","        ","        var city = $(\"#city\").val();","        ","        if(city !=''){","            ","            $.ajax({","                ","                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=46d03f05e7b366c2cf45373413988b06',","                type: \"GET\",","                dataType: \"jsonp\",","                success: function(data){","                    var widget = show(data);","                    ","                    $(\"#show\").html(widget);","                    ","                    $(\"#city\").val('');","                }","            });","            ","        }else{","            $(\"#error\"),html('Field connot be empty');","        }","        ","        ","    });","","","});","","function show(data){","    return \"<h2 style ='font-size:40px; font-weight:bold;' > \" + data.name +\", \" + data.sys.country + \"<img height=100px src='http://openweathermap.org/img/w/\"+data.weather[0].icon+\".png'>\"  + \"</h2>\" +  ","           \"<h3><strong>Weather</strong>: \"+ data.weather[0].main +\"</h3>\" +","           \"<h3><strong>Description</strong>:\"+ data.weather[0].description +\"</h3>\" +","           \"<h3><strong>Temperature</strong>: \"+ data.main.temp +\"&deg;C\"+ \"</h3>\" +","           \"<h3><strong>Min Temp</strong>: \"+ data.main.temp_min +\"&deg;C\"+ \"</h3>\"+","           \"<h3><strong>Max Temp</strong>: \"+ data.main.temp_max + \"&deg;C\"+\"</h3>\"+","           \"<h3><strong>Pressure</strong>: \"+ data.main.pressure + \"hPa\"+\"</h3>\" +","           \"<h3><strong>Humidity</strong>: \"+ data.main.humidity + \"%\"+\"</h3>\" +","           \"<h3><strong>Wind Speed</strong>: \"+ data.wind.speed + \"m/s\"+\"</h3>\" ","           ","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1562855215078,"hash":"da39a3ee5e6b4b0d3255bfef95601890afd80709"}