var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {
        var data = {
            name: 'Jander Nunes',
            cpf: cpf.generate(),
            email: 'qa@gmail.com',
            whatsapp: '31988888888',
            address: {
                postalcode: '30888888',
                street: 'Rua x',
                number: '1000',
                district: 'Vila x',
                city_state: 'Belo Horizonte/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
