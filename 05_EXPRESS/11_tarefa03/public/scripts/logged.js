console.log("olá")


fetch('/authenticating')
  .then(response => console.log(response.json()))
  .then(data => {
    // Os dados recebidos do backend estão na variável 'data'
    console.log(data);
  })
  .catch(error => console.error('Erro:', error));