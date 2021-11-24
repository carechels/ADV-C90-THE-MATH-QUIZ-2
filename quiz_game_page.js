player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
 
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    c1 = word.charAt(1);
    console.log(c1);

    len2 = Math.floor(word.length/2);
    console.log(len2);
    c2 = word.charAt(len2);
    console.log(c2);

    minus = word.length - 1;
    console.log (minus);
    c3 = word.charAt(minus);
    console.log("Minus: "+c3);

    rm1 = word.replace(c1 , "_");
    console.log("Rm1- "+rm1);
    rm2 = rm1.replace(c2 , "_");
    console.log("Rm2-" + rm2);
    rm3 = rm2.replace(c3 , "_");
    console.log(rm3);

    question_word = "<h4 id = 'word_display'> Q." + rm3 + "</h4>";
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = ""; 


}