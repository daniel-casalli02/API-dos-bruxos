import express from "express";
import dados from "./src/data/dados.js";

const { casas, bruxos, varinhas, pocoes, animais} = dados;
const serverPort = 3000;
const app = express();

app.use(express.json());

// Rota principal - Hogwarts
app.get('/', (req, res) => {
  res.send(`
    <div style="
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Bem-vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
        🏰 Escola de Magia e Bruxaria
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "É preciso muito mais que coragem para enfrentar nossos inimigos, 
        mas muito mais ainda para enfrentar nossos amigos."
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

//Rota dos bruxos
app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});

app.get("/bruxos/:id", (req, res) =>{
  let id = req.params.id;
  id = parseInt(id);
  const bruxo = bruxos.find(b => b.id === id);
  console.log(bruxo);

  if(bruxo){
    res.status(200).json(bruxo)
  }else{
    res.status(404).json({
    mensagem: "Bruxo não encontrado com esse id por favor pesquise um nome existente!"});
  }
});

app.get("/bruxos/vivos/nao", (req, res)=>{
  const resultado = bruxos.filter((b) => !b.status);

  if(resultado){
    res.status(200).json(resultado)
  }else{
    res.status(404).json({ erro: "Nenhum bruxo morto foi encontrado!"
    })
  }
});

app.get("/animais", (req, res) =>{
  if(animais.length > 0){
    res.status(200).json(animais);
  }else{
    res.status(404).json({
      mensagem:"Nenhum animais encontrado"
    })
  }
});
app.get("/pocoes", (req, res) =>{
  if(pocoes.length > 0){
    res.status(200).json(pocoes);
  }else{
    res.status(404).json({
      mensagem:"Nenhuma poção encontrada"
    })
  }
});
app.get("/varinhas", (req, res) =>{
  if(varinhas.length > 0){
    res.status(200).json(varinhas);
  }else{
    res.status(404).json({
      mensagem:"Nenhuma varinha encontrada"
    })
  }
});
app.get("/casas", (req, res) =>{
  if(casas.length > 0){
    res.status(200).json(casas);
  }else{
    res.status(404).json({
      mensagem:"Nenhuma casa encontrada"
    })
  }
});

app.get("/animais/:id", (req, res) =>{
  let id = parseInt(req.params.id);
  const anima = animais.find(a => a.id === id);

  if(anima){
    res.status(200).json(anima)
  }else{
    res.status(404).json({
    mensagem: "Animal não encontrado com esse id "});
  }
});
app.get("/casas/:id", (req, res) =>{
  let id = parseInt(req.params.id);
  const casa = casas.find(c => c.id === id);

  if(casa){
    res.status(200).json(casa)
  }else{
    res.status(404).json({
    mensagem: "Casa não encontrada com esse id "});
  }
});
app.get("/pocoes/:id", (req, res) =>{
  let id = parseInt(req.params.id);
  const pocao = pocoes.find(p => p.id === id);

  if(pocao){
    res.status(200).json(pocao)
  }else{
    res.status(404).json({
    mensagem: "Poção não encontrada com esse id "});
  }
});
app.get("/varinhas/:id", (req, res) =>{
  let id = parseInt(req.params.id);
  const vara = varinhas.find(v => v.id === id);

  if(vara){
    res.status(200).json(vara)
  }else{
    res.status(404).json({
    mensagem: "Varinha não encontrada com esse id "});
  }
});
// Rota das casas
app.get('/casas', (req, res) => {
  res.json({
    casas: [
      { nome: "Grifinória", animal: "🦁", fundador: "Godrico Gryffindor" },
      { nome: "Sonserina", animal: "🐍", fundador: "Salazar Slytherin" },
      { nome: "Corvinal", animal: "🦅", fundador: "Rowena Ravenclaw" },
      { nome: "Lufa-lufa", animal: "🦡", fundador: "Helga Hufflepuff" }
    ]
  });
});

// Iniciar servidor
app.listen(serverPort, () => {
  console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
  console.log("Bem vindo ao Mundo de Harry Potter!");
});