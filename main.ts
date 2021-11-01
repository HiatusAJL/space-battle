namespace SpriteKind {
    export const PowerUP = SpriteKind.create()
    export const Mode = SpriteKind.create()
    export const HealthUp = SpriteKind.create()
    export const DoubleDamage = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 5 9 . . . . 
        . 9 9 9 9 9 9 9 5 5 9 9 . . . . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    if (doublefireMode && doublefireMode.lifespan > 0) {
        projectile.y += -5
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 9 9 9 . . . . 
            . . . . . . 9 9 9 9 5 9 . . . . 
            . 9 9 9 9 9 9 9 5 5 9 9 . . . . 
            . . . . . . . 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 0)
        projectile.y += 5
    }
    if (Double_Damage && Double_Damage.lifespan > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 . . . 
            . . . . . 2 2 2 9 9 9 9 2 . . . 
            . 2 2 2 2 2 9 9 9 2 5 9 2 . . . 
            2 9 9 9 9 9 9 9 5 5 2 9 2 . . . 
            . 2 2 2 2 2 2 9 9 9 9 2 2 . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 200, 0)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    enemyDeath(status.spriteAttachedTo())
})
function enemyDeath (enemy: Sprite) {
    enemy.destroy(effects.disintegrate, 500)
    if (Math.percentChance(10)) {
        powerUp = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . 8 7 7 7 7 7 7 7 8 . . . 
            . . . 8 8 7 7 7 7 7 7 7 8 8 . . 
            . . 8 8 8 7 7 8 8 8 7 7 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 7 7 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 7 7 8 8 8 . 
            . . 8 8 8 7 7 7 7 7 7 7 8 8 8 . 
            . . 8 8 8 7 7 7 7 7 7 7 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 8 8 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 8 8 8 8 8 . 
            . . . 8 8 7 7 8 8 8 8 8 8 8 . . 
            . . . . 8 8 8 8 8 8 8 8 8 . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.PowerUP)
        powerUp.x = enemy.x
        powerUp.y = enemy.y
    }
    if (Math.percentChance(10)) {
        HealthPowerUp = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . 2 2 2 2 . 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.HealthUp)
        HealthPowerUp.x = enemy.x
        HealthPowerUp.y = enemy.y
    }
    if (Math.percentChance(10)) {
        Double_Damage = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . 8 7 7 7 7 7 7 7 8 . . . 
            . . . 8 8 7 7 7 7 7 7 7 8 8 . . 
            . . 8 8 8 7 7 8 8 8 7 7 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 7 7 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 7 7 8 8 8 . 
            . . 8 8 8 7 7 7 7 7 7 7 8 8 8 . 
            . . 8 8 8 7 7 7 7 7 7 7 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 8 8 8 8 8 . 
            . . 8 8 8 7 7 8 8 8 8 8 8 8 8 . 
            . . . 8 8 7 7 8 8 8 8 8 8 8 . . 
            . . . . 8 8 8 8 8 8 8 8 8 . . . 
            . . . . . 8 8 8 8 8 8 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.DoubleDamage)
        Double_Damage.x = enemy.x
        Double_Damage.y = enemy.y
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.DoubleDamage, function (sprite, otherSprite) {
    Double_Damage = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . 2 2 2 9 9 9 9 2 . . . 
        . 2 2 2 2 2 9 9 9 2 5 9 2 . . . 
        2 9 9 9 9 9 9 9 5 5 2 9 2 . . . 
        . 2 2 2 2 2 2 9 9 9 9 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.DoubleDamage)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . 2 2 2 9 9 9 9 2 . . . 
        . 2 2 2 2 2 9 9 9 2 5 9 2 . . . 
        2 9 9 9 9 9 9 9 5 5 2 9 2 . . . 
        . 2 2 2 2 2 2 9 9 9 9 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    Double_Damage.setPosition(70, 7)
    Double_Damage.lifespan = 10000
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUP, function (sprite, otherSprite) {
    doublefireMode = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 9 9 . . . 
        . . . . . . . 9 9 9 9 5 9 . . . 
        . . 9 9 9 9 9 9 9 5 5 9 9 . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 9 9 . . . 
        . . . . . . . 9 9 9 9 5 9 . . . 
        . . 9 9 9 9 9 9 9 5 5 9 9 . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Mode)
    doublefireMode.setPosition(48, 7)
    doublefireMode.lifespan = 10000
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -25
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HealthUp, function (sprite, otherSprite) {
    info.setLife(info.life() + 1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    enemyDeath(otherSprite)
})
let statusbar: StatusBarSprite = null
let enemyShip: Sprite = null
let HealthPowerUp: Sprite = null
let powerUp: Sprite = null
let Double_Damage: Sprite = null
let doublefireMode: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    4 4 f . . . . . . . . . . . . . 
    . 6 6 6 6 f . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 6 f . . . . . 
    . . . . a 8 8 8 8 8 8 8 8 f . . 
    . . . a a a f 6 6 6 6 6 f 6 f . 
    . . . a a a 6 6 f 6 6 f 6 6 f f 
    . . . . a 8 8 8 8 8 8 8 8 f . . 
    . . . . 6 6 6 6 6 9 f f . . . . 
    . . . 6 6 6 6 6 f . . . . . . . 
    . . . 6 6 6 9 f . . . . . . . . 
    . 6 6 6 9 f . . . . . . . . . . 
    4 4 4 f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
let enemySpeed = 20
let enemySpawnTime = 2000
game.onUpdateInterval(5000, function () {
    enemySpeed += 5
    enemySpeed = Math.min(enemySpeed, 50)
    enemySpawnTime += -200
    enemySpawnTime = Math.max(enemySpawnTime, 500)
})
forever(function () {
    enemyShip = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = 0 - enemySpeed
    enemyShip.y = randint(10, scene.screenHeight() - 10)
    statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
    statusbar.setColor(7, 2)
    statusbar.max = 100
    statusbar.attachToSprite(enemyShip)
    pause(enemySpawnTime)
})
