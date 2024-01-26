/**全局变量*/
var isRun = 0 //人物移动动画播放 (1:移动|0:停止)
var isRunL = false //像左移动 (f:否|t:是)
var isRunR = false //像右移动 (f:否|t:是)
var isRunT = false //像上移动 (f:否|t:是)
var isRunD = false //像下移动 (f:否|t:是)

//脚旋转方向乘参
var direction2foot = 1

var isAttack = false //攻击动画播放 (t:移动|f:停止)
var isStat //动画播放
var isCollide = false //碰撞判定 (t:碰撞|f:未碰撞)

var xNum = 1600 / 80 //20
var yNum = 800 / 80  //10

var mapE = document.createElement('div') //碰撞地图元素
mapE.id = 'mapE'
stage.appendChild(mapE)

var arrE = []

var arrBiology = []

//底层背景初始位置
stage.style.backgroundPositionX = 0
stage.style.backgroundPositionY = 0

/**精灵图动作分配
 * 使用 array4Animations['动作']
 * 申明 动作:[起始帧，结束帧] star at 0
 * @type {{standby: number[], attack: number[], run: number[]}}
 */
var array4Animations = {
    run:[0,4,'跑步'],
    attack:[7,14,'攻击'],
    standby:[15,18,'待机'],
}

/**旋转动画角度分配*/
var array4Rotation = {
    run:[-20,20,50,0,'foot-跑步'],
    run4foot1:[-20,20,50,0,'foot1-跑步'],
    run4foot2:[20,-20,50,0,'foot2-跑步'],
    attack:[0,40,100,0,'hand1-攻击']
}

var arrayArms = {
    0:'',
    1:'images/武器/武器-石剑.png'}

// var level_blood = {
//     slm:[level_blood4slm(),'史莱姆 血量-等级函数曲线'],
//     adam:[level_blood4adam(),'adam 血量-等级函数曲线']
// }

//动作帧位置索引
var runI = array4Animations["run"][0]
var attackI = array4Animations["attack"][0]
var dateA = array4Rotation["run"][0]

//史莱姆 血量-等级函数曲线
function level_blood4slm(level){
    return 100*level
}

//adam 血量-等级函数曲线
function level_blood4adam(level){
    return 100*(level**0.5)
}
