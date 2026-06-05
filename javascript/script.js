// var a=10;
// let b=20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str="kanishka";
// var undefine;
// var Null=null;
// var boolen= true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof Null);
// console.log(typeof boolen);

// var bigInt = 123n;
// var symbol =Symbol('li');

// console.log(typeof bigInt)
// console.log(typeof symbol)

// var arr =[10,20,30,40];
// console.log(typeof arr,arr);
// var obj ={
//     name:"kanishka",
//     dept:["AIDS","CT"]

// }
// console.log(typeof obj,obj)

// var a=10;
// var b="deep";

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a%b)
// console.log(a/b)

// true  true true true
// false true false true
// true  false false true
// false false false false

// var a=true;
// var b =false;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a)

//relational operator (>,<,<=,>=,==,!=)

// a=10;
// b="10";

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a!=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a===b);
 
//assingment operator (=,+=,-=,%=,*=,**=)

// a=10;
// b=20;

// a=a+b;
// a+=b;

// console.log(a);
// a-=b;
// console.log(a);

// unary operator (++,--,)


// console.log(a++);
// console.log(++a);

// var a=10;

// console.log(a--);
// console.log(--a);


//conditional statements (if,elif)
///...


// //var a=10;
// var b=20;
// if(true){
//     console.log(a);
//     let b=30;
//     console.log(b);

// }
// console.log(a);
// console.log(b);

 //var (mark=90);
 //if(mark>=90){
 //   console.log(`O grade`);
// }
 //else if (marke>7=){
 //   console.log(`A grade`);
 //}
 //else if(mark>=35){
 //   console.log(`PASS`);
 //}
// else{
  //  console.log(`FAIL`;)
 //}

 //var a=10;
 // condition? true statement: false statement
 // var result = a%2===0? "even" : "odd";
 //console.log(result)

 //mark=40;
 //var result =( mark>=90)? "O grade":
 ///            ( mark>=70)? "A grade":
 //            ( mark>=35)? "PASS" :
 //            "FAIL";
//console.log(result);

// var day=2;
// switch(day){
//     case 1:{
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }case 5:{
//         console.log("thursday");
//         break;
//     }case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//     //     console.llog("invalid input");
//     // }
// }

//looping statements
//1 time 11 times 10 times

// for (var i=1;i<=10;i++){
//     console.log(i);
// }

// var val =10246;
// var count =0;
// while (val >0){
//     count++;
//     val= Math.floor(val/10);
// }
// console.log(count);

// do{
//     console.log("do...while")
// }while(false);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }
// 

// function add(a=5,b=6){
//     console.log(a+b);
// }

// add();//hoisting

// var demo=(a,b) => {
//     console.log(a+b);

// }
// demo(10,20);
// demo();
// // demo(10);

// var arr =[10,20,30];
// var arr2 =[...arr,40,50];
// console.log(arr);
// console.log(arr2);

//destructing operator
// var [m1,m2,m3,m4,m5]=[90,99,98,97,100];
// console.log(m1,m2,m3,m4,m5);

var {name,mobile,dept,email,isactive}={
    name:"kanishka",
    mobile:8144007202,
    dept:"AI&D",
    email:"kanishkayoogamorthy@gmail.com",
    isactive:"true"
}
console.log(name,mobile,dept,email,isactive)

var arr=[10,20,30,40,50];

for(let index in arr){
    console.log(index)
}

for (let value of arr){
    console.log(value)
}

var obj={
    name:"kanishka",
    mobile:8144007202,
    dept:"AI&D",
}
for(let key in obj){
    console.log(key,obj[key])
}

var arr =[1,2,3,4,5];

var result = arr.map((val)=>(val*2));
console.log(result)
console.log(arr)

var even =arr.filter((val)=>val%2===0);
console.log(even)

var sum = arr.reduce((add,val)=>(add+val),0);
console.log(sum)

var username={
    name:"kanishka",
    dept:"AIDS",
    skills:{
        programmin:["java","javascript","c"]
        
    }

}
var user={
    ...username,
    password:123456
}

console.log(user);