let st = document.getElementById("start");
let sp = document.getElementById("stop");
let re = document.getElementById("result");
let tp = document.getElementById("Top")

function proData(){
    let num = parseInt(st.value);
    let max = parseInt(sp.value);
    re.innerHTML ="";
    top.innerHTML = "";
    
    for(let a = num;a <=max; a++){  
        for(let i = 1; i <= 12;i++){
            
            re.innerHTML = re.innerHTML+num+" * "+i+" = "+(num*i)+"<br>";
        }
        num++;        
        re.innerHTML = re.innerHTML+"<br>";
    }
       
}

function Reset(){
    st.value = "";
    sp.value = "";
    re.innerHTML = "";
}