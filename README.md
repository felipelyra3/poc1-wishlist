
# RGB Wishlist

This API will help you organize the games you own. You can add games you own and remove them if you don't have it/them anymore (in case you sell or lose it/them).


## Author

- [@felipelyra3](https://www.github.com/felipelyra3)


## Features

- Register users
- Updates user's name
- Show the list of games you own
- Add a new game you own
- Remove a game you lost or don't own anymore


## Routes
/adduser [Post] - Add a new user in the database. Requires a body with name and e-mail.

/updateusername/:id [Put] - Updates the user's name. Requires user's ID as params and a body containing the new name.

/gamesiown/:id [Get]- List all games you own; in your connection. Requires user's ID as params.

/addgameiown [Post] - Adds a new game to your game collection. Requires a body with user's ID and the game's ID.

/deletegameiown [Delete] - Deletes a game you owned, in case you lost it or don't own it anymore. Requires a body with user's ID and the game's ID.
