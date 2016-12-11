 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0W-K5w8RuGyftWEOFyf830GW3_geRIFY",
    authDomain: "traintracker-cbb27.firebaseapp.com",
    databaseURL: "https://traintracker-cbb27.firebaseio.com",
    storageBucket: "traintracker-cbb27.appspot.com",
    
  };
  
  firebase.initializeApp(config);

  var database = firbase.database();

  //Button for adding trains

  $("#buttonSubmit").on("click", function() {

  	//Grab input from table
  	var trainName = $("#train-name-input").val().trim();
  	var trainDestination = $("#destination-input").val().trim();
  	var firstTrainTime = $("#first-train-time-input").val().trim();
  	var trainFrequency = $("#frequency-input").val().trim();

  	//Create local object to store data
  	var newTrain = {
  		name: trainName,
  		destination: trainDestination,
  		firstTrain: firstTrainTime,
  		frequency: trainFrequency,
  	};

  	//Push data to database
  	database.ref().push(newTrain);

  	//Log everything to console
  	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.firstTrain);
	console.log(newTrain.frequency);

	//Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#train-name-input").val("");
	$("#destination-input").val("");
	$("#first-train-time-input").val("");
	$("#frequency-input").val("");

	// Prevents moving to new page
  	return false;

  });

  //Create firebase event for adding everything to the database
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  	console.log(childSnapshot.val());

  	//Store everything in a variable
  	var trainName = childSnapshot.val().name;
  	var trainDestination = childSnapshot.val().destination;
  	var firstTrainTime = childSnapshot.val().firstTrain;
  	var trainFrequency = childSnapshot.val().frequency;

  	//Console Train Info
  	console.log(trainName);
  	console.log(trainDestination);
  	console.log(firstTrainTime);
  	console.log(trainFrequency);

    //Calculate next arrival by first train time input with frequency and current time

    var firstTrainConverted =

    var frequencyConverted = moment().minute();
    console.log(frequencyConverted);

    var currentTime =  var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));



    // Add each train's data into the table
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
    frequencyConverted + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
  	
});













