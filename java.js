console.log ( document.getElementById("nome").innerHTML)

document.getElementById("nome").innerHTML = "Rafa";



function imprimir(){
    let x = document.getElementById("i1").value;
    console.log(x);
    document.getElementById("s1").innerHTML = x;
}