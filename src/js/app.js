var UI = require('ui');
var Vector2 = require('vector2');
var moment = require('moment');

var info = Pebble.getActiveWatchInfo();
var platform = info.platform;
var isChalk = platform === 'chalk';
var sWidth = isChalk ? 180 : 144;
var countPosition = isChalk ? 65 : 50;
var daysPosition = isChalk ? 120 : 100;
var titlePosition = isChalk ? 25 : 15;



var daysRemaining = function(dateString){
	var eventdate = moment(dateString); // This is the date we're counting down to - 24th April
  var todaysdate = moment(); // A moment instance of todaysdate
  return eventdate.diff(todaysdate, 'days'); // calculate the difference in days.
};

var main = new UI.Window({
	backgroundColor:'white'
});

var text = new UI.Text({
	size: new Vector2(sWidth, 168),
	text:daysRemaining("2017-12-15"),
	textAlign:'center',
	position: new Vector2(0, countPosition),
  font:'BITHAM_42_BOLD',
	color:'black'
});

//Event Detail Text

var eventDetail = new UI.Text({
	size: new Vector2(sWidth, 168),
	text:'Episode VIII',
	textAlign:'center',
	position: new Vector2(0, titlePosition),
  font:'GOTHIC_24',
	color:'black'
})


//Event Detail Text

var daysText = new UI.Text({
	size: new Vector2(sWidth, 168),
	text:'days',
	textAlign:'center',
	position: new Vector2(0, daysPosition),
  font:'GOTHIC_24',
	color:'black'
})

//add the text to the window
main.add(text);
main.add(eventDetail);
main.add(daysText);

//show the window
main.show();


//ROGUE 1 window

main.on('click', 'down', function(){

	var ro = new UI.Window();

	var roCount = new UI.Text({
		size: new Vector2(sWidth, 168),
		text:daysRemaining("2016-12-16"),
		textAlign:'center',
		position: new Vector2(0, countPosition),
	  font:'BITHAM_42_BOLD',
		color:'white'
	});

	var eventDetail = new UI.Text({
		size: new Vector2(sWidth, 168),
		text:'Rogue One',
		textAlign:'center',
		position: new Vector2(0, titlePosition),
	  font:'GOTHIC_24',
		color:'white'
	})

	var roDays = new UI.Text({
		size: new Vector2(sWidth, 168),
		text:'days',
		textAlign:'center',
		position: new Vector2(0, daysPosition),
	  font:'GOTHIC_24',
		color:'white'
	});

	ro.add(roCount);
	ro.add(roDays);
	ro.add(eventDetail);
	ro.show();

	ro.on('click', 'down', function(){
		var nine = new UI.Window({
			backgroundColor:'white'
		});

		var nineCount = new UI.Text({
			size: new Vector2(sWidth, 168),
			text:daysRemaining("2019-05-24"),
			textAlign:'center',
			position: new Vector2(0, countPosition),
		  font:'BITHAM_42_BOLD',
			color:'black'
		});

		var eventDetail = new UI.Text({
			size: new Vector2(sWidth, 168),
			text:'Episode IX',
			textAlign:'center',
			position: new Vector2(0, titlePosition),
		  font:'GOTHIC_24',
			color:'black'
		})

		var nineDays = new UI.Text({
			size: new Vector2(sWidth, 168),
			text:'days',
			textAlign:'center',
			position: new Vector2(0, daysPosition),
		  font:'GOTHIC_24',
			color:'black'
		});

		nine.add(nineCount);
		nine.add(nineDays);
		nine.add(eventDetail);
		nine.show();
	});

});
