let usuarios = [];

function cadastrar() {
    const nome = document.getElementById("nome").value;

    if (nome.trim() === "") {
        alert("Digite um nome antes de cadastrar!");
        return;
    }

    usuarios.push(nome);

    atualizarLista();
    document.getElementById("nome").value = "";
}

function atualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    usuarios.forEach((usuario) => {
        let li = document.createElement("li");
        li.textContent = usuario;
        lista.appendChild(li);
    });
}
