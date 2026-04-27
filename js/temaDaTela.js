function mudarModo(){
    const botao = document.getElementById('botao');

    botao.onclick = function() {
        let temaAtual = localStorage.getItem('tema');
        
        if(temaAtual === "dark"){
            modoLight();
        } else {
            modoDark();
        }
    }
    
    let temaInicial = localStorage.getItem('tema');
    if(temaInicial === "dark"){
        modoDark();
    } else {
        modoLight();
    }
}

mudarModo();

function modoDark() {
    const botao = document.getElementById('botao');

    botao.textContent = "Modo claro";
    document.documentElement.style.setProperty("--azulUm", "rgb(20, 20, 104)");
    document.documentElement.style.setProperty("--azulDois", "rgb(18, 18, 96)");
    document.documentElement.style.setProperty("--azulTres", "rgb(15, 15, 75)");
    document.documentElement.style.setProperty("--azulQuatro", "rgb(5, 5, 28)");
    document.documentElement.style.setProperty("--amarelo", "rgb(203, 250, 133)");
    document.documentElement.style.setProperty("--amareloTransparente", "#121212");
    document.documentElement.style.setProperty("--cinzaTransparente", "rgba(30, 30, 40, 0.416)");
    document.documentElement.style.setProperty("--corDoTexto", "white");
    document.documentElement.style.setProperty("--corDoTextoSecundaria", "black");
    botao.style.width = "7rem";
    localStorage.setItem('tema', 'dark');
}

function modoLight() {
    const botao = document.getElementById('botao');
    
    botao.textContent = "Modo escuro";
    document.documentElement.style.setProperty("--azulUm", "rgb(143, 216, 253)");
    document.documentElement.style.setProperty("--azulDois", "rgb(84, 215, 255)");
    document.documentElement.style.setProperty("--azulTres", "rgb(37, 190, 237)");
    document.documentElement.style.setProperty("--azulQuatro", "rgb(16, 140, 212)");
    document.documentElement.style.setProperty("--amarelo", "rgb(250, 246, 133)");
    document.documentElement.style.setProperty("--amareloTransparente", "rgba(250, 246, 133, 0.726)");
    document.documentElement.style.setProperty("--cinzaTransparente", "rgba(226, 226, 226, 0.416)");
    document.documentElement.style.setProperty("--corDoTexto", "black");
    document.documentElement.style.setProperty("--corDoTextoSecundaria", "black");
    botao.style.width = "8rem";
    localStorage.setItem('tema', 'light');
}