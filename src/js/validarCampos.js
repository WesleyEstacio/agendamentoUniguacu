function validarCampo() {
    let emailInput = document.getElementById('email')
    let senhaInput = document.getElementById('senha') 

    if (emailInput.value === '') {
        emailInput.style.borderColor = 'red'
    } else if (senhaInput.value === '') {
        emailInput.style.borderColor = 'initial'
        senhaInput.style.borderColor = 'red'
    } else {
        senhaInput.style.borderColor = 'initial'
        alert('Deu boa')
    }
}






//const data = Usuario.findOne({ where: { usuario_email: id } });
//   data.then((data) => {
//        const email = data.dataValues.usuario_email     //Pega email no banco de dados
//        const password = data.dataValues.usuario_senha  //Pega senha no banco de dados
//    })