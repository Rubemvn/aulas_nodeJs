

fetch('/dados')
  .then(response => response.json())
  .then(data => {
    // Os dados recebidos do backend estão na variável 'data'
    console.log(data);
    const data = document.get
  })
  .catch(error => console.error('Erro:', error));