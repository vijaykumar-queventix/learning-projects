// generators in javascript

function* numGenerator(){
    let a =10;
    let b =3;
    
    yield(a+ b);
    yield (a-b);
    yield (a*b);
    yield (a/b);
    yield(a%b);
    console.log('Program Ended');
    
}

const gen = numGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function * powerSeries(number, power) {
    let base = number;
    while(true) {
      yield Math.pow(base, power);
      base++;
      //console.log(base);
    }
  }

console.log(powerSeries(5,2).next());