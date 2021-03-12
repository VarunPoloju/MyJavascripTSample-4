// //operations of an object
// /*
// adding new properties
//     obj.new-key=new-value;

// deleeting exixsting proertis    
// delete obj.key;


// */
// let obj = {name:"varun"};//empty array
// //add propertirs
// obj.sno=100;//here sno is key we are adding it
// obj.sname="varun"
// console.log(obj);


// //deleting
// delete obj.sno;
// console.log(obj);


// //update
// obj.name="tarun";
// console.log(obj);


// // ----------cretaing copy of objects-------------------------
// //for primitives
// let a = 10;
// let b= a;
// console.log("a is",a)
// console.log("b is",b)


// //for non primitives
// //it will ot create new copy it creates only reference of it
// let obj1={x=100,y=200};
// let copyObj = Object.assign({},obj1);


// console.log("obj",obj1);
// console.log("copyObj is",copyObj);

// //now update it

// obj1.x=1234;
// console.log("obj",obj1);
// console.log("copyObj is",copyObj);


// ----------------------------------
//  let obj = {a:10,b:20,c:30}

//  for(let v in Object.values(obj))
//  {
//          console.log(v)
//  }


// -------------------------
//spread parameter
// function test(b,...a){
//     console.log(a);
//     console.log(b);
    
// }

// test(1,2)
// ------------
// let arr1= [10,20,30];
// let CopyArr1=[...arr1]
// console.log(CopyArr1)

// ---------------
//merge using spread operator
// let obj1 = {a:10,b:20};
// let obj2 = {c:30,d:40};
// let res = {...obj1,...obj2};
// console.log(res);


// ----------------------------

//destructurig
// let numbers = [10,20,30];
// let [a,b,c]=numbers;
// console.log(a)
// console.log(b)
// console.log(c)

// -----------------map


































