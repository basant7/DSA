let n = 3;

function rec1(n) {
  if (n === 0) return;
  console.log("n1 is ", n);
  rec1(n - 1);
  console.log("n2 is ", n);
}
rec1(n);

function rec2(n){
    if(n===0)return;
    rec2(n-1);
    console.log(n);
    rec2(n-1);
}
rec2(n)
