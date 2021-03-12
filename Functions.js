//-------change color----
function changeColor(){
   let el=document.getElementById("heading")
  console.log(el)
  //styles
  el.style.color="red" 
   el.style.backgroundColor="blue" 
}




// -------------to print entire lement property

// let el=document.getElementById("heading")
// console.log(el);

//to print inner element
// let el1=document.getElementById("heading")
// console.log(el1.innerHTML);


// ------------------------------






// ----------------------
//get element
// -----------------------------
function readData()
{   
    let inp1 = document.getElementById("inp");
    
    let content=inp1.value;
    let h1el=document.getElementById("heading")
    h1el.innerHTML=content;
    //get input element
    //read data from inpput element
    //print to console
}


// function Sum()
// {
//     let inp1 = document.getElementById(inp1);
//     let inp2 = document.getElementById(inp2);
//     let sum = (+inp1)+(+inp2);
//     let sumResult=document.getElementById("heading")
//     sumResult.innerHTML=sum;
// }

// function Diff()
// {
//     let inpa = document.getElementById(inp1);
//     let inpb = document.getElementById(inp2);
//     let diff = (+inp1)-(+inp2);
//     let DiffResult=document.getElementById("heading")
//     DiffResult.innerHTML=diff;
// }

// ---------------------

function findSum(){
    //read data from input fields
    let fn = document.getElementById("fn").value;
    let sn = document.getElementById("sn").value;

    let sum = (+fn)+(+sn)
    //print result to h1 element
    let h1el = document.getElementById("result")
    h1el.style.color="green"
    h1el.innerHTML=sum;

    
}



function findDiff(){
    //read data from input fields
    let fn = document.getElementById("fn").value;
    let sn = document.getElementById("sn").value;

    let diff = (+fn)-(+sn)
    //print result to h1 element
    let h1el = document.getElementById("result")
    h1el.style.color="green"
    h1el.innerHTML=diff;

    
}



// ------------------creating elements in js--------
let h1el = document.createElement("h1")
console.log(h1el)
    
    //assign content to it
    h1el.innerHTML="hii"

    //ad it to DOM
    document.body.appendChild(h1el)




// function increment(){
//     let h1e1 = document.getElementById("result")
// }



