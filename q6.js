let count = 0
var counter = {
    add: (() => {
        return (() => {
            return count += 1;
        })()
    })(),
    reset: (() => {
        return (() => {
            return count = 0;
        })()
    })()
}

console.log(counter.add);
console.log(counter.reset);

