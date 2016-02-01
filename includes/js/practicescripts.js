
//region game

/**

 -replace sprite to correspond with direction

 //Movement commands
 //move up == y-50
 //move down == y+50
 //move left == x-50
 //move right == x+50

 //Keycodes
 //up == 38
 //down == 40
 //left == 37
 //right == 39



 //Bounds
 //left border = top=0
 //top border = top=0
//right border = x=950
 */

//region start game
$('#logo').click(function(){
    var sprite = $("#sprite");
    sprite.addClass('_testsprite');
    spawncoin();
});
//endregion

//region on key press
$(document).keypress(function(e) {

    //save sprite and its position
    var sprite = $("#sprite");
    var position = sprite.position();

    //convert to coordinates
    var x = position.left;
    var y = position.top;
    console.log("Position before moving X = "+x+"Y = "+y);


    //retrieve pressed key
    var keycode =  e.keyCode;

    switch(keycode) {
        case 38:
            //up
            moveup(sprite,x,y);
            break;
        case 40:
            //down
            movedown(sprite,x,y);
            break;
        case 37:
            //left
            moveleft(sprite,x,y);
            break;
        case 39:
            //right
            moveright(sprite,x,y);
            break;
        default:

    }

    //echo coordinates after moving
    var new_position = sprite.position();

    //convert to coordinates
    var new_x = new_position.left;
    var new_y = new_position.top;

    console.log("Position after moving X = "+new_x+"Y = "+new_y);


});
//endregion

//region movement

function moveleft(sprite,x,y){

    //check if move will break bounds
    if(x >= 1){

        //update class so sprite is facing the right way
        sprite.removeClass();
        sprite.addClass('_leftsprite');

        //change position
        sprite.css({ top: y, left: x-50 });
    }


}

function moveright(sprite,x,y){



    //check if move will break bounds
    if(x <= 650){

        //update class so sprite is facing the right way
        sprite.removeClass();
        sprite.addClass('_rightsprite');

        //change position
        sprite.css({top: y, left: x+50});
    }


}

function moveup(sprite,x,y){

    //check if move will break bounds
    if(y >= 0){

        //update class so sprite is facing the right way
        sprite.removeClass();
        sprite.addClass('_upsprite');

        //change position
        sprite.css({ top: y-50, left: x });

    }

}

function movedown(sprite,x,y){

    //check if move will break bounds
    if(y <= 649){

        //update class so sprite is facing the right way
        sprite.removeClass();
        sprite.addClass('_downsprite');

        //change position
        sprite.css({ top: y+50, left: x });

    }

}

function checkbounds(){

}
//endregion

//region spawn coin
/**
 * generate x and y coordinate between the possible values
 *
 * create div element
 *
 * give it an id
 *
 * add it to the div _map just like sprite
 *
 * add css to the created div element
 */

function spawncoin(){



       var top = Math.floor(Math.random() * (500 - 1) + 1);
       var left = Math.floor(Math.random() * (500 - 1) + 1);
       var $div = $("<div>");

    //$div.attr("id","coin_"+top+"_"+left);
    $div.attr("id","testcoin");
    $('#_map').append($div);


    $div.addClass('_coinsprite');
    $div.css({ top: 200, left: 200 });
}

//endregion

//region checkcollision

function checkcolission(sprite){

    var coin =   $('#testcoin');

    //check if current top or left is somewhat equal to
    if(x == top){

    }

}
//endregion
//endregion



function drawTable(){
    
}


