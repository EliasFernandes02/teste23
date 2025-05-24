const loja = [
  {
    id: 1,
    nome: "Loja Sol",
    descricao: "Especializada em roupas leves e moda praia.",
    endereco: "Rua das Flores, 123 - Centro",
    lugar: "Salvador - BA"
  },
  {
    id: 2,
    nome: "Mundo Tech",
    descricao: "Tecnologia de ponta em um só lugar.",
    endereco: "Av. Paulista, 456 - Bela Vista",
    lugar: "São Paulo - SP"
  },
  {
    id: 3,
    nome: "Casa & Conforto",
    descricao: "Soluções em decoração e conforto residencial.",
    endereco: "Rua das Palmeiras, 78 - Jardim Botânico",
    lugar: "Curitiba - PR"
  },
  {
    id: 4,
    nome: "Beleza Viva",
    descricao: "Cosméticos naturais e produtos de bem-estar.",
    endereco: "Av. Atlântica, 1001 - Copacabana",
    lugar: "Rio de Janeiro - RJ"
  },
  {
    id: 5,
    nome: "PetMania",
    descricao: "Loja completa para o seu animal de estimação.",
    endereco: "Rua dos Bichos, 12 - Centro",
    lugar: "Belo Horizonte - MG"
  },
  {
    id: 6,
    nome: "Esportiva Max",
    descricao: "Moda e acessórios esportivos.",
    endereco: "Av. das Olimpíadas, 222 - Vila Olímpia",
    lugar: "São Paulo - SP"
  },
  {
    id: 7,
    nome: "Leitura Livre",
    descricao: "Livraria com acervo variado de títulos e autores.",
    endereco: "Rua dos Livros, 90 - Centro",
    lugar: "Recife - PE"
  },
  {
    id: 8,
    nome: "Kids Brinquedos",
    descricao: "Brinquedos educativos e criativos.",
    endereco: "Av. Brincar, 15 - Parque Infantil",
    lugar: "Porto Alegre - RS"
  },
  {
    id: 9,
    nome: "Mega Fashion",
    descricao: "Loja de roupas e acessórios modernos.",
    endereco: "Rua da Moda, 300 - Centro",
    lugar: "Fortaleza - CE"
  },
  {
    id: 10,
    nome: "Gamer House",
    descricao: "Tudo para o universo gamer.",
    endereco: "Av. dos Games, 101 - Tech City",
    lugar: "Campinas - SP"
  }
];

let tbody = document.querySelector("tbody")

function listData(){

  for (let index = 0; index < loja.length; index++) {
    let tr = document.createElement("tr")
    tr.innerHTML += `
            <td>${loja[index].nome}</td>
            <td>${loja[index].descricao}</td>
            <td>${loja[index].endereco}</td>
            <td>${loja[index].lugar}</td>
            <td> 
            <button class = "btn btn-warning" onclick="renderModalEditar(${loja[index].id})"> Editar </button>  
            <button class = "btn btn-danger"  onclick="deletarloja(${loja[index].id})"> Excluir </button> 
            </td>
       `
    tbody.appendChild(tr)
  }
}
listData()

function deletarloja(id) {
  let index = loja.findIndex(item => item.id == id)
  loja.splice(index, 1)
  tbody.innerHTML = ""
  listData()
}

let body = document.querySelector("body")


function renderModal() {
  let div = document.createElement("div")
  div.innerHTML += `
        <div id="createModal" class="modal-content">
        <form>
          <div class="form-group">
              <input type="text" class="form-control" id="inputId" aria-describedby="emailHelp" placeholder="Digite o id">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Digite o nome da loja">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputEndereço" aria-describedby="emailHelp" placeholder="Digite descrição">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputlugar" aria-describedby="emailHelp" placeholder="Digite o lugar">
          </div>
                    <div class="form-group">
              <input type="text" class="form-control" id="inputDescricao" aria-describedby="emailHelp" placeholder="Digite a descricao">
          </div>
          <button type="button" class="btn btn-success" onclick=cadastrarLojas() >Adicionar</button>
          <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
        </form>
      </div> 
    `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}
renderModal()

function cadastrarLojas(){
  let id = document.querySelector("#inputId").value
  let nome = document.querySelector("#inputNome").value
  let endereco = document.querySelector("#inputEndereço").value
  let lugar = document.querySelector("#inputlugar").value
  let descricao = document.querySelector("#inputDescricao").value
  
  loja.push({id, nome, endereco, lugar, descricao })
   
  tbody.innerHTML= ""
  listData()
  removeModal()
}
cadastrarLojas()

function removeModal() {
  let div = document.querySelector(".modal-overlay")
  body.removeChild(div)
}

function renderModalEditar(id){
  let lojas = loja.find( item => item.id == id)

  let div = document.createElement("div")
  div.innerHTML += `
    <div id="editModal" class="modal-content"> 
            <div class="form-group">
              <input type="text" class="form-control" id="EditId" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${lojas.id}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditNome" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${lojas.nome}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditDescricao" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${lojas.descricao}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditEndereco" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${lojas.endereco}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditLugar" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${lojas.lugar}">
            </div>
            <button type="button" class="btn btn-success" onclick=editarProduto(${lojas.id}) >Salvar</button>
            <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
    </div>
  `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}

function editarProduto(id) {
  let index = loja.findIndex( item => item.id == id)

  let identificador= document.querySelector("#EditId").value
  let nome = document.querySelector("#EditNome").value
  let endereco = document.querySelector("#EditEndereco").value
  let lugar = document.querySelector("#EditLugar").value
  let descricao = document.querySelector("#EditDescricao").value
  
    loja[index] = {
      id:identificador,
      nome:nome,
      endereco:endereco,
      lugar:lugar,
      descricao:descricao
    }
 tbody.innerHTML = ""
 listData()
 removeModal()
}
