const makeAdder = (adder) => {
    let counter = 0;
    return () => {
        counter += adder;
        console.log(counter)
    }
}

let add5 = makeAdder(5);
add5(); add5(); add5();

let add7 = makeAdder(7);
add7(); add7(); add7();