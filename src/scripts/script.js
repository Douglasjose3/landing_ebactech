AOS.init();

//criando a data do evento
const dataDoEvento = new Date("Feb 12, 2024 19:00:00"); //variável apontando para a data do evento
const timeStampDoEvento = dataDoEvento.getTime(); //variável que recupera a data no futuro

//criando a distância até a data do evento
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual; //timeStampDoEveneto (data do evento) - timeStampAtual (distância até a data do evento)

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `começa em ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `O evento expirou!`;
    }
}, 1000);