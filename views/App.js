const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");
const r =  document.querySelector("#r");
const p = document.querySelector("#p")
var b11 = null
var b22 = null
var b33 = null
var b44 = null
var b55 = null
var b66 = null
var b77 = null
var b88 = null
var b99 = null


var click = true
b1.addEventListener('click',function(){
    if(click === true){
        b1.innerHTML = "x";
        b11 = 3
     click = false;
    }
    
    else{
        b1.innerHTML = "0";  
        b11 = 2
         click = true;
    
    }
    b1.disabled = true
        check();
})
b2.addEventListener('click',function(){
    if(click === true){
        b2.innerHTML = "x";
        b22 = 3
     click = false;
    
    }
    else{
        b2.innerHTML = "0"; 
        b22 = 2 
         click = true;
     
    }
    b2.disabled = true
    check()
})
b3.addEventListener('click',function(){
    if(click === true){
        b3.innerHTML = "x";
        b33 = 3
        click = false;
    
    }
    else{
        b3.innerHTML = "0";  
        b33 = 2
         click = true;
        
    }
    check()
    b3.disabled = true
})
b4.addEventListener('click',function(){
    if(click === true){
        b4.innerHTML = "x";
        b44 = 3
     click = false;
    
    }
    else{
        b4.innerHTML = "0";  
        b44 = 2
         click = true;
    
    }
    check()
    b4.disabled = true
})
b5.addEventListener('click',function(){
    if(click === true){
        b5.innerHTML = "x";
        b55 = 3
     click = false;
    
    }
    else{
        b5.innerHTML = "0";  
        b55 = 2
         click = true;
    }
    check()
    b5.disabled = true
})
b6.addEventListener('click',function(){
    if(click === true){
        b6.innerHTML = "x";
        b66 = 3
     click = false;
    
    }
    else{
        b6.innerHTML = "0";  
        b66 = 2
         click = true;
    
    }
    check()
    b6.disabled = true
})
b7.addEventListener('click',function(){
    if(click === true){
        b7.innerHTML = "x";
        b77 = 3
     click = false;
    
    }
    else{
        b7.innerHTML = "0";  
        b77 = 2
         click = true;
        
    }
    check()
    b7.disabled = true
})
b8.addEventListener('click',function(){
    if(click === true){
        b8.innerHTML = "x";
        b88 = 3
     click = false;
    }
    
    else{
        b8.innerHTML = "0";  
        b88 = 2
         click = true;
    
    }
    b8.disabled = true
        check();
})
b9.addEventListener('click',function(){
    if(click === true){
        b9.innerHTML = "x";
        b99 = 3
     click = false;
    
    }
    else{
        b9.innerHTML = "0";  
        b99 = 2
         click = true;
    
    }
    check()
    b9.disabled = true
})


r.addEventListener('click',function(){
 b11 = null
 b22 = null
 b33 = null
 b44 = null
 b55 = null
 b66 = null
 b77 = null
 b88 = null
 b99 = null

    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    b4.innerHTML = ""
    b5.innerHTML = ""
    b6.innerHTML = ""
    b7.innerHTML = ""
    b8.innerHTML = ""
    b9.innerHTML = ""
    p.innerText  = ""
     click = true
     b1.disabled = false
     b2.disabled = false
     b3.disabled = false
     b4.disabled = false
     b5.disabled = false
     b6.disabled = false
     b7.disabled = false
     b8.disabled = false
     b9.disabled = false
})
function check(){
if(b11*b22*b33===27 || b11*b55*b99===27 || b11*b44*b77===27 || b33*b66*b99===27 || b77*b88*b99===27 || b22*b55*b88===27){
    p.innerText= "Player 1 Win"} 
    if(b11*b22*b33===8 || b11*b55*b99===8 || b11*b44*b77===8 || b33*b66*b99===8 || b77*b88*b99===8 || b22*b55*b88===8){
        p.innerText= "Player 2 Win"
    console.log("hello")}  
}
