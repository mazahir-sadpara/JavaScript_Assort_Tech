const accountId = 12345
let accountEmail = "mazahir@gmail.com"
var accountPassword = "123"
accountCity="Skardu"
let accountState

// accountId = 2 //Not allowed!
accountEmail = "nice@gmail.com"
accountPassword = "999"
accountCity="Lahore"

{
    //scope man k chalo is ko filhal
}

/*
Prefer not to use var
because it create issue on block and function scopes
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
