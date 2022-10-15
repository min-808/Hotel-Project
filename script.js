var iOne = 0;
var iTwo = 0;
var iThree = 0;
var iFour = 0;
var iFive = 0;
var iSix = 0;

function bookOne() {
    if (iOne <= 3) {
        // roomOneX is the person's name and what is going to display on screen
        var trimmedOne = (document.getElementById('roomOneEnter').value).trim();
        var roomOneX = trimmedOne[0].toUpperCase() + trimmedOne.substring(1);

        // fixedIdOne is the person's name but converted to an id-friendly style (all caps, spaces are underscores)
        var fixedIdOne = (roomOneX.replaceAll(' ', '_')).toUpperCase();
        if (roomOneX != "" && roomOneX != " ") {

            // Makes the paragraph element with the name date and adds it to the log
            var logsPOne = document.createElement('p');
            var logsNOne = document.createTextNode("Room One: " + roomOneX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPOne.appendChild(logsNOne);
            document.getElementById('logsContent').appendChild(logsPOne);

            // Makes the person's div element
            var div = document.createElement('div');

            // Makes a paragraph element with the name
            var personOne = document.createElement('p');
            var text1One = document.createTextNode(roomOneX);
            personOne.style.fontWeight = 'bold';
            personOne.appendChild(text1One);

            // Makes a paragraph element with just the date
            var dateOne = document.createElement('p');
            var text2One = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateOne.appendChild(text2One);

            // Appends both paragraph elements to the parent div (can't have spaces so underscore replaced)
            div.appendChild(personOne);
            div.appendChild(dateOne);
            div.setAttribute("id", fixedIdOne);
            document.getElementById("placeOne").appendChild(div);
            
            // Incremenets the counter by one
            iOne++;
            document.getElementById("oneCounter").innerHTML = iOne;

            document.getElementById('roomOneEnter').value = "";
        }
    } else if (iOne > 3) {
        window.alert("You have the maximum number of people allowed in a room!");
    }
}

function lockOne() {
    if (document.querySelector('#buttonBookOne').disabled != true) {
        document.querySelector('#buttonBookOne').disabled = true;
        window.alert("Room One has been locked!");
    }
}

function unlockOne() {
    if (document.querySelector('#buttonBookOne').disabled != false) {
        document.querySelector('#buttonBookOne').disabled = false;
        window.alert("Room One has been unlocked!");
    }
}

function removeOne() {
    // Trims the text box so there's no left and right white spaces
    var trimmedRemoveOne = (document.getElementById('roomOneEnter').value).trim();
    // Makes the first letter capitalized
    var oneY = trimmedRemoveOne[0].toUpperCase() + trimmedRemoveOne.substring(1);

    // Fixes the value so that the ID is in all caps and spaces are replaced with underscores
    var fixedIdRemoveOne = (oneY.replaceAll(' ', '_')).toUpperCase();

    // Uses query selector and .remove() to remove the child from the div parent
    var oneE = document.getElementById("placeOne");
    oneE.querySelector("#" + fixedIdRemoveOne).remove();
    // Subtracts by one
    iOne--;
    document.getElementById("oneCounter").innerHTML = iOne;
    document.getElementById('roomOneEnter').value = "";
}

function removeAllOne() {
    var oneA = document.getElementById("placeOne");
    oneA.innerHTML = "";
    iOne = 0;
    document.getElementById("oneCounter").innerHTML = iOne;
}

function bookTwo() {
    if (iTwo <= 3) {
        var trimmedTwo = (document.getElementById('roomTwoEnter').value).trim();
        var roomTwoX = trimmedTwo[0].toUpperCase() + trimmedTwo.substring(1);
        
        var fixedIdTwo = (roomTwoX.replaceAll(' ', '_')).toUpperCase();
        if (roomTwoX != "" && roomTwoX != " ") {

            var logsPTwo = document.createElement('p');
            var logsNTwo = document.createTextNode("Room Two: " + roomTwoX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPTwo.appendChild(logsNTwo);
            document.getElementById('logsContent').appendChild(logsPTwo);

            var div = document.createElement('div');

            var personTwo = document.createElement('p');
            var text1Two = document.createTextNode(roomTwoX);
            personTwo.style.fontWeight = 'bold';
            personTwo.appendChild(text1Two);

            var dateTwo = document.createElement('p');
            var text2Two = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateTwo.appendChild(text2Two);

            div.appendChild(personTwo);
            div.appendChild(dateTwo);
            div.setAttribute("id", fixedIdTwo);
            document.getElementById("placeTwo").appendChild(div);
            
            iTwo++;
            document.getElementById("twoCounter").innerHTML = iTwo;

            document.getElementById('roomTwoEnter').value = "";
        }
    } else if (iTwo > 3) {
        window.alert("You have the maximum number of people allowed in a room!");
    }
}

function lockTwo() {
    if (document.querySelector('#buttonBookTwo').disabled != true) {
        document.querySelector('#buttonBookTwo').disabled = true;
        window.alert("Room Two has been locked!");
    }
}

function unlockTwo() {
    if (document.querySelector('#buttonBookTwo').disabled != false) {
        document.querySelector('#buttonBookTwo').disabled = false;
        window.alert("Room Two has been unlocked!");
    }
}

function removeTwo() {
    var trimmedRemoveTwo = (document.getElementById('roomTwoEnter').value).trim();
    var twoY = trimmedRemoveTwo[0].toUpperCase() + trimmedRemoveTwo.substring(1);

    var fixedIdRemoveTwo = (twoY.replaceAll(' ', '_')).toUpperCase();

    var twoE = document.getElementById("placeTwo");
    twoE.querySelector("#" + fixedIdRemoveTwo).remove();
    iTwo--;
    document.getElementById("twoCounter").innerHTML = iTwo;
    document.getElementById('roomTwoEnter').value = "";
}

function removeAllTwo() {
    var twoA = document.getElementById("placeTwo");
    twoA.innerHTML = "";
    iTwo = 0;
    document.getElementById("twoCounter").innerHTML = iTwo;
}

function bookThree() {
    if (iThree <= 3) {
        var trimmedThree = (document.getElementById('roomThreeEnter').value).trim();
        var roomThreeX = trimmedThree[0].toUpperCase() + trimmedThree.substring(1);

        var fixedIdThree = (roomThreeX.replaceAll(' ', '_')).toUpperCase();
        if (roomThreeX != "" && roomThreeX != " ") {

            var logsPThree = document.createElement('p');
            var logsNThree = document.createTextNode("Room Three: " + roomThreeX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPThree.appendChild(logsNThree);
            document.getElementById('logsContent').appendChild(logsPThree);

            var div = document.createElement('div');

            var personThree = document.createElement('p');
            var text1Three = document.createTextNode(roomThreeX);
            personThree.style.fontWeight = 'bold';
            personThree.appendChild(text1Three);

            var dateThree = document.createElement('p');
            var text2Three = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateThree.appendChild(text2Three);

            div.appendChild(personThree);
            div.appendChild(dateThree);
            div.setAttribute("id", fixedIdThree);
            document.getElementById("placeThree").appendChild(div);
            
            iThree++;
            document.getElementById("threeCounter").innerHTML = iThree;

            document.getElementById('roomThreeEnter').value = "";
        }
    } else if (iThree > 3) {
        window.alert("You have the maximum number of people allowed in a room!");
    }
}

function lockThree() {
    if (document.querySelector('#buttonBookThree').disabled != true) {
        document.querySelector('#buttonBookThree').disabled = true;
        window.alert("Room Three has been locked!");
    }
}

function unlockThree() {
    if (document.querySelector('#buttonBookThree').disabled != false) {
        document.querySelector('#buttonBookThree').disabled = false;
        window.alert("Room Three has been unlocked!");
    }
}

function removeThree() {
    var trimmedRemoveThree = (document.getElementById('roomThreeEnter').value).trim();
    var threeY = trimmedRemoveThree[0].toUpperCase() + trimmedRemoveThree.substring(1);

    var fixedIdRemoveThree = (threeY.replaceAll(' ', '_')).toUpperCase();

    var threeE = document.getElementById("placeThree");
    threeE.querySelector("#" + fixedIdRemoveThree).remove();
    iThree--;
    document.getElementById("threeCounter").innerHTML = iThree;
    document.getElementById('roomThreeEnter').value = "";
}

function removeAllThree() {
    var threeA = document.getElementById("placeThree");
    threeA.innerHTML = "";
    iThree = 0;
    document.getElementById("threeCounter").innerHTML = iThree;
}

function bookFour() {
    if (iFour <= 3) {
        var trimmedFour = (document.getElementById('roomFourEnter').value).trim();
        var roomFourX = trimmedFour[0].toUpperCase() + trimmedFour.substring(1);

        var fixedIdFour = (roomFourX.replaceAll(' ', '_')).toUpperCase()
        if (roomFourX != "" && roomFourX != " ") {

            var logsPFour = document.createElement('p');
            var logsNFour = document.createTextNode("Room Four: " + roomFourX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPFour.appendChild(logsNFour);
            document.getElementById('logsContent').appendChild(logsPFour);

            var div = document.createElement('div');

            var personFour = document.createElement('p');
            var text1Four = document.createTextNode(roomFourX);
            personFour.style.fontWeight = 'bold';
            personFour.appendChild(text1Four);

            var dateFour = document.createElement('p');
            var text2Four = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateFour.appendChild(text2Four);

            div.appendChild(personFour);
            div.appendChild(dateFour);
            div.setAttribute("id", fixedIdFour);
            document.getElementById("placeFour").appendChild(div);
            
            iFour++;
            document.getElementById("fourCounter").innerHTML = iFour;

            document.getElementById('roomFourEnter').value = "";
        }
    } else if (iFour > 3) {
        window.alert("You have the maximum number of people allowed in a room!");
    }
}

function lockFour() {
    if (document.querySelector('#buttonBookFour').disabled != true) {
        document.querySelector('#buttonBookFour').disabled = true;
        window.alert("Room Four has been locked!");
    }
}

function unlockFour() {
    if (document.querySelector('#buttonBookFour').disabled != false) {
        document.querySelector('#buttonBookFour').disabled = false;
        window.alert("Room Four has been unlocked!");
    }
}

function removeFour() {
    var trimmedRemoveFour = (document.getElementById('roomFourEnter').value).trim();
    var fourY = trimmedRemoveFour[0].toUpperCase() + trimmedRemoveFour.substring(1);

    var fixedIdRemoveFour = (fourY.replaceAll(' ', '_')).toUpperCase();

    var fourE = document.getElementById("placeFour");
    fourE.querySelector("#" + fixedIdRemoveFour).remove();
    iFour--;
    document.getElementById("fourCounter").innerHTML = iFour;
    document.getElementById('roomFourEnter').value = "";
}

function removeAllFour() {
    var fourA = document.getElementById("placeFour");
    fourA.innerHTML = "";
    iFour = 0;
    document.getElementById("fourCounter").innerHTML = iFour;
}

function bookFive() {
    if (iFive <= 3) {
        var trimmedFive = (document.getElementById('roomFiveEnter').value).trim();
        var roomFiveX = trimmedFive[0].toUpperCase() + trimmedFive.substring(1);

        var fixedIdFive = (roomFiveX.replaceAll(' ', '_')).toUpperCase();
        if (roomFiveX != "" && roomFiveX != " ") {

            var logsPFive = document.createElement('p');
            var logsNFive = document.createTextNode("Room Five: " + roomFiveX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPFive.appendChild(logsNFive);
            document.getElementById('logsContent').appendChild(logsPFive);

            var div = document.createElement('div');

            var personFive = document.createElement('p');
            var text1Five = document.createTextNode(roomFiveX);
            personFive.style.fontWeight = 'bold';
            personFive.appendChild(text1Five);

            var dateFive = document.createElement('p');
            var text2Five = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateFive.appendChild(text2Five);

            div.appendChild(personFive);
            div.appendChild(dateFive);
            div.setAttribute("id", fixedIdFive);
            document.getElementById("placeFive").appendChild(div);
            
            iFive++;
            document.getElementById("fiveCounter").innerHTML = iFive;

            document.getElementById('roomFiveEnter').value = "";
        }
    } else if (iFive > 3) {
        window.alert("You have the maximum number of people allowed in a room!");
    }
}

function lockFive() {
    if (document.querySelector('#buttonBookFive').disabled != true) {
        document.querySelector('#buttonBookFive').disabled = true;
        window.alert("Room Five has been locked!");
    }
}

function unlockFive() {
    if (document.querySelector('#buttonBookFive').disabled != false) {
        document.querySelector('#buttonBookFive').disabled = false;
        window.alert("Room Five has been unlocked!");
    }
}

function removeFive() {
    var trimmedRemoveFive = (document.getElementById('roomFiveEnter').value).trim();
    var fiveY = trimmedRemoveFive[0].toUpperCase() + trimmedRemoveFive.substring(1);

    var fixedIdRemoveFive = (fiveY.replaceAll(' ', '_')).toUpperCase();

    var fiveE = document.getElementById("placeFive");
    fiveE.querySelector("#" + fixedIdRemoveFive).remove();
    iFive--;
    document.getElementById("fiveCounter").innerHTML = iFive;
    document.getElementById('roomFiveEnter').value = "";
}

function removeAllFive() {
    var fiveA = document.getElementById("placeFive");
    fiveA.innerHTML = "";
    iFive = 0;
    document.getElementById("fiveCounter").innerHTML = iFive;
}

function bookSix() {
    if (iSix <= 3) {
        var trimmedSix = (document.getElementById('roomSixEnter').value).trim();
        var roomSixX = trimmedSix[0].toUpperCase() + trimmedSix.substring(1);

        var fixedIdSix = (roomSixX.replaceAll(' ', '_')).toUpperCase();
        if (roomSixX != "" && roomSixX != " ") {

            var logsPSix = document.createElement('p');
            var logsNSix = document.createTextNode("Room Six: " + roomSixX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPSix.appendChild(logsNSix);
            document.getElementById('logsContent').appendChild(logsPSix);

            var div = document.createElement('div');

            var personSix = document.createElement('p');
            var text1Six = document.createTextNode(roomSixX);
            personSix.style.fontWeight = 'bold';
            personSix.appendChild(text1Six);

            var dateSix = document.createElement('p');
            var text2Six = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateSix.appendChild(text2Six);

            div.appendChild(personSix);
            div.appendChild(dateSix);
            div.setAttribute("id", fixedIdSix);
            document.getElementById("placeSix").appendChild(div);
            
            iSix++;
            document.getElementById("sixCounter").innerHTML = iSix;

            document.getElementById('roomSixEnter').value = "";
        }
    } else if (iSix > 3) {
        window.alert("You have the maximum number of people allowed in a room!");
    }
}

function lockSix() {
    if (document.querySelector('#buttonBookSix').disabled != true) {
        document.querySelector('#buttonBookSix').disabled = true;
        window.alert("Room Six has been locked!");
    }
}

function unlockSix() {
    if (document.querySelector('#buttonBookSix').disabled != false) {
        document.querySelector('#buttonBookSix').disabled = false;
        window.alert("Room Six has been unlocked!");
    }
}

function removeSix() {
    var trimmedRemoveSix = (document.getElementById('roomSixEnter').value).trim();
    var sixY = trimmedRemoveSix[0].toUpperCase() + trimmedRemoveSix.substring(1);

    var fixedIdRemoveSix = (sixY.replaceAll(' ', '_')).toUpperCase();

    var sixE = document.getElementById("placeSix");
    sixE.querySelector("#" + fixedIdRemoveSix).remove();
    iSix--;
    document.getElementById("sixCounter").innerHTML = iSix;
    document.getElementById('roomSixEnter').value = "";
}

function removeAllSix() {
    var sixA = document.getElementById("placeSix");
    sixA.innerHTML = "";
    iSix = 0;
    document.getElementById("sixCounter").innerHTML = iSix;
}

   function clearLogs() {
    var clearConfirm = window.confirm("Are you sure you want to clear the logs?")
    if (clearConfirm == true) {
    var clearLogs = document.getElementById("logsContent");
    clearLogs.innerHTML = "";
    }
}