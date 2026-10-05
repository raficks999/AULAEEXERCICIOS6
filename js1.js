function ex2(){
    let x = document.getElementById("i1_ex2").value;
    
    let resposta = "";
    for(let i = 0; 1 <= x; i++){
        resposta += i + " ";
    }
    document.getElementById("s1").innerHTML = resposta;
}