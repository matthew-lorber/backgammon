window.onload = function(){
    $("#settings").click(()=>openMenu()); // opens game menu, below
    $("#invite").click(()=>invitePlayer()); // invite player, below
    $("#fullscreen").click(()=>fullscreen());
    $("#double").click(()=>double());
    $("#new-game").click(()=>newgame());
};

// START A NEW GAME
function newgame() {
    $("#d-1, #d-2, #d-3, #d-4").removeClass("rolling");
    $("#doubling").html("");
    $("#whitebar, #blackbar").attr("value",0);
    $("#whitepip, #blackpip").html("167");
    $("#white-chip-in, #black-chip-in").html("0");
    for (let i=0; i<5; i++) {
        $("#game-top > span:nth-child(7)").append("<span class='white chip'></span>");
        $("#game-top > span:nth-child(1)").append("<span class='black chip'></span>");
        $("#game-bottom > span:nth-child(7)").append("<span class='black chip'></span>");
        $("#game-bottom > span:nth-child(1)").append("<span class='white chip'></span>");
    }
    for (let i=0; i<3; i++) {
        $("#game-top > span:nth-child(5)").append("<span class='white chip'></span>");
        $("#game-bottom > span:nth-child(5)").append("<span class='black chip'></span>");
    }
    for (let i=0; i<2; i++) {
        $("#game-top > span:nth-child(12)").append("<span class='black chip'></span>");
        $("#game-bottom > span:nth-child(12)").append("<span class='white chip'></span>");
    }
}

// OPEN GAME MENU
function openMenu() {;
    if ($("#settings").hasClass("open")) {
        $("#tools, #settings, #colors").removeClass("open");
        $("#board, #gameboard").css("transform","scale(1)");
    } else {
        $("#tools, #settings").addClass("open");
        $("#board, #gameboard").css("transform","scale(0.7)");
    }
}

// INVITE PLAYER
function invitePlayer() { // opens mail client and pre-populates message with link to the game
    let mail = 'sample@gmail.com';
    let subj = 'Test';
    let body = // add greeting and invitation to play, then the link to get to this game
    document.location = "mailto:"+mail+"?subject="+subj+"&body="+body;
}

// FULLSCREEN
function fullscreen() {
    if (!document.fullscreenElement) {document.body.requestFullscreen();}
    else {document.exitFullscreen();}
}

// DOUBLE
function double() {
    let bet = $("#doubling").html();
    switch(bet) {
        case "": n=2; break;
        case "2": n=4; break;
        case "4": n=8; break;
        case "8": n=16; break;
        case "16": n=32; break;
        case "32": n=64; break;
        default: return;
    }
    $("#doubling").html(n);
}

// CHANGE COLORS
$("#change-colors").click(()=>{
    $("#tools").removeClass("open");
    $("#colors").addClass("open");
});
$("#black").change(()=>{
    $(".black, #blackbar").css("background",$("#black").val());
});
$("#white").change(()=>{
    $(".white, #whitebar").css("background",$("#white").val());
});
$("#page").change(()=>$("body,html").css("background",$("#page").val()));
$("#background").change(()=>$("#board").css("background",$("#background").val()));
$("#border").change(()=>$("#board").css("border","1px solid " + $("#border").val()));

// DRAG DICE
// drag(document.getElementById("dice-black"));
// drag(document.getElementById("dice-white"));

// function drag(x) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     x.onmousedown = dragdwn;
//     function dragdwn(e) {
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = stopdrag;
//         document.onmousemove = edrag;
//     }

//     function edrag(e) {
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         x.style.top = (x.offsetTop - pos2) + "px";
//         x.style.left = (x.offsetLeft - pos1) + "px";
//     }

//     function stopdrag() {
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

// ROLL DICE
$(".dice").click(function(){
    // if ($(".rolling").length !== 0) {return;}
    let d1 = Math.ceil(Math.random()*6);
    let d2 = Math.ceil(Math.random()*6);
    let d3 = Math.ceil(Math.random()*2 + 1) * 360;
    let r1x = 0, r1y = 0, r2x = 0, r2y = 0;
    switch(d1) {
        case 1: r1x = "180"; break;
        case 2: r1y = "-90"; break;
        case 3: r1x = "-90"; break;
        case 4: r1x = "90"; break;
        case 5: r1y = "90"; break;
        case 6: r1x = "0"; break;
    }
    switch(d2) {
        case 1: r2x = "180"; break;
        case 2: r2y = "-90"; break;
        case 3: r2x = "-90"; break;
        case 4: r2x = "90"; break;
        case 5: r2y = "90"; break;
        case 6: r2x = "0"; break;
    }
    $(this).children().removeClass("rolling");
    $(this).children(":first-child").css("transform","rotateX("+r1x+"deg) rotateY("+r1y+"deg) rotateZ("+d3+"deg)");
    $(this).children(":nth-child(2)").css("transform","rotateX("+r2x+"deg) rotateY("+r2y+"deg) rotateZ("+d3+"deg)");
    if (d1 === d2) {
        setTimeout(()=>{
            let int = setInterval(()=>{
                $("#gameboard").append("<img class='star' src='./assets/images/star.png'/>");
            },100);
            setTimeout(()=>{
                clearInterval(int);
                $(".star").remove();
            },1000);
        },600);
    }
});