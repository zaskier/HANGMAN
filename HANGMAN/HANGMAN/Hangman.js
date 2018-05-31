

var arrpassword = new Array(11);
arrpassword[0] = "Cheap as Chips";
arrpassword[1] = "The Early Bird Gets The Worm";
arrpassword[2] = "Computer says no";
arrpassword[3] = "robot with human hair";
arrpassword[4] = "popular catch phrase";
arrpassword[5] = "This is adventure time";
arrpassword[6] = "Hangman is hard";
arrpassword[7] = "Crocodile Tears";
arrpassword[8] = "As Busy As a Bee";
arrpassword[9] = "Cry Over Spilled Milk";
arrpassword[10] = "Kanye West and Kim Kardashian";
arrpassword[10] = "Break The Ice"


password = arrpassword[(Math.floor(Math.random() * (10 - 1 + 1)) + 1)];
password = password.toUpperCase();

var PasswordLenght = password.length;
var lost_counter = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for (i = 0; i < PasswordLenght; i++) {
    if (password.charAt(i) === " ") password1 = password1 + " ";
    else password1 = password1 + "-";
}

function PrintPassword() {
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";



function start() {

    var div_content = "";

    for (i = 0; i <= 34; i++) {
        var element = "let" + i;
        div_content = div_content + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 7 === 0) div_content = div_content + '<div style="clear:both;"></div>';
    }

    document.getElementById("alphabet").innerHTML = div_content;


    PrintPassword();
}

String.prototype.SetSign = function (place, letterinword) {
    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + letterinword + this.substr(place + 1);
}


function check(nr) {

    var RightLetter = false;

    for (i = 0; i < PasswordLenght; i++) {
        if (password.charAt(i) === letters[nr]) {
            password1 = password1.SetSign(i, letters[nr]);
            RightLetter = true;
        }
    }

    if (RightLetter === true) {
        yes.play();
        var element = "let" + nr;
        document.getElementById(element).style.background = "#2e772e";
        document.getElementById(element).style.color = "#66ea66";
        document.getElementById(element).style.border = "3px solid ##66ea66";
        document.getElementById(element).style.cursor = "default";

        PrintPassword();
    }
    else {
        no.play();
        var element = "let" + nr;
        document.getElementById(element).style.background = "#561818";
        document.getElementById(element).style.color = "#ad4040";
        document.getElementById(element).style.border = "3px solid #ad4040";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        //loss
        lost_counter++;
        var RightImage = "img/s" + lost_counter + ".png";
        document.getElementById("gallow").innerHTML = '<img src="' + RightImage + '" alt="" />';
    }

    //win(every password letter is ok)
    if (password === password1)
        document.getElementById("alphabet").innerHTML = "Good work! This is coorect password: " + password + '<br /><br /><span class="reset" onclick="location.reload()">PLAY AGAIN?</span>';

    //loss(9 times wrong letter)
    if (lost_counter >= 9)
        document.getElementById("alphabet").innerHTML = "You lost Game Over! correct password was: " + password + '<br /><br /><span class="reset"  onclick="location.reload()">PLAY AGAIN?</span>';
}
