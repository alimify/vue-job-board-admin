const faker = require('faker')

const mails = [],
tickets = [],
cat = ['sent','inbox','important','draft','trash'],
status = ['unread','opened'],
sStatus = ['Opened','Closed'],
sAction = ['Answered','Un-Answered','New Ticket','Solved']

function rand(limit) {
    return Math.floor(Math.random() * limit)
}
for (let index = 0; index < 100; index++) {
    mails.push({
        id: index + 1,
        name: faker.name.findName(),
        email: faker.internet.email(),
        subject: faker.lorem.sentence(),
        message: faker.lorem.sentences(),
        category: cat[rand(5)],
        status: status[rand(2)],
        file: faker.random.boolean(),
        date: `${faker.date.past()}`,
    })
    
}
for (let index = 0; index < 100; index++) {
        tickets.push({
            id:index + 1,
            user: {
                id:index + 1,
                name: faker.name.findName()
            },
            subject: faker.lorem.sentence(),
            message: faker.lorem.sentences(),
            action: sAction[rand(3)],
            status: sStatus[rand(2)],
            date: `${faker.date.past()}`,
        })
    
}

export default {
    mails,
    tickets
}
