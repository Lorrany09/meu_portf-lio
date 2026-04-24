let modoEscuro = false;

function corDaTela() {
    const botao = document.getElementById('botao');
    const link = document.querySelector("link");
    
    if(!modoEscuro){
        botao.textContent = "Modo escuro";
        document.documentElement.style.setProperty("--azulUm", "rgb(20, 20, 104)");
        document.documentElement.style.setProperty("--azulDois", "rgb(18, 18, 96)");
        document.documentElement.style.setProperty("--azulTres", "rgb(15, 15, 75)");
        document.documentElement.style.setProperty("--azulQuatro", "rgb(5, 5, 28)");
        document.documentElement.style.setProperty("--amarelo", "rgb(203, 250, 133)");
        document.documentElement.style.setProperty("--amareloTransparente", "#121212");
        document.documentElement.style.setProperty("--cinzaTransparente", "rgba(30, 30, 40, 0.416)");
        document.documentElement.style.setProperty("--corDoTexto", "white");
        document.documentElement.style.setProperty("--corDoTextoSecundaria", "black");
        modoEscuro = true;
    } else {
        botao.textContent = "Modo claro";
        document.documentElement.style.setProperty("--azulUm", "rgb(143, 216, 253)");
        document.documentElement.style.setProperty("--azulDois", "rgb(84, 215, 255)");
        document.documentElement.style.setProperty("--azulTres", "rgb(37, 190, 237)");
        document.documentElement.style.setProperty("--azulQuatro", "rgb(16, 140, 212)");
        document.documentElement.style.setProperty("--amarelo", "rgb(250, 246, 133)");
        document.documentElement.style.setProperty("--amareloTransparente", "rgba(250, 246, 133, 0.726)");
        document.documentElement.style.setProperty("--cinzaTransparente", "rgba(226, 226, 226, 0.416)");
        document.documentElement.style.setProperty("--corDoTexto", "black");
        document.documentElement.style.setProperty("--corDoTextoSecundaria", "black");
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