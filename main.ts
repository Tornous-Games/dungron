namespace SpriteKind {
    export const Option = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (on == 2) {
        Choice = sprites.create(img`
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            c c c c c 7 7 7 7 7 c c c c c c 
            `, SpriteKind.Option)
        on = 1
    } else if (on == 1) {
        Choice = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c 2 c c c c 
            c c c c c c c c c c 2 2 c c c c 
            c c c c c c c c c 2 2 2 c c c c 
            c c c c c c c c 2 2 2 2 c c c c 
            c c c c c c c 2 2 2 2 2 c c c c 
            c c c c c c 2 2 2 2 2 2 c c c c 
            c c c c c 2 2 2 2 2 2 2 c c c c 
            c c c f 2 2 2 2 2 2 2 2 c c c c 
            c c f f f f f c c c c c c c c c 
            c f f f f f c c c c c c c c c c 
            f f f f f c c c c c c c c c c c 
            f f f f c c c c c c c c c c c c 
            f f f c c c c c c c c c c c c c 
            f f c c c c c c c c c c c c c c 
            `, SpriteKind.Option)
        on = 2
    } else {
        Choice = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c 2 c c c c 
            c c c c c c c c c c 2 2 c c c c 
            c c c c c c c c c 2 2 2 c c c c 
            c c c c c c c c 2 2 2 2 c c c c 
            c c c c c c c 2 2 2 2 2 c c c c 
            c c c c c c 2 2 2 2 2 2 c c c c 
            c c c c c 2 2 2 2 2 2 2 c c c c 
            c c c f 2 2 2 2 2 2 2 2 c c c c 
            c c f f f f f c c c c c c c c c 
            c f f f f f c c c c c c c c c c 
            f f f f f c c c c c c c c c c c 
            f f f f c c c c c c c c c c c c 
            f f f c c c c c c c c c c c c c 
            f f c c c c c c c c c c c c c c 
            `, SpriteKind.Option)
        on = 2
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() < 1) {
        game.gameOver(false)
    }
    if (on == 2) {
        enemy_life += randint(-5, -1)
    } else if (on == 1) {
        info.changeLifeBy(randint(1, 5))
    }
    if (enemy_life < 1) {
        game.gameOver(true)
    }
    if (enemy_life > 20) {
        test = 2
    } else if (enemy_life < 10) {
        test = 1
    } else {
        test = randint(0, 2)
    }
    if (test == 1) {
        enemy_life += randint(0, 5)
    } else if (test == 2) {
        info.changeLifeBy(randint(0, -5))
        enemy_life += randint(0, -5)
    }
    game.splash("Enemy HP is now:" + enemy_life + "!")
})
let test = 0
let Choice: Sprite = null
let on = 0
let enemy_life = 0
info.setLife(20)
enemy_life = 50
