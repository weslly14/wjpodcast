// validatePassword.js

// Função para validar a senha
function validatePassword(senha, senhaRepetida) {
    const lengthCriteria = senha.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(senha);
    const specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    const numberCriteria = /[0-9]/.test(senha);

    return {
        length: lengthCriteria,
        uppercase: uppercaseCriteria,
        special: specialCriteria,
        number: numberCriteria,
        match: senha === senhaRepetida
    };
}

// Função para validar o formulário
function validateForm(senha, senhaRepetida, idade, estado, cidade) {
    if (senha.length < 8) return { valid: false, message: "A senha deve ter pelo menos 8 caracteres." };
    if (!/[A-Z]/.test(senha)) return { valid: false, message: "A senha deve conter pelo menos uma letra maiúscula." };
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) return { valid: false, message: "A senha deve conter pelo menos um caractere especial." };
    if (!/[0-9]/.test(senha)) return { valid: false, message: "A senha deve conter pelo menos um número." };
    if (senha !== senhaRepetida) return { valid: false, message: "As senhas digitadas não coincidem." };
    if (idade < 18) return { valid: false, message: "Você deve ter pelo menos 18 anos para se cadastrar." };
    if (estado === "" || cidade === "") return { valid: false, message: "Por favor, selecione um estado e uma cidade." };

    return { valid: true, message: "Cadastro realizado com sucesso!" };
}

module.exports = { validatePassword, validateForm };
