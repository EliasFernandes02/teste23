
const Review = [
  {
    "id": 1,
    "usuario": "Ana Paula",
    "nota": 5,
    "comentario": "Excelente produto! Superou minhas expectativas.",
    "data": "2025-05-20"
  },
  {
    "id": 2,
    "usuario": "Carlos Henrique",
    "nota": 4,
    "comentario": "Muito bom, mas a entrega demorou um pouco.",
    "data": "2025-05-18"
  },
  {
    "id": 3,
    "usuario": "Juliana M.",
    "nota": 3,
    "comentario": "Produto ok, mas achei que viria com mais acessórios.",
    "data": "2025-05-15"
  },
  {
    "id": 4,
    "usuario": "Rafael Dias",
    "nota": 2,
    "comentario": "Esperava mais pela descrição. Não recomendo para uso profissional.",
    "data": "2025-05-10"
  },
  {
    "id": 5,
    "usuario": "Fernanda Souza",
    "nota": 1,
    "comentario": "Veio com defeito e o atendimento foi péssimo.",
    "data": "2025-05-05"
  }
]

let tbody = document.querySelector("tbody")

function listPata() {

  for (let index = 0; index < Review.length; index++) {
    let tr = document.createElement("tr")
    tr.innerHTML += `
            <td>${Review[index].usuario}</td>
            <td>${Review[index].nota}</td>
            <td>${Review[index].comentario}</td>
            <td>${Review[index].data}</td>
            <td> 
            <button class = "btn btn-warning" onclick="renderModalEditar2(${Review[index].id})"> Editar </button>  
            <button class = "btn btn-danger"  onclick="deletarReview(${Review[index].id})"> Excluir </button> 
            </td>
       `
    tbody.appendChild(tr)
  }
}
listPata()

function deletarReview(id) {
  let index = Review.findIndex(item => item.id == id)
  Review.splice(index, 1)
  tbody.innerHTML = ""
  listPata()
}

let body = document.querySelector("body")

function renderModal2() {
  let div = document.createElement("div")
  div.innerHTML += `
        <div id="createModal2" class="modal-content2">
        <form>
          <div class="form-group">
              <input type="text" class="form-control" id="inputId" aria-describedby="emailHelp" placeholder="Digite o id">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputUsuario" aria-describedby="emailHelp" placeholder="Digite seu usuario">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputNota" aria-describedby="emailHelp" placeholder="Digite sua nota">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputComentario" aria-describedby="emailHelp" placeholder="Digite seu comentario">
          </div>

          <div class="form-group">
              <input type="text" class="form-control" id="inputData" aria-describedby="emailHelp" placeholder="Digite a data">
          </div>
          <button type="button" class="btn btn-success" onclick=cadastrarReview() >Adicionar</button>
          <button type="button" class="btn btn-danger" onclick=removeModal2()>Fechar</button>
        </form>
      </div> 
    `
  div.classList.add("modal-overlay2")
  body.appendChild(div)
}

function cadastrarReview(){
  let id = document.querySelector("#inputId").value
  let usuario = document.querySelector("#inputUsuario").value
  let nota = document.querySelector("#inputNota").value
  let comentario = document.querySelector("#inputComentario").value
  let data = document.querySelector("#inputData").value
  
  Review.push({id, usuario, nota, comentario, data})
   
  tbody.innerHTML= ""
  listPata()
  removeModal2()
}

function removeModal2() {
  let div = document.querySelector(".modal-overlay2")
  body.removeChild(div)
}

function renderModalEditar2(id){
  let avaliacao = Review.find( item => item.id == id)

  let div = document.createElement("div")
  div.innerHTML += `
    <div id="editModal" class="modal-content2"> 
            <div class="form-group">
              <input type="text" class="form-control" id="EditId" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${avaliacao.id}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditUsuario" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${avaliacao.usuario}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditNota" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${avaliacao.nota}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditComentario" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${avaliacao.comentario}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditData" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${avaliacao.data}">
            </div>
            <button class = "btn btn-warning" onclick="editarReview2(${avaliacao.id})"> Editar </button>  
            <button type="button" class="btn btn-danger" onclick=removeModal2()>Fechar</button>
    </div>
  `
  div.classList.add("modal-overlay2")
  body.appendChild(div)
}

function editarReview2(id) {
  let index = Review.findIndex( item => item.id === id)

  let identificador = document.querySelector("#EditId").value
  let usuario = document.querySelector("#EditUsuario").value
  let nota = document.querySelector("#EditNota").value
  let comentario = document.querySelector("#EditComentario").value
  let data = document.querySelector("#EditData").value
  Review[index] = {
    id:identificador,
    usuario:usuario,
    nota:nota,
    comentario:comentario,
    data:data
  }
  tbody.innerHTML = ""
  listPata()
  removeModal2()
}