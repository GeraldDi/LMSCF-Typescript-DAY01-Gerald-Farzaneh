/*var funcs = [];
for (var b = 1; b < 11; b+=1) {
    var y = b;
       
}
    for (var i = 1; i < 11; i += 1) {
       let z = i;
       funcs.push(function() {
           console.log(y+"*"+z+"="+y*z);
       })
    }
funcs.forEach(function(func) {
   func()
});*/
var arrayn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arrayn.length; i++) {
    for (var s = 0; s < arrayn.length; s++) {
        var sum = arrayn[i] * arrayn[s];
        document.writeln(arrayn[s] + "*" + arrayn[i] + "=" + sum + "<br>");
    }
}
