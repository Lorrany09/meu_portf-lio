let modoEscuro = false;

function corDaTela() {
    const botao = document.getElementById('botao');
    const link = document.querySelector("link");
    
    if(!modoEscuro){
        botao.textContent = "Modo escuro";
        link.href = "modoEscuro.css";
        modoEscuro = true;
    } else {
        botao.textContent = "Modo claro";
        link.href = "index.css";
        modoEscuro = false;
    }
}

const linguagens = ["HTML", "CSS", "JavaScript", "Java", "MySQL"];

function fazendoCards() {
    const div = document.getElementById('linguagens');

    linguagens.forEach((nome) => {
        const card = document.createElement("div");
        
        card.textContent = nome;
        card.classList.add("card");
        
        div.appendChild(card);
    });
}

fazendoCards();