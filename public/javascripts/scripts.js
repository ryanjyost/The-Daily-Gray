$(document).ready(function(){

	//=========================
	// styling variables
    var blue = "169,208,245",
    	lightBlue = "213,231,248",
    	red = "245,169,188",
    	lightRed = "248,224,230",
    	black = "110,110,110";
    	gray = "200,200,200",
    	opacity = "0.8";


	$('.post-cont').each(function(){
		var xy = $(this).find(".hidden-xy")[0].innerHTML,
			imageURL = $(this).find(".image-url")[0].innerHTML,
			postImageContainer = $(this).find(".post-img-cont")[0],
			postInfo = $(this).find(".post-info")[0],
			category = $(this).find(".category")[0];

			console.log(imageURL)

	    var xPosition = xy[1],
	    	yPosition = xy[3];

	    postImageContainer.style.backgroundImage = "url("+imageURL+")";


	    //set background color based on left-right spectrum
	    var colorsMappedToXPosition = [black, blue, lightBlue, gray, lightRed, red];

	    //label based on level of personal opinion in the post
	   	var descMappedToYPosition = [["", "news", "facts/stats", "interview"], "speculation", "opinion", "commentary", "analysis"];

	    if(xy==='x0y0'){ //style fake news
	    	postInfo.style.background = "rgba(" + colorsMappedToXPosition[xPosition] + "," + opacity + ")";
	    	category.innerHTML = "FAKE NEWS";
	    } else if(yPosition == 0){
	    	category.innerHTML = descMappedToYPosition[yPosition][xPosition];
	    	postInfo.style.background = "rgba(" + black + "," + opacity + ")";
	    } else{
	    	 postInfo.style.background = "rgba(" + colorsMappedToXPosition[xPosition] + "," + opacity + ")";
	    	 category.innerHTML = descMappedToYPosition[yPosition];

		} //end else stmt

	});//each function

}); //document ready




