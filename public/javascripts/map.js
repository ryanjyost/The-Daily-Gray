// $(document).ready(function(){

// 	//=========================
// 	// colors
//     var blue = "#A9D0F5",
//     	lightBlue = "#E0ECF8",
//     	red = "#F5A9BC",
//     	lightRed = "#F8E0E6",
//     	white = "#f2f2f2";

//     var boxColorArray = ['', blue, lightBlue, white, lightRed, red];

//     //=====================================================
//     //loop through all boxes, add colors on initial load
//     for(let x = 5; x > 0; x--){
//     	for(let y = 4; y > 0; y--){
//     		let currBox = document.getElementById('x'+x+'y'+y);
//     		currBox.style.borderColor = "border-color: #e6e6e6 #f2f2f2 #e6e6e6 #f2f2f2";
//     		currBox.style.borderWidth = "border-width: 1px 1px 1px 1px";
//     		currBox.style.borderStyle = "border-style: solid";
//     		currBox.style.opacity = (1-.19*y);
//     		currBox.style.backgroundColor = boxColorArray[x];
//     	}
//     }


//     //get the background image urls for removing on hover and adding back
//     //start with blank in 0th index so array posiiton matches row number
//     var rowImageURLs = [''];

// 	//store background image url from row divs into the array
// 	for(let y = 1; y < 5; y++){
// 		 let imageURL = $('#row'+y).css('background-image');
// 		 rowImageURLs.push(imageURL);
// 	}

// 	console.log(rowImageURLs);


// 	//=====================================================
// 	//hover styling

// 	//get all the boxes in the grid
// 	var boxList = document.getElementsByClassName("box");

// 	for(var j=0; j < boxList.length; j++){

// 		//click event
// 		boxList[j].addEventListener('click', function() {
// 		    var id = event.target.id;
// 		  }, false);

// 		//fill box on hover, and fill any boxes below and to left of it with same color
// 		boxList[j].addEventListener('mouseover', function() {

// 			//loop through boxes, clear styling
// 		    for(let x = 5; x > 0; x--){
// 		    	for(let y = 4; y > 0; y--){

// 		    		let currBox = document.getElementById('x'+x+'y'+y);
// 		    		currBox.style.backgroundColor = "#fff";
// 		    		currBox.style.opacity = 0;
// 		    	}
// 		    }

// 		    //clear out background images
// 			for(let y = 1; y < 5; y++){
// 				 document.getElementById('row'+ y).style.backgroundImage = "none";
// 			}

// 		    let box = event.target,
// 		    	boxId = event.target.id,
// 		    	xPosition = boxId[1],
// 		    	yPosition = boxId[3],
// 		    	currBoxColor = boxColorArray[xPosition],
// 				currOpacity = (1-(.19*yPosition));

// 	    		//show current row's background image/label
// 	    		if (yPosition > 0)
// 				document.getElementById('row' + yPosition).style.backgroundImage = rowImageURLs[yPosition];

// 		    	//hide left, right labels on hover
// 		    	document.getElementById('left').style.display = "none";
// 		    	document.getElementById('right').style.display = "none";

// 		    //loop through elements below and to left of current hover
// 		    for(let x = xPosition; x > 0; x--){
// 		    	for(let y = yPosition; y > 0; y--){
// 		    		let currBox = document.getElementById('x'+x+'y'+y);

// 		    		currBox.style.opacity = currOpacity;
// 		    		currBox.style.backgroundColor = currBoxColor;
// 		    	}
// 		    }
// 		  }, false);


// 		//reset styling when moving the pointer out of the box
// 		boxList[j].addEventListener('mouseout', function() {
// 			//loop through elements and add back colors
// 		    for(let x = 5; x > 0; x--){
// 		    	for(let y = 4; y > 0; y--){
// 		    		let currBox = document.getElementById('x'+x+'y'+y);

// 		    		//show left, right labels on mouseout
// 			    	document.getElementById('left').style.display = "inline";
// 			    	document.getElementById('right').style.display = "inline";

// 		    		currBox.style.opacity = (1-.19*y);

// 		    		let row = document.getElementById('row'+y);
//     				//row.style.backgroundColor = "none";

// 		    		if(x==1){
// 		    			currBox.style.backgroundColor = blue;
// 		    		} else if(x==2){
// 		    			currBox.style.backgroundColor = lightBlue;
// 		    		} else if(x==3){
// 		    			currBox.style.backgroundColor = white;
// 		    		} else if(x==4){
// 		    			currBox.style.backgroundColor = lightRed;
// 		    		} else{
// 		    			currBox.style.backgroundColor = red;
// 		    		}

// 		    		//show current row's background image/label
// 	    			document.getElementById('row' + y).style.backgroundImage = rowImageURLs[y];
// 		    	}
// 		    }
// 		}, false);

// 	}//end loop through box list


// }, false);