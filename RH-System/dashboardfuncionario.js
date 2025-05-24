const funcionarios = [
  {
    id: 1,
    nome: "Ana Souza",
    cargo: "Analista de Marketing",
    departamento: "Marketing",
    salario: 4500,
    status: "ativo"
  },
  {
    id: 2,
    nome: "Bruno Lima",
    cargo: "Desenvolvedor Front-end",
    departamento: "Tecnologia",
    salario: 6000,
    status: "ativo"
  },
  {
    id: 3,
    nome: "Carlos Pereira",
    cargo: "Gerente de Projetos",
    departamento: "Operações",
    salario: 8500,
    status: "ativo"
  },
  {
    id: 4,
    nome: "Daniela Castro",
    cargo: "Assistente Administrativo",
    departamento: "Administrativo",
    salario: 3200,
    status: "inativo"
  },
  {
    id: 5,
    nome: "Eduardo Silva",
    cargo: "Engenheiro de Software",
    departamento: "Tecnologia",
    salario: 7000,
    status: "ativo"
  },
  {
    id: 6,
    nome: "Fernanda Oliveira",
    cargo: "Coordenadora de RH",
    departamento: "Recursos Humanos",
    salario: 6200,
    status: "ativo"
  },
  {
    id: 7,
    nome: "Gabriel Costa",
    cargo: "Técnico de Suporte",
    departamento: "TI",
    salario: 3800,
    status: "inativo"
  },
  {
    id: 8,
    nome: "Helena Martins",
    cargo: "Contadora",
    departamento: "Financeiro",
    salario: 5300,
    status: "ativo"
  },
  {
    id: 9,
    nome: "Igor Almeida",
    cargo: "Designer Gráfico",
    departamento: "Marketing",
    salario: 4700,
    status: "ativo"
  },
  {
    id: 10,
    nome: "Juliana Ramos",
    cargo: "Analista de Dados",
    departamento: "Tecnologia",
    salario: 6800,
    status: "ativo"
  }
];



let tbody = document.querySelector("tbody")

function listData() {

  for (let index = 0; index < funcionarios.length; index++) {
    let tr = document.createElement("tr")
    tr.innerHTML += `
            <td>${funcionarios[index].nome}</td>
            <td>${funcionarios[index].cargo}</td>
            <td>${funcionarios[index].departamento}</td>
            <td> R$ ${funcionarios[index].salario}</td>
            <td> 
            <button class = "btn btn-warning" onclick="renderModalEditar(${funcionarios[index].id})"> Editar </button>  
            <button class = "btn btn-danger"  onclick="deletarProduto(${funcionarios[index].id})"> Excluir </button> 
            </td>
       `
    tbody.appendChild(tr)
  }
}
listData()

function deletarProduto(id) {
  let index = funcionarios.findIndex(item => item.id == id)
  funcionarios.splice(index, 1)
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
              <input type="text" class="form-control" id="inputNome" aria-describedby="emailHelp" placeholder="Nome do colaborador">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputCargo" aria-describedby="emailHelp" placeholder="Cargo do colaborador">
          </div>
          <div class="form-group">
              <input type="text" class="form-control" id="inputSalario" aria-describedby="emailHelp" placeholder="Salário colaborador">
          </div>

          <div class="form-group">
              <input type="text" class="form-control" id="inputDepartamento" aria-describedby="emailHelp" placeholder="Departamento do colaborador">
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
  let cargo = document.querySelector("#inputCargo").value
  let salario = document.querySelector("#inputSalario").value
  let departamento = document.querySelector("#inputDepartamento").value
  
  funcionarios.push({id, nome, cargo, salario, departamento })
   
  tbody.innerHTML= ""
  listData()
  removeModal()
}

function removeModal() {
  let div = document.querySelector(".modal-overlay")
  body.removeChild(div)
}

function renderModalEditar(id){
  let produto = funcionarios.find( item => item.id == id)

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
              <input type="text" class="form-control" id="EditCargo" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.cargo}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditSalario" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.salario}">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="EditDepartamento" aria-describedby="emailHelp" placeholder="Digite sua Descrição" value="${produto.departamento}">
            </div>
            <button class = "btn btn-warning" onclick="editarProduto(${produto.id})"> Editar </button>  
            <button type="button" class="btn btn-danger" onclick=removeModal()>Fechar</button>
    </div>
  `
  div.classList.add("modal-overlay")
  body.appendChild(div)
}

function editarProduto(id) {
  let index = funcionarios.findIndex( item => item.id === id)

  let identificador = document.querySelector("#EditId").value
  let nome = document.querySelector("#EditNome").value
  let cargo = document.querySelector("#EditCargo").value
  let salario = document.querySelector("#EditSalario").value
  let departamento = document.querySelector("#EditDepartamento").value
  funcionarios[index] = {
    id:identificador,
    nome:nome,
    departamento:departamento,
    salario:salario,
    cargo:cargo
  }
  tbody.innerHTML = ""
  listData()
  removeModal()
}