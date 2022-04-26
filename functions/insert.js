const db=require('../conexao')

exports.inserirUsuario = function(parametro){
        async function inserir(parametro){
        await db.connect()
        const novoUsuario="insert into usuario (usuario_nome,usuario_cpf,usuario_email,usuario_senha) values ($1,$2,$3,$4)"
        await db.query(novoUsuario,[parametro])
    }
    return(inserir(parametro))
}