let s1 = document.getElementById("shape1");
s1.addEventListener("mouseenter", function(){
    
    let r =Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`
})

s1.addEventListener("mouseleave", function(){
    s1.innerHTML = `<h1>1</h1>`
})

let s2 = document.getElementById("shape2");
let clr="green";
s2.addEventListener("mouseenter", function(){
    if(clr=="green"){
        s2.style.background="green";
        clr="red";
    }
    else {
        s2.style.background="red";
        clr="green"
    }
})

s2.addEventListener("mouseleave", function(){
    s2.style.background="white";
})


let s3 = document.getElementById("shape3");
s3.addEventListener("mouseenter", function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    s3.style.background=`rgb(${a}, ${b}, ${c})`;
})

s3.addEventListener("mouseleave", function(){
    s3.style.background="white";
})


let s4 = document.getElementById("shape4");
s4.addEventListener("click", function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    s1.style.background=`rgb(${a}, ${b}, ${c})`;
    s2.style.background=`rgb(${b}, ${c}, ${a})`;
    s3.style.background=`rgb(${c}, ${a}, ${b})`;

})

s4.addEventListener("mouseleave", function(){

})