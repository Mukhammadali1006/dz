var son=+prompt("sonni kiriting")
if(son%2==0){
    alert("son juft")
}
else{
    alert("son toq")
}
let son1=+prompt("sonni kiriting")
let daraja=+prompt("darajani kiriting")
let box=1
for ( let i= 0; i < daraja; i=i+1 ) {
 box*=son1
}
console.log(box);