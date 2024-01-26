function $(id){
    return document.getElementById(id)
}

/**
 * 调试显示：十字准星
 */
function debugDisplay(sWidth,sHigth,color){
    // sWidth = screen.width
    heng = $("c-x")
    shu = $("c-y")
    heng.style.cssText = "position: absolute;\n" +
        "    width: 40px;\n" +
        "    height: 2px;\n" +
        "    background-color: " + color + ";\n" +
        "    top: " + (sHigth/2-1) + "px;\n" +
        "    left: " + (sWidth/2-20) + "px;\n" +
        "    z-index: 100;"
    shu.style.cssText = "position: absolute;\n" +
        "    width: 2px;\n" +
        "    height: 40px;\n" +
        "    background-color: " + color + ";\n" +
        "    top: " + (sHigth/2-20) + "px;\n" +
        "    left: " + (sWidth/2-1) + "px;\n" +
        "    z-index: 100;"
}


/**
 * 调试框：体积盒子
 */
function debugBox(eid){
    e = $(eid)
    e.style.border = "2px solid red"

    e.style.paddingLeft = 0
    e.style.paddingTop = 0
}

/**
 * 放置地图元素
 * @param stage 主舞台
 * @param src   地图元素路径
 * @param x     屏幕绝对位置x
 * @param y     屏幕绝对位置y
 * @param w     图片元素宽
 * @param h     图片元素高
 */
function putBGE(stage, src, x, y, w, h){
    var bge = document.createElement("img")
    mapE.appendChild(bge)
    bge.src = src
    bge.className = "b_e"
    bge.alt = src
    bge.style.left = x * w + "px"
    bge.style.top = y * h + "px"
    bge.id = x+"_"+y
    arrE.push(bge)
}

/**
 * 添加为子元素
 * @param e
 */
function addChild(e) {
    stage.appendChild(e)
}

/**
 * 游戏底层添加
 */
function putBottomLayer(src,w,h){
    stage.style.backgroundImage = "url(\""+src+"\")"
    stage.style.width = w + 'px'
    stage.style.height = h + 'px'
    ml = stage.style.marginLeft
    mt = stage.style.marginTop
}

/**
 * 放置动画实例
 * @param fid 父类id
 * @param x   屏幕绝对位置x
 * @param y   屏幕绝对位置y
 * @param w   实例宽
 * @param h   实例高
 * @param frame_number
 * @param url 实例图片位置
 * @param Rounds 播放次数 0:无限播放
 * @param z_index 图层
 */
function AnimationInstance(fid,x,y,w = 80,h = 80,frame_number,url,Rounds,z_index){
    father = document.createElement('div')
    father.id = fid
    father.style.width = w + 'px'
    father.style.height = h + 'px'
    father.style.position = 'absolute'
    father.style.left = x + 'px'
    father.style.top = y + 'px'
    father.style.zIndex = z_index
    father.style.overflow = 'hidden'
    addChild(father)
    id = '_img_'+ url + fid

    // startAnimation(father,id,url,Rounds)
    startAnimation(father,id,url,Rounds,frame_number,w,h,100)
}

/**
 * 帧动画播放
 * @param father 父DOM
 * @param id
 * @param url 图片url
 * @param Rounds 播放次数 0：无限播放
 * @param frame_number 帧数
 * @param timeout 间隔
 * @param w
 * @param h
 */
function startAnimation(father,id,url,Rounds,frame_number = 15,w,h,timeout = 100){
    e = document.createElement('div')
    e.id = id
    e.style.backgroundImage = 'url(\"'+ url +'\")'
    e.style.backgroundRepeat = 'no-repeat'
    e.style.width = w * frame_number + 'px'
    e.style.height = h + 'px'
    e.style.overflow = 'hidden'
    e.style.willChange = 'transform'
    e.style.zIndex = father.style.zIndex
    e.style.position = father.style.position

    father.appendChild(e)

    let arr = [0,frame_number]
    In_instanceAnimation(e,arr,Rounds,w,timeout)
}

function In_instanceAnimation(e,arr,Rounds,w,timeout = 100){
    var i = arr[0]
    var frame_number = arr[1]
    var s = 0
    e.style.transform = "translate3d(" + (-w * i) + "px,0,0)"
    isStat = setInterval(
        function (){
            e.style.transform = "translate3d(" + (-w * i) + "px,0,0)"
            i++
            if (i > frame_number-1){
                if (Rounds !== 0){
                    s++
                    if (s > Rounds - 1){
                        clearInterval(isStat)
                        isAttack = false
                    }
                }
                i = arr[0]
            }
        },timeout
    )
}

/**单背景帧动画
 *
 * @param e 动画元素
 * @param arr 动画数组
 * @param Rounds 循环次数 (0:无限循环)
 * @param w 单帧宽度
 * @param timeout 间隔时长
 */
function SingleBackgroundFrameAnimation(e,arr,Rounds,w,timeout = 100){
    var i = arr[0]
    var s = 0
    e.style.backgroundPositionX = 0+'px'
    var isStart = setInterval(()=>{
        e.style.backgroundPositionX = (-w*i)+'px'
        i++
        if (i > arr[1]-1){
            if (Rounds !== 0){
                s++
                if (s > Rounds - 1){
                    clearTimeout(isStart)
                }
            }
            i = arr[0]
        }
    },timeout)
}

/**
 * 物体旋转动画
 * @param e 元素
 * @param x x坐标
 * @param y y坐标
 * @param angleS 起始角度
 * @param angleE 结束角度
 * @param originX 原点x位置
 * @param originY 原点y位置
 * @param number 次数(0:反复播放)
 * @param rate 速率
 * @constructor
 */
function RotatingAnimation(e,angleS,angleE,originX,originY,number,rate){
    e.style.transform = 'rotate('+ angleS + 'deg)'
    e.style.transformOrigin = originX+'% '+originY+'%'
    var dateA = angleS
    var i = 0
    var ra = window.setInterval(()=>{
        e.style.transform = 'rotate('+ dateA + 'deg)'
        if (dateA >= angleS && dateA <= angleE){
            dateA = dateA + rate
        }else {
            rate = -rate
            dateA = dateA + rate
            i++
            if ((number !== 0) && (i >= number*2) ){
                e.style.transform = 'rotate('+ 0 + 'deg)'
                clearTimeout(ra)
            }
        }
    },5)
}

function RotatingAnimation2A(e,rotatingArray,number,rate){
    RotatingAnimation(e,rotatingArray[0],rotatingArray[1],rotatingArray[2],rotatingArray[3],number,rate)
}

function AnimatedE(e,arr,w,timeout=100){
    var i = arr[0]
    var endf = arr[1]
    var s = 0
    e.style.transform = "translate3d(" + (timeout/10)*(-w * i) + "px,0,0)"
    i++
    if (i > endf){
        i = arr[0]
    }
}

/**
 * 键盘移动动作
 * @param id
 * @param speed 步长
 * @param direction  方向 [正向(默认):true | 反向:false]
 * @constructor
 */
function KeyboardResponsiveMotion(id, speed, direction = true){
    if (direction === true ){
        keyboardAction(id,speed)
    }else {
        keyboardAction(id,-speed)
    }
}

/**
 * 键盘移动动作（背景）
 * @param id
 * @param speed 步长
 * @param direction 方向 [正向:true | 反向(默认):false]
 */
function backgroundMoving(id,speed = 4,direction = false){
    if (direction === true ){
        bottomBackgroundMovement(id,speed)
    }else {
        bottomBackgroundMovement(id,-speed)
    }
}
/**
 * 键盘动作
 * @param id
 * @param speed 步长
 */
function keyboardAction(id,speed){
    let e = $(id)
    var left = ''
    var top = ''
    document.addEventListener('keydown',function (k){
        if (k.keyCode === 65){
            console.log("←")
            left = e.style.left.slice(0,-2)
            left = Number(left) - speed
            e.style.left = left + 'px'
        }else if(k.keyCode === 68){
            console.log("→")
            left = e.style.left.slice(0,-2)
            left = Number(left) + speed
            e.style.left = left + 'px'
        }else if(k.keyCode === 87){
            console.log("↑")
            top = e.style.top.slice(0,-2)
            top = Number(top) - speed
            e.style.top = top + 'px'
        }else if (k.keyCode === 83){
            console.log("↓")
            top = e.style.top.slice(0,-2)
            top = Number(top) + speed
            e.style.top = top + 'px'
        }
    })
}

/**
 * 底部背景运动
 * @param id
 * @param speed 步长
 */
function bottomBackgroundMovement(id,speed){
    let bg = $(id)
    var x = ''
    var y = ''
    document.addEventListener('keydown',function (k){
        if (k.keyCode === 65){
            console.log("←")
            x = bg.style.backgroundPositionX.slice(0,-2)
            console.log(x)
            x = Number(x) - speed
            bg.style.backgroundPositionX = x + 'px'
        }else if(k.keyCode === 68){
            console.log("→")
            x = bg.style.backgroundPositionX.slice(0,-2)
            x = Number(x) + speed
            bg.style.backgroundPositionX = x + 'px'
        }else if(k.keyCode === 87){
            y = bg.style.backgroundPositionY.slice(0,-2)
            y = Number(y) - speed
            bg.style.backgroundPositionY = y + 'px'
        }else if (k.keyCode === 83){
            console.log("↓")
            y = bg.style.backgroundPositionY.slice(0,-2)
            y = Number(y) + speed
            bg.style.backgroundPositionY = y + 'px'
        }
    })
}

/**
 * 单物体碰撞检测
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param h1
 * @param w1
 * @param h2
 * @param w2
 * @returns {boolean} true：碰撞 |false：未碰撞
 */
function Impact_checking( x1,y1,h1,w1,x2,y2,h2,w2){
    x1 = x1 + w1/2
    y1 = y1 + h1/2
    x2 = x2 + w2/2
    y2 = y2 + h2/2
    return (Math.abs(x1 - x2) < (w1/2 + w2/2)) &&
        (Math.abs(y1 - y2) < (h1/2 + h2/2));
}

/**
 * 多物体碰撞检测
 * @param x1
 * @param y1
 * @param h1
 * @param w1
 * @param arrE 存放碰撞物体
 */
function CollisionImplementation(x1,y1,h1,w1,arrE){
    for (let i in arrE){
        isCollide =  Impact_checking(x1,y1,h1,w1,parseInt(arrE[i].style.left),parseInt(arrE[i].style.top),80,80)
        if (isCollide){
            return
        }
        $('adam').style.backgroundColor = ''
    }
}

/**
 * 多物体元素碰撞检测
 * @param e 当前个体
 * @param arrE 存放碰撞物体
 */
function CollisionImplementation2E(e,arrE){
    var mapEx = parseInt(mapE.style.left)
    var mapEy = parseInt(mapE.style.top)
    CollisionImplementation(e._x - mapEx, e._y - mapEy, e._h, e._w, arrE);
}

/**
 * 针对运动趋势碰撞检测
 * @param e
 * @param fx 下一帧物体x坐标
 * @param fy 下一帧物体y坐标
 * @param arrE 存放碰撞物体
 */
function CollisionImplementation2Future(e,fx,fy,arrE){
    var mapEx = parseInt(mapE.style.left)
    var mapEy = parseInt(mapE.style.top)
    CollisionImplementation(fx - mapEx, fy - mapEy, e._h, e._w, arrE);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * 原素 展开/收纳
 * @param e 待 展开 /收纳 元素
 * @param x1
 * @param y1
 * @param h1
 * @param w1
 * @param x2
 * @param y2
 * @param h2
 * @param w2
 * @param speed 动画步长
 * @param timeout 动画帧间隔
 * @param isBig 将 展开/收纳 (tru:展开|false:收纳)
 */
function PointOpenBig(e,x1,y1,h1,w1,x2,y2,h2,w2,speed,timeout,isBig = true){
    if (isBig){
        e.style.display = ''
    }else {
        for (i = 0 ; i <= e.childNodes.length ; i++){
            // console.log(e.childNodes[i])
            if (e.childNodes[i] != null){
                e.childNodes[i].style.display = 'none'
            }
        }
    }
    e.style.left = x1+'px'
    e.style.top = y1+'px'
    e.style.height = h1+'px'
    e.style.width = w1+'px'
    speed = (speed/100)
    const deltaX = speed*(x2-x1)
    const deltaY = speed*(y2-y1)
    const deltaH = speed*(h2-h1)
    const deltaW = speed*(w2-w1)
    // console.log(x2,y2,h2,w2)
    var getBig = window.setInterval(()=>{
        // console.log(x1,y1,h1,w1,deltaX,deltaY,deltaH,deltaW)

        if ((w1 >= w2 && isBig) || ((w1 <= w2) && !isBig)){
            e.style.left = x2+'px'
            e.style.top = y2+'px'
            e.style.height = h2+'px'
            e.style.width = w2+'px'
            // console.log(x2,y2,h2,w2)
            if (!isBig){
                e.style.display = 'none'
            }else {
                for (i = 0 ; i <= e.childNodes.length ; i++){
                    // console.log(e.childNodes[i])
                    if (e.childNodes[i] != null){
                        e.childNodes[i].style.display = ''
                    }
                }
            }
            // console.log(e.style.left,e.style.top,e.style.height,e.style.width)
            clearTimeout(getBig)
        }
        x1 = x1 + deltaX
        y1 = y1 + deltaY
        h1 = h1 + deltaH
        w1 = w1 + deltaW

        e.style.left = x1+'px'
        e.style.top = y1+'px'
        e.style.height = h1+'px'
        e.style.width = w1+'px'
    },timeout)
}

/**
 *
 * @param e
 * @param dx
 * @param dy
 * @param timeout
 * @param damping
 * @param speed
 * @constructor
 */
function VectorHit(e,dx,dy,timeout = 100,damping = 10,speed = 1){
    startX = parseInt(e.style.left)
    startY = parseInt(e.style.top)
    endX = startX + dx
    endY = startY + dy
    var dataX = dx/Math.abs(dx)
    var dataY = speed/dy
    var isVectorHit = setInterval(()=>{
        nowX = parseInt(e.style.left)
        nowY = parseInt(e.style.top)
        console.log(nowX,nowY,endX,endY,startX,startY,dataX,dataY)
        if ((nowX === endX) &&
            (nowY === endY) || e.style.display === 'none'){
            clearTimeout(isVectorHit)
        }
        e.style.left = nowX + dataX+'px'
        e.style.top = nowY + dataY+'px'
    },timeout)
}