basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.clearScreen()
basic.showString("START")
let sprite = game.createSprite(4, 0)
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, 1)
            sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, -1)
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
    }
})
