const Usuarios = [
    {
      id: 1,
      nome: "AnaSouza",
      idade: 28,
      email: "ana.souza@email.com",
      senha: "senha123"
    },
    {
      id: 2,
      nome: "CarlosLima",
      idade: 35,
      email: "carlos.lima@email.com",
      senha:"abc12345"
    },
    {
      id: 3,
      nome: "JulianaMendes",
      idade: 22,
      email: "juliana.m@email.com",
      senha: "juliana@22"
    }
  ];
  
  
  
  let tbody = document.querySelector("tbody")
  
  function listData() {
  
    for (let index = 0; index < Usuarios.length; index++) {
      let tr = document.createElement("tr")
      tr.innerHTML += `
              <td>${Usuarios[index].nome}</td>
              <td>${Usuarios[index].idade}</td>
              <td>${Usuarios[index].email}</td>
              <td> ${Usuarios[index].senha}</td>
              <td> 
              <button class = "btn btn-warning" onclick="renderModalEditar(${Usuarios[index].id})"> Editar </button>  
              <button class = "btn btn-danger"  onclick="deletarProduto(${Usuarios[index].id})"> Excluir </button> 
              </td>
         `
      tbody.appendChild(tr)
    }
  }
  listData()
  
  function deletarProduto(id) {
    let index = Usuarios.findIndex(item => item.id == id)
    Usuarios.splice(index, 1)
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
                <input type="text" class="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Digite seu nome">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="inputidade" aria-describedby="emailHelp" placeholder="Digite sua idade">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="inputemail" aria-describedby="emailHelp" placeholder="Digite seu email">
            </div>
  
            <div class="form-group">
                <input type="text" class="form-control" id="inputsenha" aria-describedby="emailHelp" placeholder="Digite sua senha">
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

    let nome = document.querySelector("#inputNome").value
    let idade = document.querySelector("#inputidade").value
    let email = document.querySelector("#inputemail").value
    let senha= document.querySelector("#inputsenha").value
    let id = Usuarios.length +1
    Usuarios.push({id, nome, idade, email, senha })
     
    tbody.innerHTML= ""
    listData()
    removeModal()
    console.log(Usuarios)
  }

  function removeModal() {
    let div = document.querySelector(".modal-overlay")
    body.removeChild(div)
  }
  
  function renderModalEditar(id){
    let usuario = Usuarios.find( item => item.id == id)
  
    let div = document.createElement("div")
    div.innerHTML += `
      <div id="editModal" class="modal-content"> 
              <div class="form-group">
                <input type="text" class="form-control" id="EditId" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${usuario.id}">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="EditNome" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${usuario.nome}">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="Editidade" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${usuario.idade}">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="Editemail" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${usuario.email}">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="Editsenha" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${usuario.senha}">
              </div>
              <button class = "btn btn-warning" onclick="editarUsuario(${usuario.id})"> Editar </button>  
              <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
      </div>
    `
    div.classList.add("modal-overlay")
    body.appendChild(div)
  }
  
  function editarUsuario(id) {
    let index = Usuarios.findIndex( item => item.id === id)
  
    let identificador = document.querySelector("#EditId").value
    let nome = document.querySelector("#EditNome").value
    let idade = document.querySelector("#Editidade").value
    let email = document.querySelector("#Editemail").value
    let senha = document.querySelector("#Editsenha").value
    Usuarios[index] = {
      id:identificador,
      nome:nome,
      idade:idade,
      email:email,
      senha:senha
    }
    tbody.innerHTML = ""
    listData()
    removeModal()
  }