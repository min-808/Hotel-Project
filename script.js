var iOne = 0;
var iTwo = 0;
var iThree = 0;
var iFour = 0;
var iFive = 0;
var iSix = 0;

function bookOne() {
    if (iOne <= 3) {
        var roomOneX = document.getElementById('roomOneEnter').value;
        if (roomOneX != "" && roomOneX != " ") {

            var logsPOne = document.createElement('p');
            var logsNOne = document.createTextNode("Room One: " + roomOneX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPOne.appendChild(logsNOne);
            document.getElementById('logsContent').appendChild(logsPOne);

            var div = document.createElement('div');

            var personOne = document.createElement('p');
            var text1One = document.createTextNode(roomOneX);
            personOne.style.fontWeight = 'bold';
            personOne.appendChild(text1One);

            var dateOne = document.createElement('p');
            var text2One = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateOne.appendChild(text2One);

            div.appendChild(personOne);
            div.appendChild(dateOne);
            div.setAttribute("id", roomOneX);
            document.getElementById("placeOne").appendChild(div);
            
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
    var oneY = document.getElementById('roomOneEnter').value;
    var oneE = document.getElementById("placeOne");
    oneE.querySelector("#" + oneY).remove();
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
        var roomTwoX = document.getElementById('roomTwoEnter').value;
        if (roomTwoX != "" && roomTwoX != " ") {
            var div = document.createElement('div');

            var logsPTwo = document.createElement('p');
            var logsNTwo = document.createTextNode("Room Two: " + roomTwoX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPTwo.appendChild(logsNTwo);
            document.getElementById('logsContent').appendChild(logsPTwo);

            var personTwo = document.createElement('p');
            var text1Two = document.createTextNode(roomTwoX);
            personTwo.style.fontWeight = 'bold';
            personTwo.appendChild(text1Two);

            var dateTwo = document.createElement('p');
            var text2Two = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateTwo.appendChild(text2Two);

            div.appendChild(personTwo);
            div.appendChild(dateTwo);
            div.setAttribute("id", roomTwoX);
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
    var twoY = document.getElementById('roomTwoEnter').value;
    var twoE = document.getElementById("placeTwo");
    twoE.querySelector("#" + twoY).remove();
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
        var roomThreeX = document.getElementById('roomThreeEnter').value;
        if (roomThreeX != "" && roomThreeX != " ") {
            var div = document.createElement('div');

            var logsPThree = document.createElement('p');
            var logsNThree = document.createTextNode("Room Three: " + roomThreeX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPThree.appendChild(logsNThree);
            document.getElementById('logsContent').appendChild(logsPThree);

            var personThree = document.createElement('p');
            var text1Three = document.createTextNode(roomThreeX);
            personThree.style.fontWeight = 'bold';
            personThree.appendChild(text1Three);

            var dateThree = document.createElement('p');
            var text2Three = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateThree.appendChild(text2Three);

            div.appendChild(personThree);
            div.appendChild(dateThree);
            div.setAttribute("id", roomThreeX);
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
    var threeY = document.getElementById('roomThreeEnter').value;
    var threeE = document.getElementById("placeThree");
    threeE.querySelector("#" + threeY).remove();
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
        var roomFourX = document.getElementById('roomFourEnter').value;
        if (roomFourX != "" && roomFourX != " ") {
            var div = document.createElement('div');

            var logsPFour = document.createElement('p');
            var logsNFour = document.createTextNode("Room Four: " + roomFourX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPFour.appendChild(logsNFour);
            document.getElementById('logsContent').appendChild(logsPFour);

            var personFour = document.createElement('p');
            var text1Four = document.createTextNode(roomFourX);
            personFour.style.fontWeight = 'bold';
            personFour.appendChild(text1Four);

            var dateFour = document.createElement('p');
            var text2Four = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateFour.appendChild(text2Four);

            div.appendChild(personFour);
            div.appendChild(dateFour);
            div.setAttribute("id", roomFourX);
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
    var fourY = document.getElementById('roomFourEnter').value;
    var fourE = document.getElementById("placeFour");
    fourE.querySelector("#" + fourY).remove();
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
        var roomFiveX = document.getElementById('roomFiveEnter').value;
        if (roomFiveX != "" && roomFiveX != " ") {
            var div = document.createElement('div');

            var logsPFive = document.createElement('p');
            var logsNFive = document.createTextNode("Room Five: " + roomFiveX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPFive.appendChild(logsNFive);
            document.getElementById('logsContent').appendChild(logsPFive);

            var personFive = document.createElement('p');
            var text1Five = document.createTextNode(roomFiveX);
            personFive.style.fontWeight = 'bold';
            personFive.appendChild(text1Five);

            var dateFive = document.createElement('p');
            var text2Five = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateFive.appendChild(text2Five);

            div.appendChild(personFive);
            div.appendChild(dateFive);
            div.setAttribute("id", roomFiveX);
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
    var fiveY = document.getElementById('roomFiveEnter').value;
    var fiveE = document.getElementById("placeFive");
    fiveE.querySelector("#" + fiveY).remove();
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
        var roomSixX = document.getElementById('roomSixEnter').value;
        if (roomSixX != "" && roomSixX != " ") {
            var div = document.createElement('div');

            var logsPSix = document.createElement('p');
            var logsNSix = document.createTextNode("Room Six: " + roomSixX + " " + (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            logsPSix.appendChild(logsNSix);
            document.getElementById('logsContent').appendChild(logsPSix);

            var personSix = document.createElement('p');
            var text1Six = document.createTextNode(roomSixX);
            personSix.style.fontWeight = 'bold';
            personSix.appendChild(text1Six);

            var dateSix = document.createElement('p');
            var text2Six = document.createTextNode((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " (" + new Date().getHours() + ":" + new Date().getMinutes() +  ":" + new Date().getSeconds() + ")");
            dateSix.appendChild(text2Six);

            div.appendChild(personSix);
            div.appendChild(dateSix);
            div.setAttribute("id", roomSixX);
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
    var sixY = document.getElementById('roomSixEnter').value;
    var sixE = document.getElementById("placeSix");
    sixE.querySelector("#" + sixY).remove();
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