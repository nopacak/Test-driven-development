function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
    form.display.value = Math.cos(parseFloat(form.display.value) || NaN);
}

function sin(form) {
    form.display.value = Math.sin(parseFloat(form.display.value) || NaN);
}

function tan(form) {
    form.display.value = Math.tan(parseFloat(form.display.value) || NaN);
}

function sqrt(form) {
    form.display.value = Math.sqrt(parseFloat(form.display.value) || NaN);
}

function ln(form) {
    form.display.value = Math.log(parseFloat(form.display.value) || NaN);
}

function exp(form) {
    form.display.value = Math.exp(parseFloat(form.display.value) || NaN);
}

function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1);
}

var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }


function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

// Export the functions
module.exports = {
	addChar,
	cos,
	sin,
	tan,
	sqrt,
	ln,
	exp,
	deleteChar,
	percent,
	changeSign,
	compute,
	square,
	checkNum
};