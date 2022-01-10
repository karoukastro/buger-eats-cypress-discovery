var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: `21965441112`,
            address: {
                postalcode: `22793081`,
                street: `Avenida das Américas`,
                number: `7777`,
                details: `Loja 5`,
                district: `Barra da Tijuca`,
                city_state: `Rio de Janeiro/RJ`
            },
            delivery_method: `Moto`,
            cnh: `cnh-digital.jpg`
        }

        return data
    }
}