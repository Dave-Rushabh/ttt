let music_clicked = new Audio("click-music.wav");
let music_bg = new Audio("war.mp3");

let turn = "X";

let finished = false;


// Fuction for turn changing

const chnageTurn = () => {

    return turn === "X"?"0" : "X";
}

// Fuction for checking win situation

const checkWin = () => {

    let text = document.getElementsByClassName('description');
    let  wins = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [2,4,6],
    ]

    wins.forEach(e => {
        if ( (text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !== "") ) 
        {

            document.querySelector('.info').innerText = "Congarts !!!" + "  " + text[e[0]].innerText + "  " + "Won";
            finished = true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "100px";
            document.querySelector('.img').getElementsByTagName('img')[0].style.height = "100px";
            document.querySelector('.img').getElementsByTagName('img')[0].style.paddingLeft = "100px";
            setTimeout(function() {music_bg.play();}, 300);


        }
    })

}

// Game Logic starts here

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let box_descri = element.querySelector('.description');
    element.addEventListener('click', () => {
        music_clicked.play();
        if (box_descri.innerText === ''){
            box_descri.innerText = turn;
            turn = chnageTurn();
            checkWin();
            if(!finished) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + '  ' + turn;
            }
            
            
        }
    })
})

// Reset button logic

    reset.addEventListener('click', () => {
        let box_descri = document.querySelectorAll('.description');
        Array.from(box_descri).forEach(element => {
            element.innerText = ""
        });
        turn = "X";
        finished = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for" + '  ' + turn;
        document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px";
        document.querySelector('.img').getElementsByTagName('img')[0].style.height = "0px";
    })
