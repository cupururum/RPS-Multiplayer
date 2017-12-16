// Initialize Firebase
var config = {
  apiKey: "AIzaSyDFWLisg8BVnlZp8JBMrcZE-QfVEy3oO2M",
  authDomain: "rps-multyplayer.firebaseapp.com",
  databaseURL: "https://rps-multyplayer.firebaseio.com",
  projectId: "rps-multyplayer",
  storageBucket: "rps-multyplayer.appspot.com",
  messagingSenderId: "952844495956"
};
firebase.initializeApp(config);

var database = firebase.database();

//first player inputs name
  //first player is activated
  //first player sees the choice
  //first player waits untill the second player inputs name and start the game

// secind player started the game
  //second player waits until first player makes choise

//first player made a choise

//second player is activated
  //second player makes choise

// compare choises
  // show results
  //increment wins/losses
  //reselt results
  //activate first player
