var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImg_width = 30;
blockImg_height = 30;

var playerObj = "";
var blockImg_object = "";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img){
    playerObj = Img;
    
    playerObj.scaleToWidth(150);
    playerObj.scaleToHeight(140);
    playerObj.set({
        top:playerY,
        left:playerX
    });
    canvas.add(playerObj);
    });
} 

function newImg(getImg)
{
    fabric.Image.fromURL(getImg, function(Img){
    blockImg_Obj = Img;
    
    blockImg_Obj.scaleToWidth(blockImg_width);
    blockImg_Obj.scaleToHeight(blockImg_height);
    blockImg_Obj.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImg_Obj);
    });
} 

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "83")
    {
        newImg("spiderman_body.png");
        console.log("s");
    }

    if (keyPressed == "72")
    {
        newImg("hulk_legs.png");
        console.log("h");
    }

    if (keyPressed == "73")
    {
        newImg("ironman_right_hand.png");
        console.log("i");
    }

    if (keyPressed == "84")
    {
        newImg("thor_face.png");
        console.log("t");
    }
    
    if (keyPressed == "67")
    {
        newImg("captain_america_left_hand.png");
        console.log("c");
    }

}    