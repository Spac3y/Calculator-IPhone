
function selector( elementID ) {
	let element = document.getElementById(elementID);
	return element
}

function listener( elementID ) {
	let element = selector(elementID)
	element.addEventListener("click", console.log(element.textContent))
}

const numbers = {
	"one" : selector("one"),
	"two": selector("two"),
	"three": selector("three"),
	"four": selector("four"),
	"five": selector("five"),
	"six": selector("six"),
	"seven": selector("seven"),
	"eight": selector("eight"),
	"zero": selector("zero"),
	"nine": selector("nine"),
}

const operations = {
	"plus": selector("plus"),
	"minus": selector("minus"),
	"multiply": selector("multiply"),
	"divide": selector("divide"),
	"divideby100": selector("divideby100"),
	"plusminus": selector("plusminus"),
	"equal": selector("equal")
}

const special = {
	"clear": selector("clear"),
	"dot" :selector("dot")
}

