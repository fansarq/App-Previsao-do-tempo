const key = ('af9cf0bc75ed547cc57e4625d1a986da');

function dadostempo(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " ºC";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML ="Umidade: " + dados.main.humidity + "%";
    document.querySelector(".icone-tempo").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarcidade(localiza){

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${localiza}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dadostempo(dados)
    console.log(dados)

}

function busca(){
    const localiza = document.getElementById("local").value;

    buscarcidade(localiza)
}


