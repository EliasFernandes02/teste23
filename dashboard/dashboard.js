const produtosConfortaveis = [
  {
    id: 1,
    nome: "Almofada Ergonômica de Espuma",
    descricao: "Ideal para longas horas sentado, com memória inteligente.",
    categoria: "Casa",
    preco: 89.90
  },
  {
    id: 2,
    nome: "Pijama de Algodão Orgânico",
    descricao: "Conjunto ultra macio e respirável para noites confortáveis.",
    categoria: "Roupas",
    preco: 129.90
  },
  {
    id: 3,
    nome: "Pantufa Térmica Antiderrapante",
    descricao: "Com forro interno de pelúcia e sola segura para caminhar em casa.",
    categoria: "Calçados",
    preco: 79.90
  },
  {
    id: 4,
    nome: "Cobertor de Microfibra Gigante",
    descricao: "Extremamente macio e leve, ideal para relaxar.",
    categoria: "Casa",
    preco: 149.90
  },
  {
    id: 5,
    nome: "Travesseiro com Tecnologia Gel",
    descricao: "Mantém a temperatura fresca e o suporte adequado para o pescoço.",
    categoria: "Casa",
    preco: 109.90
  },
  {
    id: 6,
    nome: "Camiseta Oversized em Malha Suave",
    descricao: "Perfeita para usar em casa ou no dia a dia com estilo e conforto.",
    categoria: "Roupas",
    preco: 59.90
  },
  {
    id: 7,
    nome: "Manta com Mangas",
    descricao: "Aquece e permite movimentação livre para relaxar no sofá.",
    categoria: "Casa",
    preco: 99.90
  },
  {
    id: 8,
    nome: "Calça de Moletom Unissex",
    descricao: "Conforto garantido para o dia inteiro.",
    categoria: "Roupas",
    preco: 89.90
  },
  {
    id: 9,
    nome: "Meias Felpudas Antiderrapantes",
    descricao: "Quentinhas, ideais para dias frios em casa.",
    categoria: "Calçados",
    preco: 29.90
  },
  {
    id: 10,
    nome: "Protetor de Colchão Impermeável",
    descricao: "Aumenta a vida útil do colchão com conforto e proteção.",
    categoria: "Casa",
    preco: 119.90
  }
];


let tbody = document.querySelector("tbody")

function listData() {

  for (let index = 0; index < produtosConfortaveis.length; index++) {
    let tr = document.createElement("tr")
    tr.innerHTML += `
            <td>${produtosConfortaveis[index].nome}</td>
            <td>${produtosConfortaveis[index].descricao}</td>
            <td>${produtosConfortaveis[index].categoria}</td>
            <td>${produtosConfortaveis[index].preco}</td>
            <td> 
            <button class = "btn btn-warning" onclick="renderModalEditar(${produtosConfortaveis[index].id})"> Editar </button>  
            <button class = "btn btn-danger"  onclick="deletarProduto(${produtosConfortaveis[index].id})"> Excluir </button> 
            </td>
       `
    tbody.appendChild(tr)
  }
}
listData()

function deletarProduto(id) {
  let index = produtosConfortaveis.findIndex(item => item.id == id)
  produtosConfortaveis.splice(index, 1)
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
              <input type="text" class="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Digite seu nome">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputCategoria" aria-describedby="emailHelp" placeholder="Digite sua categoria">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputPreco" aria-describedby="emailHelp" placeholder="Digite seu preço">
          </div>

          <div class="form-group">
              <input type="text" class="form-control" id="inputDescricao" aria-describedby="emailHelp" placeholder="Digite sua Descrição">
          </div>
          <button type="button" class="btn btn-success" onclick=cadastrarProdutos() >Adicionar</button>
          <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
        </form>
      </div> 
    `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}

function cadastrarProdutos(){
  let id = document.querySelector("#inputId").value
  let nome = document.querySelector("#inputNome").value
  let categoria = document.querySelector("#inputCategoria").value
  let preco = document.querySelector("#inputPreco").value
  let descricao = document.querySelector("#inputDescricao").value
  
  produtosConfortaveis.push({id, nome, categoria, preco, descricao })
   
  tbody.innerHTML= ""
  listData()
  removeModal()
}

function removeModal() {
  let div = document.querySelector(".modal-overlay")
  body.removeChild(div)
}

function renderModalEditar(id){
  let produto = produtosConfortaveis.find( item => item.id == id)

  let div = document.createElement("div")
  div.innerHTML += `
    <div id="editModal" class="modal-content"> 
            <div class="form-group">
              <input type="text" class="form-control" id="EditId" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.id}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditNome" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.nome}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditCategoria" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.categoria}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditPreco" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.preco}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditDescricao" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.descricao}">
            </div>
            <button class = "btn btn-warning" onclick="editarProduto(${produto.id})"> Editar </button>  
            <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
    </div>
  `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}

function editarProduto(id) {
  let index = produtosConfortaveis.findIndex( item => item.id == id)

  let identificador = document.querySelector("#EditId").value
  let nome = document.querySelector("#EditNome").value
  let categoria = document.querySelector("#EditCategoria").value
  let preco = document.querySelector("#EditPreco").value
  let descricao = document.querySelector("#EditDescricao").value

  produtosConfortaveis[index] = {
    id:identificador,
    nome:nome,
    categoria:categoria,
    preco:preco,
    descricao:descricao
  }
  tbody.innerHTML = ""
  listData()
  removeModal()

}