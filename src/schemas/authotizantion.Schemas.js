import Joi from "joi";

const singUpSchema = Joi.object({

    name: Joi.string().required().messages({
        'string.base': `'nome' deve ser um texto`,
        'string.empty': `'nome' não pode ser vazio`,
        'any.required': `'nome' é um campo obrigatŕio`

    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': `'email' não pode ser vazio`,
        'string.email': `'email' deve estar no formato correto`,
        'any.required': `'email' é um campo obrigatŕio`
    }),
    password: Joi.string().required().messages({
        'string.empty': `'password' inválido`,
        'any.required': `password é um campo obrigatŕio`
    }),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
        "any.only": "Password devem ser iguais",
        'any.required': `confirmação password é um campo obrigatŕio`
    }),

}).with('password', 'confirmPassword');

const signInSchema = Joi.object({

    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': `'email' não pode ser vazio`,
        'string.email': `'email' deve estar no formato correto`,
        'any.required': `'email' é um campo obrigatŕio`
    }),
    password: Joi.string().required().messages({
        'string.empty': `'password' inválido`,
        'any.required': `password é um campo obrigatŕio`
    })

});



export { singUpSchema, signInSchema }