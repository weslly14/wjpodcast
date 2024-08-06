const { validatePassword, validateForm } = require('./java.js');

describe('validatePassword', () => {
    test('should return criteria results correctly', () => {
        const result = validatePassword('Password1!', 'Password1!');
        expect(result.length).toBe(true);
        expect(result.uppercase).toBe(true);
        expect(result.special).toBe(true);
        expect(result.number).toBe(true);
        expect(result.match).toBe(true);
    });

    test('should return false for password criteria not met', () => {
        const result = validatePassword('pass', 'pass');
        expect(result.length).toBe(false);
        expect(result.uppercase).toBe(false);
        expect(result.special).toBe(false);
        expect(result.number).toBe(false);
        expect(result.match).toBe(true);
    });
});

describe('validateForm', () => {
    test('should return false and appropriate message if criteria not met', () => {
        expect(validateForm('pass', 'pass', 17, 'SP', 'São Paulo')).toEqual({
            valid: false,
            message: "A senha deve ter pelo menos 8 caracteres."
        });
    });

    test('should return success message if all criteria met', () => {
        expect(validateForm('Password1!', 'Password1!', 20, 'SP', 'São Paulo')).toEqual({
            valid: true,
            message: "Cadastro realizado com sucesso!"
        });
    });
});
