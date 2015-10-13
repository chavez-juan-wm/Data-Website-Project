var Player = 1;
var keepTrack = 0;
var player1Score = [false,false,false,false,false,false,false,false,false];
var player2Score = [false,false,false,false,false,false,false,false,false];
var winner1 = 0;
var winner2 = 0;

function reset()
{
    document.getElementById("1").innerHTML = "<button onclick='Winner(1)'></button>";
    document.getElementById("2").innerHTML = "<button onclick='Winner(2)'></button>";
    document.getElementById("3").innerHTML = "<button onclick='Winner(3)'></button>";
    document.getElementById("4").innerHTML = "<button onclick='Winner(4)'></button>";
    document.getElementById("5").innerHTML = "<button onclick='Winner(5)'></button>";
    document.getElementById("6").innerHTML = "<button onclick='Winner(6)'></button>";
    document.getElementById("7").innerHTML = "<button onclick='Winner(7)'></button>";
    document.getElementById("8").innerHTML = "<button onclick='Winner(8)'></button>";
    document.getElementById("9").innerHTML = "<button onclick='Winner(9)'></button>";

    for(var counter = 0; counter <= 8; counter++)
    {
        player1Score[counter] = false;
        player2Score[counter] = false;
    }

    keepTrack = 0;
    Player = 1;
    document.getElementById("scores").innerHTML = "<h4>Score: " + winner1 + " | " + winner2  + "</h4>";
    document.getElementById("player").innerHTML = "<h4> Player 1</h4>";
}
function Score()
{
    if((player1Score[0] && player1Score[1] && player1Score[2]) || (player1Score[3] && player1Score[4] && player1Score[5]) || (player1Score[6] && player1Score[7] && player1Score[8]) || (player1Score[0] && player1Score[4] && player1Score[8]) || (player1Score[2] && player1Score[4] && player1Score[6]) || (player1Score[0] && player1Score[3] && player1Score[6]) || (player1Score[1] && player1Score[4] && player1Score[7]) || (player1Score[2] && player1Score[5] && player1Score[8]))
    {
        alert("Player 1 won!");
        winner1++;
        reset();
    }
    else if((player2Score[0] && player2Score[1] && player2Score[2]) || (player2Score[3] && player2Score[4] && player2Score[5]) || (player2Score[6] && player2Score[7] && player2Score[8]) || (player2Score[0] && player2Score[4] && player2Score[8]) || (player2Score[2] && player2Score[4] && player2Score[6]) || (player2Score[0] && player2Score[3] && player2Score[6]) || (player2Score[1] && player2Score[4] && player2Score[7]) || (player2Score[2] && player2Score[5] && player2Score[8]))
    {
        alert("Player 2 won!");
        winner2++;
        reset();
    }
    else if(keepTrack == 9)
    {
        alert("It's a tie!");
        reset();
    }
}

function Winner(button)
{
    var par = document.getElementById(button);
    var img = document.createElement('img');

    if(Player == 1)
    {
        img.src = 'http://demo.ksankaran.com/tictactoe/images/letter-x.jpg';
        img.height = 80;
        img.width = 80;
        player1Score[button - 1] = true;
        Player++;
        document.getElementById("player").innerHTML = "<h4>Player 2</h4>";
    }
    else if(Player == 2)
    {
        img.src = 'http://cf067b.medialib.glogster.com/media/d2/d288f67bbd7805521ac44c0771a2f93362e7e60657079f8e71f8dedac4316022/let-o.jpg';
        img.height = 90;
        img.width = 100;
        player2Score[button - 1] = true;
        Player--;
        document.getElementById("player").innerHTML = "<h4>Player 1</h4>";
    }

    keepTrack++;
    par.innerHTML = "";
    par.appendChild(img);
    Score();
}