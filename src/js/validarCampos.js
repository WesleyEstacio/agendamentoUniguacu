function validarCadastro() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(nome.value == '') {
        nome.style.borderColor = 'red'
    }else 
    if(cpf.value == '') {
        nome.style.borderColor = 'initial' 
        cpf.style.borderColor = 'red'
    }else 
    if(email.value == '') {
        cpf.style.borderColor = 'initial' 
        email.style.borderColor = 'red'
    }else 
    if(senha.value == '') {
        email.style.borderColor = 'initial' 
        senha.style.borderColor = 'red'
    }else {
        senha.style.borderColor = 'initial'
        alert('Usuário cadastrado com sucesso !!')
        document.getElementById("cadastro").submit();
    }
}