##Frogger Acrade Game
This is a very basic game. The aim of the game is to **move the player to the other side of the path** without getting hit by any bug.

###How to start
The game starts as soon as you open the webpage `index.html` stored in the root Folder of the `.zip` file downloaded.

###Rules
-The player must not hit the bugs.
-If the **player hits any bug**, the player moves to its default position.
-You get **points** if you reach the other side of the path.
-As soon as you reach the other side, the player again returns back to the default position.

###Controls
The game requires use of only the arrow keys.

##For the developers
###Game Logic
-The background is drawn on the `canvas`.
-There are classes for the **player** and the **enemy**.
-One instance of `Player` class is created.
-Six instances of `Enemy` class is creater and stored in an array called `allEnemies`.
-The **player** and **enemy** classes have `update` and `render` functions to **update their coordinates and draw them** on `canvas` respectively.
-To identify the **key pressed**, `handleInput` function is used.
-there is a `checkCollision` function to check if the player and enemy objects are overlapping. If yes, the player is sent to default position.
-Similarly, if the player reaches other side of the road, it is sent to default position. At this point, the score is incremented.

###Scope for future Improvement
-The player can be selected as per user's choice.
-The number of lives of player can be limited.
-Additional perks can be given at times.