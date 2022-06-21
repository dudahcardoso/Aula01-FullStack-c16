const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(express.json());//a aplicação reconheça o formato JSON nas nossas requisições
app.use(cors());

const paletas = [
    {
        id: 1,
        sabor: 'Açaí com leite condensado',
        descricao: 'Açaí muito gostoso',
        foto: 'assets/images/acai-com-leite-condensado.png',
        preco: 10.0
    },
    {
        id: 2,
        sabor: 'Banana com Nutella',
        descricao:
          'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/banana-com-nutella.png',
        preco: 10.0,
      },
      {
        id: 3,
        sabor: 'Chocolate Belga',
        descricao:
          'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
        foto: 'assets/images/chocolate-belga.png',
        preco: 7.0,
      },
]

app.get('/', (req,res) => {
    res.send('Seja muito bem vindo modulo 3')
});

app.get('/paletas/todas-paletas', (req, res) => {
    res.send(paletas)
});

app.get('/paletas/paleta/:id', (req,res) =>{
  const idPaleta = req.params.id;
  const paletaEscolhida = paletas.find((paleta) => paleta.id == idPaleta);
  res.send(paletaEscolhida);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
