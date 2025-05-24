const usuarios = [
    { id: 1, email: "joao@example.com", senha: "senha123" },
    { id: 2, email: "maria@example.com", senha: "senha456" },
    { id: 3, email: "carlos@example.com", senha: "senha789" },
    { id: 4, email: "ana@example.com", senha: "senha321" },
    { id: 5, email: "elias@email.com", senha: "1234" }
  ];

  function login() {
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value
    let form = document.querySelector(".form")
    let paragrafo = document.querySelector(".batata")
    let user = usuarios.filter(usuario => 
        usuario.email === email && usuario.senha === senha
    )
    if(user.length !== 0) {
        window.location.href = "./Redirecionamento/redi.html"
    } else {
        if(!paragrafo) {
            let paragrafo = document.createElement("p")
            paragrafo.innerText += "Usuário não encontrado"
            paragrafo.classList.add("batata")
            form.appendChild(paragrafo)
        }
    }

  }
function darkMode() {
    let button = document.querySelector("i")
    let header = document.querySelector("header")
    let section = document.querySelector("section")
    if(section.className ==="darkMode") {
        header.classList.remove("darkMode")
        section.classList.remove("darkMode")
        button.classList.remove("whiteMoon")
    } else {
        header.classList.add("darkMode")
        section.classList.add("darkMode")
        button.classList.add("whiteMoon")
    }
}