import faker from 'faker'

module.exports= {
    base_url : 'http://localhost:3000',
    username : 'tester01',
    password : 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',

//Create customer
    fullName : faker.name.findName(),
    email : faker.internet.email(),
    telephone : faker.phone.phoneNumberFormat(),

//Create room
    roomNumber : faker.random.number({min:103, max:109}),
    floor: faker.random.number({min:1, max:9}),
    price: faker.random.number({min:1000, max:2000}),

//Create bills
    value: faker.random.number({min:1000, max:15000}),

//Create new reservation
//This gave a error though since the string format returned isn't YYYY-MM-DD, did not find a solution
    newStart: faker.date.between('2021-12-01', '2021-12-15'),
    newEnd:faker.date.between('2021-12-16', '2021-12-31'), 
}

//FYLL PÅ HÄR MED VARIABLER, MEN UNIKA VARIABLER