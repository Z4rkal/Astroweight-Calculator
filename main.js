// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  
  // 1. Populate the dropdown element with the data found in the planets array.
  // The value of each option should be the planet's name.
  // Use the following built-in methods:
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild`
  
    $(document).ready(function(){
        //Programmatically creates the dropdown options
        planets.forEach(function(element){
            var newOption = document.createElement("option");
            newOption.id = element[0]; //Not really necessary
            var newOptionContent = document.createTextNode(element[0]);
            newOption.appendChild(newOptionContent);
            var insertPoint = document.getElementById("planets");
            var fChild = insertPoint.firstChild;
            insertPoint.insertBefore(newOption,fChild);
        });
        //This feels hacky, but I wanted it to default to Sun and this was the first thing that worked
        $('#planets').val('Sun');
        //Now that everything is set up wait for a click event and then handle it
        $('#calculate-button').click(function(){
            handleClickEvent();});
    });
  
  function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
    var result;
    //Checks each entry in planets for a match, and returns the calculated weight when one is found
    for(var i = 0; i < planets.length; i++) {
        if(planets[i][0] == planetName)
            return weight * planets[i][1];
    }

    //Otherwise something went wrong, and somehow the planetName was invalid
    console.log("No match D:");
    return('Error');
  }
  
  function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = $('#user-weight').val();
    console.log('User weight: ' + userWeight + '\n');
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = $('#planets').val();
    console.log('Selected Planet: ' + planetName + '\n');
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight,planetName);
    console.log('Result: ' + result + '\n');
    // 6. Write code to display the message shown in the screenshot.
   // var gCheck = ''; //A variable for correcting grammar if the selected planet would need a 'the ' beforehand
   // if(planetName == 'Moon' || planetName == 'Sun')
   //     gCheck = 'the '; //disabled it because it fails the tests but otherwise it works
    $('#output').text("If you were on " /*+ gCheck */+ planetName + ", you would weigh " + result + "lbs!");
  }
  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)