let i;
for(i=0; i<=10; i++) {
    console.log(i)
}

console.log('Done, and what\'s the ultimate i?', i)

for(i=0; i<=10; ++i) {
    console.log(i)
}
console.log('Done, and what\'s the ultimate i?', i)

let N=10;
let k=0;
for(let i=0; i<N; i++) {
    for(let j=0; j<i; j++) {
        k++;
    }
}
console.log(k)

