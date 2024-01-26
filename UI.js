
function addUI(){
    //添加血量条
    addBlood()
    //添加金币
    addGoldCoins()
    //添加背包
    addBackpack()
}

//添加血条
function addBlood(){
    //血条框
    var bloodBox = document.createElement('div')
    bloodBox.style.overflow = 'absolute'
    bloodBox.style.zIndex = 81
    bloodBox.style.width = '200px'
    bloodBox.style.height = '10px'
    bloodBox.style.left = '10px'
    bloodBox.style.top = '10px'
    bloodBox.style.border = '2px solid #7e1a1a'
    bloodBox.style.position = "absolute"
    //血条
    var blood = document.createElement('div')
    blood.id = 'blood'
    blood.style.width = "200px"
    blood.style.height = "10px"
    blood.style.backgroundColor = "#ed3a3c"
    blood.style.zIndex = 81

    stage.appendChild(bloodBox)
    bloodBox.appendChild(blood)

    //boos血条框
    var boosBloodBox = document.createElement('div')
    boosBloodBox.id = 'boosBloodBox'
    boosBloodBox.style.overflow = 'absolute'
    boosBloodBox.style.zIndex = 81
    boosBloodBox.style.width = '400px'
    boosBloodBox.style.height = '15px'
    boosBloodBox.style.left = (1440 - 400)/2 + 'px'
    boosBloodBox.style.top = '15px'
    boosBloodBox.style.border = '2px solid #7e1a1a'
    boosBloodBox.style.position = "absolute"
    //boos血条
    var boosBlood = document.createElement('div')
    boosBlood.id = 'boosBlood'
    boosBlood.style.left = 0+'px'
    boosBlood.style.width = "400px"
    boosBlood.style.height = "16px"
    boosBlood.style.backgroundColor = "#ed3a3c"
    boosBlood.style.zIndex = 81

    stage.appendChild(boosBloodBox)
    boosBloodBox.appendChild(boosBlood)
}

//添加背包
function addBackpack(){
    //背包图标
    var backpack = document.createElement('div')
    backpack.id = 'backpack'
    backpack.style.width = "80px"
    backpack.style.height = "80px"
    backpack.style.backgroundImage = "url(" + "images/背包.png" + ")"
    backpack.style.left = "25px"
    backpack.style.top = "630px"
    backpack.style.position = "absolute"
    backpack.style.zIndex = 81

    //背包窗口
    var backpackWindow = document.createElement('div')
    backpackWindow.id = 'backpackWindow'
    backpackWindow.style.width = "974px"
    backpackWindow.style.height = "550px"
    backpackWindow.style.background = "#ba8270"
    backpackWindow.style.top = '70px'
    backpackWindow.style.border = '4px solid #795548'
    backpackWindow.style.left = (parseInt(stage.style.width) - 900)/2 + 'px'
    backpackWindow.style.position = 'absolute'
    backpackWindow.style.display = 'none'
    backpackWindow.style.zIndex = 81

    //角色视窗框
    var adamBox = document.createElement('div')
    adamBox.style.width = 250+'px'
    adamBox.style.height = 396+'px'
    adamBox.style.left = 0+'px'
    adamBox.style.top = 0+'px'
    adamBox.style.position = 'absolute'
    adamBox.style.backgroundColor = '#926657'
    adamBox.style.borderBottom = '4px solid #795548'
    adamBox.style.borderRight = '2px solid #795548'
    adamBox.style.zIndex = 81
    backpackWindow.appendChild(adamBox)
    //将角色投影到视窗框
    var adamProjection = $('adam').cloneNode(true)
    adamProjection.id = 'adamProjection'
    adamProjection.style.left = 80+'px'
    adamProjection.style.top = 120+'px'
    adamBox.appendChild(adamProjection)

    //装备栏框
    var equipmentBox = document.createElement('div')
    equipmentBox.style.width = 80+'px'
    equipmentBox.style.height = 400+'px'
    equipmentBox.style.left = 250+'px'
    equipmentBox.style.top = 0+'px'
    equipmentBox.style.position = 'absolute'
    equipmentBox.style.zIndex = 81
    backpackWindow.appendChild(equipmentBox)

    //装备栏格子
    for (i = 0; i <=4; i++){
        var articlesBox = document.createElement('div')
        articlesBox.classList.add('articlesBox')
        articlesBox.id = 'articlesBox_'+i
        articlesBox.style.width = 76+'px'
        articlesBox.style.height = 76+'px'
        articlesBox.style.left = 0+'px'
        articlesBox.style.top = (80*i)+'px'
        articlesBox.style.position = 'absolute'
        articlesBox.style.backgroundColor = '#926657'
        articlesBox.style.zIndex = 81
        equipmentBox.appendChild(articlesBox)
    }

    //背包物品框
    var itemFrameBox = document.createElement('div')
    itemFrameBox.style.width = 628+'px'
    itemFrameBox.style.height = 480+'px'
    itemFrameBox.style.left = 330+'px'
    itemFrameBox.style.top = 0+'px'
    itemFrameBox.style.position = 'absolute'
    itemFrameBox.style.zIndex = 81
    backpackWindow.appendChild(itemFrameBox)

    //背包物品格子
    for (i = 0 ; i <= 7; i++){
        for (j = 0 ; j <= 5 ; j++){
            var articlesBox = document.createElement('div')
            articlesBox.classList.add('articlesBox')
            articlesBox.id = 'articlesBox_4itemFrameBox'+i
            articlesBox.style.width = 76+'px'
            articlesBox.style.height = 76+'px'
            articlesBox.style.left = (80*i)+'px'
            articlesBox.style.top = (80*j)+'px'
            articlesBox.style.position = 'absolute'
            articlesBox.style.backgroundColor = '#926657'
            // articlesBox.style.border = '4px solid #795548'
            articlesBox.style.zIndex = 81
            itemFrameBox.appendChild(articlesBox)
        }
    }

    //缩小背包按键
    var x = document.createElement('a')
    x.id = 'x'
    x.style.width = '80px'
    x.style.height = '46px'
    x.style.backgroundSize = 'cover'
    x.style.right = 10+'px'
    x.style.bottom = 10+'px'
    x.style.backgroundImage = 'url(' + 'images/返回.png' + ')'
    x.style.position = 'absolute'
    x.style.backgroundRepeat = 'no-repeat'
    backpackWindow.appendChild(x)

    stage.appendChild(backpack)
    stage.appendChild(backpackWindow)

    //装备投影到装备格中
    var armsProjection = $('_img_armadam').cloneNode(true)
    armsProjection.id = 'armsProjection'
    $('articlesBox_0').appendChild(armsProjection)

    //初始隐藏背包视窗元素
    for (i = 0 ; i <= backpackWindow.childNodes.length ; i++){
        console.log(backpackWindow.childNodes[i])
        if (backpackWindow.childNodes[i] != null){
            backpackWindow.childNodes[i].style.display = 'none'
        }
    }

    //显示物品详细信息
    ShowItemDetails()

    isOpen = false //背包打开状态: 未打开(初始状态)
    //背包图标点击事件
    backpack.addEventListener('click', function (){
        if (!isOpen){
            isOpen = true
            PointOpenBig(backpackWindow,25,630,80,80,
                (parseInt(stage.style.width) - 900)/2-50,70+30,550,902,4,5)
        }else {
            isOpen = false
            PointOpenBig(
                backpackWindow,
                parseInt(backpackWindow.style.left),
                parseInt(backpackWindow.style.top),
                parseInt(backpackWindow.style.height),
                parseInt(backpackWindow.style.width),
                25,630,80,80,4,5,false)
            x.style.display = 'none'
        }
    })
    //缩小背包点击事件
    x.addEventListener('click',function (){
        isOpen = false
        PointOpenBig(
            backpackWindow,
            parseInt(backpackWindow.style.left),
            parseInt(backpackWindow.style.top),
            parseInt(backpackWindow.style.height),
            parseInt(backpackWindow.style.width),
            25,630,80,80,4,5,false)
        x.style.display = 'none'
    })
}

//添加金币
function addGoldCoins(){
    //设置金币样式
    var gold = document.createElement('div')
    gold.style.width = 32+'px'
    gold.style.height = 32+'px'
    gold.style.left = 1350+'px'
    gold.style.top = 10+'px'
    gold.style.zIndex = 81
    gold.style.position = 'absolute'
    gold.style.backgroundImage = 'url('+"images/金币.png"+')'
    stage.appendChild(gold)
    //添加金币动画
    SingleBackgroundFrameAnimation(gold,[0,6],0,32)
}

//显示物品详细信息
function ShowItemDetails(){
    //初始构造一个显示信息类
    itemClickView = new ItemClickView(
        200,300,0,0,
        'absolute',
        '#5d4238',
        '#795548 solid 4px',
        0.9,
        82,
        'none')
    itemClickView.instance()

    var arr4articlesBox = backpackWindow.getElementsByClassName('articlesBox')
    arr4articlesBox[0].onclick=(function (){
        var isVoid = arr4articlesBox[0].getElementsByTagName('div').length
        if (isVoid === 1){
            itemClickView.ix = event.clientX-260
            itemClickView.iy = event.clientY+10
            itemClickView.ChangeDisplay()
        }else {
            itemClickView.display = 'none'
        }
    })
    arr4articlesBox[1].onclick=(function (){
        var isVoid = arr4articlesBox[1].getElementsByTagName('div').length
        if (isVoid === 1){
            itemClickView.ix = event.clientX-260
            itemClickView.iy = event.clientY+10
            itemClickView.ChangeDisplay()
        }else {
            itemClickView.display = 'none'
        }
    })
    arr4articlesBox[2].onclick=(function (){
        var isVoid = arr4articlesBox[2].getElementsByTagName('div').length
        if (isVoid === 1){
            itemClickView.ix = event.clientX-260
            itemClickView.iy = event.clientY+10
            itemClickView.ChangeDisplay()
        }else {
            itemClickView.display = 'none'
        }
    })
    arr4articlesBox[3].onclick=(function (){
        var isVoid = arr4articlesBox[3].getElementsByTagName('div').length
        if (isVoid === 1){
            itemClickView.ix = event.clientX-260
            itemClickView.iy = event.clientY+10
            itemClickView.ChangeDisplay()
        }else {
            itemClickView.display = 'none'
        }
    })
    arr4articlesBox[4].onclick=(function (){
        var isVoid = arr4articlesBox[4].getElementsByTagName('div').length
        if (isVoid === 1){
            itemClickView.ix = event.clientX-260
            itemClickView.iy = event.clientY+10
            itemClickView.ChangeDisplay()
        }else {
            itemClickView.display = 'none'
        }
    })
}