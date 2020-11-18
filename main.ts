input.onButtonPressed(Button.A, function () {
    diceP1 = randint(1, 3)
    xP1 = 4
    yP1 = 4
    if (diceP1 == 1) {
        xP1 += -1
        player1 = game.createSprite(xP1, yP1)
    } else if (diceP1 == 2) {
        xP1 += -2
        player1 = game.createSprite(xP1, yP1)
    } else if (diceP1 == 3) {
        xP1 += -3
        player1 = game.createSprite(xP1, yP1)
    }
})
input.onButtonPressed(Button.B, function () {
    diceP2 = randint(1, 3)
    xP2 = 4
    yP2 = 4
    if (diceP2 == 1) {
        xP2 += -1
        player2 = game.createSprite(xP2, yP2)
    } else if (diceP2 == 2) {
        xP2 += -2
        player2 = game.createSprite(xP2, yP2)
    } else if (diceP2 == 3) {
        xP2 += -3
        player2 = game.createSprite(xP2, yP2)
    }
})
let ladder: game.LedSprite = null
let snakeSpecial: game.LedSprite = null
let snake: game.LedSprite = null
let yP2 = 0
let xP2 = 0
let diceP2 = 0
let yP1 = 0
let xP1 = 0
let diceP1 = 0
let player2: game.LedSprite = null
let player1: game.LedSprite = null
let countP2 = 0
let countP1 = 0
let dice = 0
for (let index = 0; index < 3; index++) {
    dice = randint(1, 6)
    countP1 = 0
    countP2 = 0
    if (dice % 2 == 0) {
        countP1 += 1
    } else {
        countP1 += 1
    }
}
basic.showString("P1")
basic.showNumber(countP1)
basic.showString("P2")
basic.showNumber(countP2)
if (countP1 > countP2) {
    basic.showString("P1 STARTS")
    basic.showString("PRESS A")
} else {
    basic.showString("P2 STARTS")
    basic.showString("PRESS B")
}
basic.clearScreen()
let counter = 4
while (counter >= 2) {
    counter += -1
    basic.showNumber(counter)
}
player1 = game.createSprite(4, 4)
player2 = game.createSprite(4, 4)
basic.forever(function () {
    snake = game.createSprite(2, 2)
    if (player1 == snake) {
        yP1 += 1
        xP1 += 1
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . . # .
                . # # . .
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                . . . . #
                . . # # .
                . # . . .
                # . . . .
                `)
            basic.pause(100)
        }
        player1 = game.createSprite(xP1, yP1)
    } else if (player2 == snake) {
        yP2 += 1
        xP2 += 1
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . . # .
                . # # . .
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                . . . . #
                . . # # .
                . # . . .
                # . . . .
                `)
            basic.pause(100)
        }
        player2 = game.createSprite(xP2, yP2)
    }
    snakeSpecial = game.createSprite(1, 0)
    if (player1 == snakeSpecial || player2 == snakeSpecial) {
        yP1 += 1
        yP2 += 1
        xP1 += 1
        xP2 += 1
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . # . # .
                . # # # .
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . #
                # . . . #
                . # # # .
                . # . # .
                # . . . #
                `)
            basic.pause(100)
        }
        player1 = game.createSprite(xP1, yP1)
        player2 = game.createSprite(xP1, yP1)
    }
    ladder = game.createSprite(3, 3)
    if (player1 == ladder) {
        yP1 += -1
        xP1 += -1
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
            basic.pause(100)
        }
        player1 = game.createSprite(xP1, yP1)
    } else if (player2 == ladder) {
        yP2 += -1
        xP2 += -1
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
            basic.pause(100)
        }
        player2 = game.createSprite(xP2, yP2)
    }
})
