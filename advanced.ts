
var food: Array<string> = ["Pizza", "Pasta", "Fish"]
var prices: number[]=[10,15,20]
var rating: number[]=[3,3,3]
var pictures: string[]=["https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg","https://ais.kochbar.de/kbrezept/306041_1010094/620x465/pasta-aurora-rezept-bild-nr-2.jpg","https://img.etimg.com/thumb/msid-68495044,width-643,imgsize-1335371,resizemode-4/fish.jpg"]
var test =[1,2,3]
/*classic way:*/

for (let i=0; i<food.length; i++){	

	$(".Maintext").append('<div class="">'+ food[i]+"<br> price: "+prices[i]+"<br>" +'<div class="rating" id="rating"'+i+'"value="rating[i]">'+rating[i] 
		+"</div> stars"+'<div><button class="plus"> + </button> <button class="minus"> - </button></div>'
		+'<div> <img src="'+pictures[i] +'" alt="" class="image"> </div> </div>')
	
}

/*for each:
food.forEach(function(value) {
   console.log(value);
});*/


//Example for destructuring:
const {[0]: pa, [1]:pb, [2]:pc} = food; 
$("#comments").append("<br> Please write a comment about our specific products: <br>"+pa +'<div><input type="inputfield" name="inputfield" class="ifield"></div>'+
"<br>"+ pb +'<div><input type="inputfield" name="inputfield" class="ifield"></div>'+"<br>" +pc +' <div><input type="inputfield" name="inputfield" class="ifield"></div>')

"use strict";
const owner: string =Object.freeze({"firstn":"Max", "lastn":"Mustermann"});
$("#footer").append("<br>"+'<div class="text-center"> A company of: '+ owner.firstn+" "+owner.lastn +"</div>")


//buttons for ranking
var plusBtns = document.getElementsByClassName("plus");
var minusBtns = document.getElementsByClassName("minus");

for(let i = 0 ; i < plusBtns.length ; i++){
	plusBtns[i].addEventListener("click",function(){
		rating[i]++
		console.log("inside"+rating[i])
		//=rating[i]

		
	})
	minusBtns[i].addEventListener("click",function(){
		rating[i]--
		console.log("inside"+rating[i])
		//=rating[i]
	})
}
	

console.log($("#button1").value)
