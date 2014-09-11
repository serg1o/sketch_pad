var squares_per_side = 16;
var size = 400;//size of the square in pixels
var pixels = Math.floor(size/squares_per_side);

function changeParams(){
	squares_per_side = prompt("New number of squares (max: 64): ");
	generateSquares();
}

function generateSquares(){
	if (!isNaN(squares_per_side) && (squares_per_side <= 64)){
		pixels = Math.floor(size/squares_per_side);
		$("#params").css("display", "none");
		$("#change_params").css("display", "block");
		drawSquares();
	}
	else {alert("The parameters introduced are not valid!");}
}

function randColor(){
	return Math.floor(Math.random()*16).toString(16);
}

function drawSquares(){	
	var $containerDiv = $("#container");
	$containerDiv.empty();
	for (var i = 0; i < squares_per_side; i++){
		$containerDiv.append("<div class='row' style='float:left; width:100%;'></div>");
		var $containerDivLastChild = $("#container:last-child");
		for (var j = 0; j < squares_per_side; j++){
			var $newElem = $('<div>');
			$newElem.css("float","left");
			$newElem.css("background-color","#0f0");
			$newElem.height(pixels+"px");
			$newElem.width(pixels+"px");
			$newElem.hover(function(){
				var $object = $(this);
				if (!$object.hasClass("changed")){
					$object.css("background-color","#"+randColor()+randColor()+randColor()+randColor()+randColor()+randColor());
					$object.addClass("changed");
				} else {
					var opacity = $object.css("opacity");
					if (opacity > 0){
						$object.css("opacity", (opacity - 0.1).toString());
					}
				}
			});
			var $aux = $('<div>');
			$aux.css("background-color","#000");
			$aux.height(pixels+"px");
			$aux.width(pixels+"px");
			$aux.css("float","left");
			$aux.append($newElem);
			$containerDivLastChild.append($aux);
		}
	}
}

$(document).ready(function(){
	drawSquares();
});
