player_x = 10;
player_y = 10;
block_width = 30;
block_height = 30;
var canvas = new fabric.Canvas('my_canvas');
var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y ,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(image_block) {
    fabric.Image.fromURL(image_block , function(Img){
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y - 10,
            left:player_x - 10
        });
        canvas.add(block_object);
    })
}


window.addEventListener("keydown" , check_keydown);

function check_keydown(e) {
    keypress = e.keyCode;
    console.log("Now this keycode is pressed  -  " + keypress);

    if (e.shiftKey == true && keypress == "80") {
        if (block_height <= 100 && block_width <= 100) {
            console.log("Shift + P is Pressed Together");
block_height += 10;
block_width += 10;
document.getElementById("width").innerHTML = block_width;
document.getElementById("height").innerHTML = block_height;
        } else {
            window.alert("You can't increase the dimensions anymore")
        }
    }

    if (e.shiftKey == true && keypress == "77") {
        if (block_height >= 20 && block_width >= 20) {
            console.log("Shift + M is Pressed Together");
block_height -= 10;
block_width -= 10;
document.getElementById("width").innerHTML = block_width;
document.getElementById("height").innerHTML = block_height;
        } else {
            window.alert("You can't decrease the dimensions anymore");
        }
    }

    if (keypress == "70") {
        new_image("ironman_face.png");
        console.log("f");
    }

    if (keypress == "66") {
        new_image("spiderman_body.png");
        console.log("b");
    }

    if (keypress == "76") {
        new_image("hulk_legs.png");
        console.log("l");
    }

    if (keypress == "82") {
        new_image("thor_right_hand.png");
        console.log("r");
    }

    if (keypress == "72") {
        new_image("captain_america_left_hand.png");
        console.log("h");
    }

    if (keypress == "38") {
        up();
        console.log("up pressed");
    }

    if (keypress == "40") {
        down();
        console.log("down pressed");
    }

    if (keypress == "37") {
        left();
        console.log("left pressed");
    }

    if (keypress == "39") {
        right();
        console.log("right pressed");
    }

}


function up() {
    if (player_y >= 0) {
        player_y -= block_height;
        console.log("block height is = " + block_height);
        console.log("Player Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 400) {
        player_y += block_height;
        console.log("block height is = " + block_height);
        console.log("Player Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x -= block_width;
        console.log("block width is = " + block_width);
        console.log("Player X = " + player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 1000) {
        player_x += block_width;
        console.log("block width is = " + block_width);
        console.log("Player X = " + player_x);
        canvas.remove(player_object);
        player_update();
    }
}