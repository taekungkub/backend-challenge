



async function create(user){
    // save to db

    const existUser = false

    if(existUser) {
        return 'User aleready exist'
    }
   
    console.log(  user.name , 'register  successfully' )
}

module.exports = {create}