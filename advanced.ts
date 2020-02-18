
var food: Array<string> = ["Pizza", "Pasta", "Fish"]
var prices: number[]=[10,15,20]
var rating: number[]=[0,0,0]
var pictures: string[]=["https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg","https://ais.kochbar.de/kbrezept/306041_1010094/620x465/pasta-aurora-rezept-bild-nr-2.jpg","https://img.etimg.com/thumb/msid-68495044,width-643,imgsize-1335371,resizemode-4/fish.jpg"]

/*classic way:*/

for (let i=0; i<food.length; i++){	

	$(".Maintext").append('<div class="">'+ food[i]+"<br> price: "+prices[i]+"<br>" +'<div class="rating" id="rating[i]" value="rating[i]">'+rating[i] 
		+"</div> stars"+'<div><button class="plus"> + </button> <button class="minus" id="button"+i> - </button></div>'
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

//buttons for ranking
var plusBtns: number = document.getElementsByClassName("plus");
var minusBtns: number = document.getElementsByClassName("minus");

for(let i = 0 ; i < plusBtns.length ; i++){
	plusBtns[i].addEventListener("click",function(){
		addMore(rating[i]);
	})
	minusBtns[i].addEventListener("click",function(){
		minusAction(rating[i]);
	})
}
function addMore(a){
	
	a.value++
	console.log(a.value)
}

function minusAction(a){
	a.value--
	console.log(a.value)
}	

console.log($("#button1").value)