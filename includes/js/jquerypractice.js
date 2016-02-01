/**
 * Created by bram on 20-1-2016.
 */
function test() {
    var button =    $("#jquerytestbutton");
    for(c=10; c>0; c--){
     button.hide("fast");
       button.show("fast");
        button.rotate(20*Math.PI/180);
    }

}

$("#rotatetestimage").rotate({
    bind:
    {
        click: function(){
            $(this).rotate({ angle:0,animateTo:360})
        }
    }

});