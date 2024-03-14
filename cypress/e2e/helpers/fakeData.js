const { faker } = require('@faker-js/faker');

function createRandomUser(){
    return {
      Id: faker.number.int({ min: 1, max: 150 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      userName: faker.internet.userName(),
      eMail: faker.internet.email(),
      age: faker.number.int({ min: 1, max: 99 }),
    };
}

module.exports = { createRandomUser };
