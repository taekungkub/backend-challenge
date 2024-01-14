
const UserService = require("./services/user.service");
const TransactionService = require("./services/transaction.service");
const TokenService = require("./services/token.service");

const { users } = require("./data/users");
const { token } = require("./data/token");


async function createAllUsers() {
  for (const i in users) {
    await UserService.create(users[i]);
  }
}

createAllUsers();

TokenService.add(token)


setTimeout(() => {
  TransactionService.createSell(users[0].id, users[0].cryptos[0].id, 10, 5000);

}, 2000);


setTimeout(() => {
  TransactionService.buy(1,users[1],5000);

}, 3000);