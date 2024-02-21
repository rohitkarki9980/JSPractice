let a = 5
let b= 8
console.log(a+b); //13

console.log(a*b); //40
console.log(a/b); //0.625

console.log(a**b);//390625

console.log(a%b);//5

console.log("a" + a +b + "b")//a58b

//2.Relational operator
console.log(a>b) //false
console.log(a<b) //true
console.log(a<=b) //true
console.log(a>=b) //False


//3.Comparison Operator
let c= 10
let d="10"
console.log(c!=d) // false
console.log(c!==d) //true
console.log(c==d) //true
console.log(c===d) //false

//3.Logical Operator
// And && 
// Or || 
// Not !
let e = 10
let f = 11
console.log(e>f && f>d)
console.log(e>f || f>d);
console.log(!(e>f))

//4.Ternary Operator
let isAdmin=false;
let isUser =true;

{ 
    isAdmin ==true ? console.log('HI admin')
    :isUser==true? console.log("HI User")
    :console.log("Login first")

}

//5. Assignment Operator
// = , +=, -= , *= , /=
let g= 80;
console.log("g =" + g)//g =80
g+=10;
console.log("g =" + g) //g =90
g-=20;
console.log("g =" + g) //g =70
g*=10;
console.log("g =" + g) //g =700
g/=70;
console.log("g =" + g) //g =10
g**=10;
console.log("g =" + g) //g =10000000000

//6.Increament Operator
//++ , --
// pre same state ++a
// post different state a++ a+1
let add =10;
console.log(add++);10
console.log(add);11
add=10
console.log(++add);11
console.log(add);11

//7 type of 
let df;
console.log(typeof(df)) //undefined

//8. concatenation operator
//+ adding two string

//9. void to clear the string 
