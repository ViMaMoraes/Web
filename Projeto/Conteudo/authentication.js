const baseURL = "http://172.0.0.1:5500"

/**
 * loginFirebase
 * Realiza a autenticação do usuário no firabase
 * @param {String} email - email do usuário
 * @param {String} senha - senha do usuário
 * @return {object} - Objeto com o usupario logado
 */
function loginFirebase(email, senha) {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(result => {
            alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
            window.location.href = `${baseURL}/home.html`
        })
        .catch(error => {
            alert(`Erro ao efetuar o login: ${error.message}`)
        })
}