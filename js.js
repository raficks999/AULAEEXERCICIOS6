function ex1(){
    let nome = document.getElementById("ex1nome").value;
    let idade = document.getElementById("ex1idade").value;
    let ano_atual = 2026;
    let ano_nascimento = ano_atual - idade;

    let resposta = "Olá" + nome + "Seu ano de nascimento é" + ano_nascimento;
    document.getElementById("r1").innerHTML = resposta;
}