function avg(a, b) {
  return (a + b) / 2;
}

console.log(avg(4, 11));

let a = [1,2,3,4,5];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

function iter(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

iter(a);

let i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}