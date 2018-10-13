function forLoop(array) {
  
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
      }

    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


function whileLoop(n) {
  while(n > 0) {
    console.log(--n);
  }
  return "done"
}


function doWhileLoop(array) {
  var i = 0;

  function incrementVariable() {
		i = i + 1;
	}
  do {
<<<<<<< HEAD
    array = array.slice(1);
    incrementVariable;
  }
  while (array.length > 0 && incrementVariable())
  return array
}
=======
    array.length > 0 &&
    incrementVariable()
  }
  while (i < 25)
}
>>>>>>> 26367e9ea3559a08f65c937c25bfa1b875ec866e
