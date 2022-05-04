function validar(email,password,emailUser,senhaUser) {
    console.log(email)
    console.log(password)

    if (emailUser === email && senhaUser === password ) {
        return 'deu boa'
    } else {
        return 'deu ruim'
    }
}

module.exports = validar
