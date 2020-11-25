input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    diceP1 = randint(2, 3)
    basic.showNumber(diceP1)
    for (let index = 0; index <= diceP1 - 1; index++) {
        if (player1.get(LedSpriteProperty.Y) % 2 == 0) {
            if (player1.get(LedSpriteProperty.X) == 0 && diceP1 != 1) {
                player1.change(LedSpriteProperty.Y, -1)
                basic.pause(100)
            } else {
                player1.change(LedSpriteProperty.X, -1)
                basic.pause(100)
            }
        } else if (player1.get(LedSpriteProperty.Y) % 2 != 0) {
            if (player1.get(LedSpriteProperty.X) == 4) {
                player1.change(LedSpriteProperty.Y, -1)
                basic.pause(100)
            } else {
                player1.change(LedSpriteProperty.X, 1)
                basic.pause(100)
            }
        }
    }
    if (player1.get(LedSpriteProperty.X) == 3 && player1.get(LedSpriteProperty.Y) == 1) {
        for (let index = 0; index < 2; index++) {
            music.playTone(147, music.beat(BeatFraction.Quarter))
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
        player1.change(LedSpriteProperty.X, 1)
        player1.change(LedSpriteProperty.Y, 1)
    } else if (player2.get(LedSpriteProperty.X) == 3 && player2.get(LedSpriteProperty.Y) == 1) {
        for (let index = 0; index < 2; index++) {
            music.playTone(147, music.beat(BeatFraction.Quarter))
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
        player2.change(LedSpriteProperty.X, 1)
        player2.change(LedSpriteProperty.Y, 1)
    }
    if (player1.get(LedSpriteProperty.X) == 1 && player1.get(LedSpriteProperty.Y) == 0 || player2.get(LedSpriteProperty.X) == 1 && player2.get(LedSpriteProperty.Y) == 0) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C5 A B G A F G E ", 120)
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
        player1.change(LedSpriteProperty.X, 1)
        player1.change(LedSpriteProperty.Y, 1)
        player2.change(LedSpriteProperty.X, 1)
        player2.change(LedSpriteProperty.Y, 1)
    }
    if (player1.get(LedSpriteProperty.X) == 3 && player1.get(LedSpriteProperty.Y) == 3) {
        for (let index = 0; index < 2; index++) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
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
        player1.change(LedSpriteProperty.X, -1)
        player1.change(LedSpriteProperty.Y, -1)
    } else if (player2.get(LedSpriteProperty.X) == 3 && player2.get(LedSpriteProperty.Y) == 3) {
        for (let index = 0; index < 2; index++) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
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
        player2.change(LedSpriteProperty.X, -1)
        player2.change(LedSpriteProperty.Y, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    diceP2 = randint(2, 3)
    basic.showNumber(diceP2)
    for (let index2 = 0; index2 <= diceP2 - 1; index2++) {
        if (player2.get(LedSpriteProperty.Y) % 2 == 0) {
            if (player2.get(LedSpriteProperty.X) == 0 && diceP2 != 1) {
                player2.change(LedSpriteProperty.Y, -1)
                basic.pause(100)
            } else {
                player2.change(LedSpriteProperty.X, -1)
                basic.pause(100)
            }
        } else if (player2.get(LedSpriteProperty.Y) % 2 != 0) {
            if (player2.get(LedSpriteProperty.X) == 4) {
                player2.change(LedSpriteProperty.Y, -1)
                basic.pause(100)
            } else {
                player2.change(LedSpriteProperty.X, 1)
                basic.pause(100)
            }
        }
    }
    if (player1.get(LedSpriteProperty.X) == 3 && player1.get(LedSpriteProperty.Y) == 1) {
        for (let index = 0; index < 2; index++) {
            music.playTone(147, music.beat(BeatFraction.Quarter))
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
        player1.change(LedSpriteProperty.X, 1)
        player1.change(LedSpriteProperty.Y, 1)
    } else if (player2.get(LedSpriteProperty.X) == 3 && player2.get(LedSpriteProperty.Y) == 1) {
        for (let index = 0; index < 2; index++) {
            music.playTone(147, music.beat(BeatFraction.Quarter))
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
        player2.change(LedSpriteProperty.X, 1)
        player2.change(LedSpriteProperty.Y, 1)
    }
    if (player1.get(LedSpriteProperty.X) == 1 && player1.get(LedSpriteProperty.Y) == 0 || player2.get(LedSpriteProperty.X) == 1 && player2.get(LedSpriteProperty.Y) == 0) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C5 A B G A F G E ", 120)
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
        player1.change(LedSpriteProperty.X, 1)
        player1.change(LedSpriteProperty.Y, 1)
        player2.change(LedSpriteProperty.X, 1)
        player2.change(LedSpriteProperty.Y, 1)
    }
    if (player1.get(LedSpriteProperty.X) == 3 && player1.get(LedSpriteProperty.Y) == 3) {
        for (let index = 0; index < 2; index++) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
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
        player1.change(LedSpriteProperty.X, -1)
        player1.change(LedSpriteProperty.Y, -1)
    } else if (player2.get(LedSpriteProperty.X) == 3 && player2.get(LedSpriteProperty.Y) == 3) {
        for (let index = 0; index < 2; index++) {
            music.playTone(740, music.beat(BeatFraction.Quarter))
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
        player2.change(LedSpriteProperty.X, -1)
        player2.change(LedSpriteProperty.Y, -1)
    }
})
let win: Image = null
let diceP2 = 0
let diceP1 = 0
let player2: game.LedSprite = null
let player1: game.LedSprite = null
let countP2 = 0
let countP1 = 0
let dice = 0
let temperature = input.temperature()
while (temperature >= 32 && temperature <= 40) {
    basic.showString("NO GAME")
}
while (temperature <= -10) {
    basic.showString("NO GAME")
}
for (let index = 0; index < 3; index++) {
    dice = randint(1, 6)
    countP1 = 0
    countP2 = 0
    if (dice % 2 == 0) {
        countP1 = countP1 + 1
    } else {
        countP2 = countP2 + 1
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
for (let counter = 0; counter <= 3; counter++) {
    basic.showNumber(counter)
}
player1 = game.createSprite(4, 4)
player2 = game.createSprite(4, 4)
let snake = game.createSprite(3, 1)
let snakeSpecial = game.createSprite(1, 0)
let ladder = game.createSprite(3, 3)
let end = game.createSprite(0, 0)
basic.forever(function () {
    while (player1.isTouching(end)) {
        music.playMelody("- - G A A B C5 - ", 120)
        win = images.createImage(`
            . . . . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showString("P1 WINS")
    }
    while (player2.isTouching(end)) {
        music.playMelody("- - G A A B C5 - ", 120)
        win = images.createImage(`
            . . . . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showString("P2 WINS!")
    }
})
