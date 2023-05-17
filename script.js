//turn check
var turn = 1;

$("button").click(function() {
    if(turn == 1) {
        $("#screen").text("PLAYER 2 TURN FOLLOWS");


    $(this).addClass("fa fa-check");
        turn = 2;
    }
    else {
        $("#screen").text("PLAYER 1 TURN FOLLOWS");


        $(this).addClass("fa fa-times");
        turn = 1;
    }
});



// invalid moves
$("button").click(function() {
	if($(this).hasClass("fa fa-times") ||
			$(this).hasClass("fa fa-check"))
	{
		$(this).css("background-color", "red");
		setTimeout(() => {
			$(this).css("background-color", "white");
		}, 800);
	}
});



// winning check
function check(symbol) {
    if ($(".sq1").hasClass(symbol) &&
        $(".sq2").hasClass(symbol) &&
        $(".sq3").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq2").css("color", "green");
        $(".sq3").css("color", "green");
        return true;
    } else if ($(".sq4").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq6").hasClass(symbol))
    {
        $(".sq4").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq6").css("color", "green");
        return true;
    } else if ($(".sq7").hasClass(symbol)
            && $(".sq8").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq7").css("color", "green");
        $(".sq8").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq4").hasClass(symbol)
            && $(".sq7").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq4").css("color", "green");
        $(".sq7").css("color", "green");
        return true;
    } else if ($(".sq2").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq8").hasClass(symbol))
    {
        $(".sq2").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq8").css("color", "green");
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq6").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq3").css("color", "green");
        $(".sq6").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq9").css("color", "green");
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq7").hasClass(symbol))
    {
        $(".sq3").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq7").css("color", "green");
        return true;
    } else {
        return false;
    }





    //reset
    function reset()
{
   $("#screen").text("PLAYER 1 TURN FOLLOWS");
   $("#screen").css("background-color", "transparent");
   $(".r").removeClass("fa fa-check");
   $(".r").removeClass("fa fa-times");
   turn=1;
 }