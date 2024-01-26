//主舞台
var stage = $("stage");

main()
//调试:十字准星
debugDisplay(1440,720,"red")
debugBox('adam')

function main(){
    //资源加载
    loadImage()
}

function loadImage(){
    //游戏初始化
    gameInit()
}

function gameInit(){
    //游戏层初始化
    layerInit()
    //添加地图
    addMap()
    //添加人物
    addChara()
    //添加怪物
    addMonster()
    //添加UI
    addUI()


}

/**
 * 游戏层初始化
 */
function layerInit(){
    //游戏底层添加
    putBottomLayer("images/草地.png",1440,720)
}

function addChara(){
    adam = new Adam()
    adam._x = (1440/2 - 41)
    adam._y = (720/2 - 100)
    adam.z_index = 21
    adam.bodysrc = 'images/adam/FM身体.png'
    adam.footsrc = 'images/adam/FM腿.png'
    adam.headsrc = 'images/adam/FM头.png'
    adam.handsrc = 'images/adam/FM手臂.png'

    adam._id = 'adam'
    adam._w = 78
    adam._h = 160
    adam.instance()

    adam.arms = 1
}

function addMonster(){
    slm = new Slime(1,0)
    slm.x = 4
    slm.y = 4
    slm.level = 1
    slm.Attributes = 0
    slm.instance('images/史莱姆-跳.png','slm1')
    slm.jump()
}


