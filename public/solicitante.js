function mostrarHoraMaquina() {
  var fecha = new Date();
  let date;
  date = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
  document.getElementById('Hora_Maquina').innerHTML = date;
}

function mostrarHoraServidor() {
  fetch('http://localhost:3000/server')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      //console.log(myJson);
      var fecha = desJSON(myJson); 
      document.getElementById('Hora_Servidor').innerHTML = fecha;
    });
}

function desJSON(jsonObj) {
  let date = "";
  let hour = jsonObj.Hour;
  let minutes = jsonObj.Minutes;
  let seconds = jsonObj.Seconds;
  date = String(hour) + ":" + String(minutes) + ":" + String(seconds);
  return date;
}

setInterval(mostrarHoraMaquina, 1000)
setInterval(mostrarHoraServidor, 1000)