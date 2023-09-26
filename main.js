function buscarCEP() {

  // entrada
  var entrada = document.getElementById('buscar_cep').value;

  // saída
  var cep = document.getElementById('cep');
  var logradouro = document.getElementById('logradouro');
  var bairro = document.getElementById('bairro');
  var cidade = document.getElementById('cidade');
  var estado = document.getElementById('estado');

  // cria objeto xhr
  var xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  // envia requisição
  xhr.open("GET",
    "https://viacep.com.br/ws/" + entrada + "/json/");
  xhr.send();

  // verifia se o estado da conexão mudou
  xhr.onreadystatechange = () => {

    if (xhr.readyState == 4 && xhr.status == 200) {

      // mostra resultado na tela
      console.log(xhr.response);

      // grava valores
      cep.innerText = xhr.response.cep;
      logradouro.innerText = xhr.response.logradouro;
      bairro.innerText = xhr.response.bairro;
      cidade.innerText = xhr.response.localidade;
      estado.innerText = xhr.response.uf;
    }
  }

}
