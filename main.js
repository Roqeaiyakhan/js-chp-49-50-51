// let's suppose we've this very simple form -->
//<!-- <form>
   //     Email:
     //   <input type="email">
       // <input type="submit" value="Submit">
    //</form> -->

//<!-- 
  //      we've the following three elements in the above form:
    //    1. The text "Email"
      //  2. The text field for the user's email address
        //3. The submit button
    -->

<!--// to get access to the email field let me assign an id to the email field -->
<!-- //<form> 
       // Email:
        //<input type="email" id="userEmail">
        //<input type="submit" value="Submit">
    //</form> -->

<!-- 
//         now on submission of the form let's check the email
//         we'll be calling a js function on submission of the form
//     -->

// <!-- with some limitation like page refresh -->
// <!-- <form onsubmit="checkAddress()">
//     Email:
//     <input type="email" id="userEmail">
//     <input type="submit" value="Submit">
// </form> -->

// <form>
//     Email:
//     <input type="email" id="userEmail">
//     <input type="submit" value="Submit" onclick="checkAddress(event)">
// </form>


    // function checkAddress() {
    //     // getElementById must be in strict camelCase
    //     var emailInputEl = document.getElementById('userEmail')
    //     var emailValue = emailInputEl.value

    //     if (emailValue === '') {
    //         alert("Email is required!")
    //     }

    //     // we can do it this way as well
    //     // if (document.getElementById('userEmail').value === '') {
    //     //     alert("Email is required!")
    //     // }
    // }

    // issue: page refresh
    // function checkAddress() {
    //     var emailInputEl = document.getElementById('userEmail')
    //     var emailValue = emailInputEl.value

    //     if (emailValue === '') {
    //         console.log("Email is required!")
    //     }
    // }

    // explore event
    // function checkAddress(submitEvent) {
    //     submitEvent.preventDefault()
    //     console.log(submitEvent)
    // }

    // function checkAddress(e) {
    //     // stop page refresh
    //     e.preventDefault()

    //     var fieldEl = document.getElementById('userEmail')
    //     var userEmail = fieldEl.value;
    //     console.log(userEmail)
    // }

    // final checkAddress function
    // function checkAddress(e) {
    //     // stop page refresh
    //     e.preventDefault()

    //     var emailInputEl = document.getElementById('userEmail')

    //     if (emailInputEl.value === '') {
    //         alert("Email is required!")
    //     } else {
    //         alert(`Your Email: ${emailInputEl.value}`)

    //         // empty email input
    //         emailInputEl.value = ''
    //     }
    // }
    ///...........................................................................................................//


    function setAreaName() {
        var zipCode = +document.getElementById("zipcode").value;
        var areaEl = document.getElementById("area");
      
        // we've chosen different areas in Islamabad
        // 45200 -> Golra
        // 44210 -> Islamabad F-7 Markaz
        // 44320 -> Islamabad Federal Board
        // 44310 -> Islamabad Allama Iqbal Open University
        // *     -> Invalid zipcode
      
        // if (zipCode === 45200) {
        //   areaEl.value = "Golra";
        // } else if (zipCode === 44210) {
        //   areaEl.value = "Islamabad F-7 Markaz";
        // } else if (zipCode === 44320) {
        //   areaEl.value = "Islamabad Federal Board"
        // } else if (zipCode === 44310) {
        //   areaEl.value = "Islamabad Allama Iqbal Open University"
        // } else {
        //   alert("Invalid zipcode");
        // }
      }
      //..........................................................................................................//

      // Reading and Setting Paragraph Text

// Function to read paragraph text
function readParagraphText() {
    var paragraph = document.getElementById('myParagraph');
    var output = document.getElementById('output');
    var paragraphText = paragraph.textContent;
    output.textContent = 'Current paragraph text: "' + paragraphText + '"';
  }
  
  // Function to set new paragraph text
  function setParagraphText() {
    var paragraph = document.getElementById('myParagraph');
    var newTextInput = document.getElementById('newTextInput');
    var output = document.getElementById('output');
    var newText = newTextInput.value;
  
    if (newText.trim() === '') {
      output.textContent = 'Please enter some text to set!';
    } else {
      paragraph.textContent = newText;
      output.textContent = 'Paragraph text has been updated!';
      newTextInput.value = '';
    }
  }