var faker = require('faker');

function generateIndividuals() {
    var inidividuals = [];

    for (var id = 1; id < 11; id++){
        inidividuals.push({
            id: id,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phone: faker.phone.phoneNumberFormat(),
            address: {
                line1: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zip: faker.address.zipCode()
            }
        })
    }
    return {individuals: inidividuals}
}
module.exports = generateIndividuals;