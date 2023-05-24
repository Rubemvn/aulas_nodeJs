import url from 'url';
import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    if(!name){
        res.end(
            '<h1>Preencha seu Nome</h1><form method="GET"><input type="text" name="name"><input type="submit"></form>')
    }else{
        res.end(`<h1>Seja bem-vindo ${name}</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})