// You Do

/* Create a function with the name "alertMe" that when it is run, it alerts "Functions are awesome!". */

function alertMe() {
    alert('Functions are awesome!');
}

/* Create a function with the name "sleepMeasurer" that evaluates how much someone sleeps and tell them whether it is enough or not.
If they sleep less than 6 hours per night, tell them 'not enough'. If the sleep 6 to 9 hours, tell them 'enough'. If they
sleep more than 9 hours per night, tell them 'master sleeper' */

function sleepMeasurer(hours) {
  if(hours < 6) return 'not enough';
  if(hours >= 6 && hours < 10) return 'enough';
  if(hours >= 9) return 'master sleeper';
}


/* Create a function with the name "isDivisable" that checks if the first argument is divisible by the second argument. If they are, return "true", but if 
they aren't, return false */

function isDivisible(x, y) {
  if (x%y === 0) {
    return true;
  } else {
    return false;
  }
}