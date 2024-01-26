var delta_x=0;
var delta_y=0;

document.addEventListener('keydown',(e)=>{
    var ev = e || window.event;

    switch(ev.keyCode){
        case 65:
            delta_x=-1;
            $('adam').style.transform = 'scaleX(1)'
            isRunL = true;
            break;
        case 87:
            delta_y=-1;
            isRunT = true;
            break;
        case 68:
            delta_x=1;
            $('adam').style.transform = 'scaleX(-1)'
            isRunR = true;
            break;
        case 83:
            delta_y=1;
            isRunD = true;
            break;
        case 74:
            console.log("74")
            isAttack = true;
            if ( $('adam').style.transform === 'scaleX(1)'){
                isHit(0)
            }else {
                isHit(1)
            }

            break;
        default:
            break;
    }
},false);

document.addEventListener('keyup',(e)=>{
    var ev = e || window.event;
    switch(ev.keyCode){
        case 65:
            delta_x=0;
            isRunL = false;
            break;
        case 87:
            delta_y=0;
            isRunT = false;
            break;
        case 68:
            delta_x=0;
            isRunR = false;
            break;
        case 83:
            delta_y=0;
            isRunD = false;
            break;
        case 74:
            isAttack = false;
            break;
        default:
            break;
    }
},false);



var timer = window.setInterval(()=>{
    //碰撞实现
    const mapEx = parseInt(mapE.style.left);
    const mapEy = parseInt(mapE.style.top);

    CollisionImplementation2Future(adam,adam._x + delta_x*10,adam._y + delta_y,arrE)
    var isC = Impact_checking((adam._x+delta_x*10) - mapEx,(adam._y+delta_y) - mapEy,adam.h,adam.w,parseInt($('slm1').style.left),parseInt($('slm1').style.top),80,80)
    if (isCollide || isC){
        $('adam').style.backgroundColor = 'yellow'
        delta_y = delta_x = 0
    }

    //碰撞背景元素移动
    var unit = 10;
    var p = document.getElementsByTagName('div')[4];
    var left = window.getComputedStyle(p,null).left;
    var top = window.getComputedStyle(p,null).top;
    p.style.left=parseInt(left)-delta_x*unit+'px';
    p.style.top=parseInt(top)-delta_y*unit+'px';

    //底层背景移动
    var bgPX = stage.style.backgroundPositionX
    var bgPY = stage.style.backgroundPositionY
    stage.style.backgroundPositionX=parseInt(bgPX)-delta_x*unit+'px'
    stage.style.backgroundPositionY=parseInt(bgPY)-delta_y*unit+'px'

    if (isAttack){
        adam.attack()
        isAttack = false
    }else{

    }

    if (isRunL || isRunR || isRunD || isRunT){
        adam.run()
        adam.run()
        adam.run()
    }else{
        adam.standby()
    }

    if (isAttack){
        adam.attack()
    }

},50);

const debugScope = document.createElement('div')

function isHit(direction = 0){
    const slm1 = $('slm1')
    const mapEx = parseInt(mapE.style.left);
    const mapEy = parseInt(mapE.style.top);
    var x1 = adam._x - 80 - mapEx
    const y1 = adam._y - mapEy + 50
    const h1 = adam.h - 100
    const w1 = adam.w
    const x2 = parseInt(slm1.style.left)
    const y2 = parseInt(slm1.style.top)
    const h2 = parseInt(slm1.style.height)
    const w2 = parseInt(slm1.style.width)

    if (direction === 1){
        x1 = x1 + w1 + w2 + 2
    }
    if(Impact_checking(x1,y1,h1,w1,x2,y2,h2,w2)) {
        $('slm1').style.backgroundColor = 'yellow'
        VectorHit($('slm1'),-80,0,10,10,30)
        slm._blood = slm._blood - adam.harm

        $('boosBlood').style.width = parseInt($('boosBlood').style.width) - (adam.harm/slm.blood)*parseInt($('boosBlood').style.width) + 'px'

        if (slm._blood <= 0) {
            $('slm1').style.backgroundColor = 'red'
            sleep(200).then(()=>{
                $('slm1').style.display = 'none'
                $('slm1').style.left = ''
                $('slm1').style.top = ''
            })
            $('boosBloodBox').style.border = ''
            return
        }
        sleep(500).then(()=>{
            $('slm1').style.backgroundColor = ''
        })
    }
    debugScope.id = 'debugScope'
    debugScope.style.width = w1+'px'
    debugScope.style.height = h1+'px'
    debugScope.style.left = x1+'px'
    debugScope.style.top = y1+'px'
    debugScope.style.border = '2px solid red'
    debugScope.style.zIndex = 99
    debugScope.style.position = 'absolute'
    mapE.appendChild(debugScope)
}
