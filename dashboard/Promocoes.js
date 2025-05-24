const promocoes = [
  {
    id: 1,
    nome: "Promo 1",
    promocao: "Promoção de Férias",
    categoria: "Casa",
    desconto: 15
  },
  {
    id: 2,
    nome: "Promo 2",
    promocao: "Promoção de Volta as Aulas",
    categoria: "Calçados",
    desconto: 20
  },
  {
    id: 3,
    nome: "Promo 3",
    promocao: "Promoção de Natal",
    categoria: "Roupas",
    desconto: 10
  },
  {
    id: 4,
    nome: "Promo 4",
    promocao: "Promoção de Carnaval",
    categoria: "Casa",
    desconto: 15
  },
  {
    id: 5,
    nome: "Promo 5",
    promocao: "Promoção de Dia das Mães",
    categoria: "Roupas",
    desconto: 20
  }
];


let tbody = document.querySelector("tbody")

function listData() {

  for (let index = 0; index < promocoes.length; index++) {
    let tr = document.createElement("tr")
    tr.innerHTML += `
            <td>${promocoes[index].nome}</td>
            <td>${promocoes[index].promocao}</td>
            <td>${promocoes[index].categoria}</td>
            <td>${promocoes[index].desconto} % </td>
            <td> 
            <button class = "btn btn-warning" onclick="renderModalEditar(${promocoes[index].id})"> Editar </button>  
            <button class = "btn btn-danger"  onclick="deletarPromocao(${promocoes[index].id})"> Excluir </button> 
            </td>
       `
    tbody.appendChild(tr)
  }
}
listData()

function deletarPromocao(id) {
  let index = promocoes.findIndex(item => item.id == id)
  promocoes.splice(index, 1)
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
              <input type="text" class="form-control" id="inputDesconto" aria-describedby="emailHelp" placeholder="Digite seu desconto">
          </div>

          <div class="form-group">
              <input type="text" class="form-control" id="inputPromocao" aria-describedby="emailHelp" placeholder="Digite sua Promocao">
          </div>
          <button type="button" class="btn btn-success" onclick=cadastrarPromocao() >Adicionar</button>
          <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
        </form>
      </div> 
    `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}

function cadastrarPromocao(){
  let id = document.querySelector("#inputId").value
  let nome = document.querySelector("#inputNome").value
  let categoria = document.querySelector("#inputCategoria").value
  let desconto = document.querySelector("#inputDesconto").value
  let promocao = document.querySelector("#inputPromocao").value
  
  promocoes.push({id, nome, categoria, desconto, promocao })
   
  tbody.innerHTML= ""
  listData()
  removeModal()
}

function removeModal() {
  let div = document.querySelector(".modal-overlay")
  body.removeChild(div)
}

function renderModalEditar(id){
  let promocao = promocoes.find( item => item.id == id)

  let div = document.createElement("div")
  div.innerHTML += `
    <div id="editModal" class="modal-content"> 
            <div class="form-group">
              <input type="text" class="form-control" id="EditId" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${promocao.id}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditNome" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${promocao.nome}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditCategoria" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${promocao.categoria}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditDesconto" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${promocao.desconto}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditPromocao" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${promocao.promocao}">
            </div>
            <button class = "btn btn-warning" onclick="editarPromocao(${promocao.id})"> Editar </button>  
            <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
    </div>
  `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}

function editarPromocao(id) {
  let index = promocoes.findIndex( item => item.id === id)

  let identificador = document.querySelector("#EditId").value
  let nome = document.querySelector("#EditNome").value
  let categoria = document.querySelector("#EditCategoria").value
  let desconto = document.querySelector("#EditDesconto").value
  let promocao = document.querySelector("#EditPromocao").value
  promocoes[index] = {
    id:identificador,
    nome:nome,
    categoria:categoria,
    desconto:desconto,
    promocao:promocao
  }
  tbody.innerHTML = ""
  listData()
  removeModal()
}