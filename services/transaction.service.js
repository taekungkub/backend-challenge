const { token } = require("../data/token");
const { users } = require("../data/users");
const { transactions } = require("../data/transaction");

async function createSell(
  user_id,
  token_id,
  amount,
  price,
  type = "sell",
  status = "open"
) {
  const findToken = token.find((v) => v.id === token_id);
  const findUser = users.find((v) => v.id === user_id);

 
  console.log(`${findUser.name} ${type} ${findToken.token_name} amount ${amount} price ${price} THB ${status} create transaction successfully`)
}


async function buy(transaction_id , user_id , price ){

  const findUser = users.find((v) => v.id === user_id);
  const findTransaction = transactions.find((v)=> v.id=== transaction_id)

  if(findUser.fiat < price) {
    console.log('user money not enough')
  }

  console.log(`${findUser.name} buy  successfully`)
  
  // update transaction from open to close
}




module.exports = { createSell , buy  };
