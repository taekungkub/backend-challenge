const {token , token2} = require('./token')

const users = [
    {
        id:1,
        name:'john doe',
        wallet_address:'0xc5e808027624947DaAc6b31E0E4Eb9cA5524d524',
        cryptos:token,
        fiat:500000
    },
    {
        id:2,
        name:'foo bar',
        wallet_address:'0xB342e7D33b806544609370271A8D074313B7bc30',
        cryptos:token2,
        fiat:2000
    },
]


module.exports =  { users}