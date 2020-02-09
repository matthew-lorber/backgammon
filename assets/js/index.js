window.onload = function(){
    $("#open-icon").click(()=>openMenu()); // opens game menu, below
    $("#invite").click(()=>invitePlayer()); // invite player, below
    $("#fullscreen").click(()=>fullscreen());
    $("#roll").click(()=>roll());
};

// OPEN GAME MENU
function openMenu() {;
    if ($("#tools").hasClass("open")) {
        $("#tools").removeClass("open");
        $("#open-icon").removeClass("open");
        $("#board").animate({width:"75vw"});
    } else {
        $("#tools").addClass("open");
        $("#open-icon").addClass("open");
        $("#board").animate({width:"55vw"});
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

// CHANGE COLORS
$("#black").change(()=>$(".black").css("fill",$("#black").val()));
$("#white").change(()=>$(".white").css("fill",$("#white").val()));
$("#page").change(()=>$("body,html").css("background-color",$("#page").val()));
$("#background").change(()=>$(".background").css("fill",$("#background").val()));
$("#inset-sel").change(()=>$("#inset").css("fill",$("#inset-sel").val()));
$("#border").change(()=>$("#board-border").css("stroke",$("#border").val()));
$("#dice").change(()=>$(".die").css("fill",$("#dice").val()));
$("#dots").change(()=>$(".dot").css("fill",$("#dots").val()));

// ROLL DICE
function roll() {
    let d1 = Math.ceil(Math.random()*6);
    let d2 = Math.ceil(Math.random()*6);
}

// DRAG DICE
drag(document.getElementById("roll"));

function drag(x) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    x.onmousedown = dragdwn;
    function dragdwn(e) {
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = stopdrag;
        document.onmousemove = edrag;
    }

    function edrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        x.style.top = (x.offsetTop - pos2) + "px";
        x.style.left = (x.offsetLeft - pos1) + "px";
    }

    function stopdrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}