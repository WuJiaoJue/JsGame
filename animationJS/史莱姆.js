class Slime{
    level       //等级
    Attributes  //属性
    slm         //实例
    _x           //坐标x
    _y           //坐标y
    _url
    _blood

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get blood() {
        return this._blood;
    }

    set blood(value) {
        this._blood = value;
    }

//构造方法
    constructor(level = 1, Attributes = 0) {
        this._level = level;
        this._Attributes = Attributes;
        this.blood = level_blood4slm(level)
    }

    //构造一个史莱姆实例
    instance(src,id){
        this.slm = document.createElement('div')
        this.slm.id = id
        this.slm.style.backgroundImage = 'url('+src+')'
        this.slm.style.height = 80+'px'
        this.slm.style.width = 80+'px'
        this.slm.style.left = (this._x * 80)+'px'
        this.slm.style.top = (this._y * 80)+'px'
        this.slm.style.zIndex = 21
        this.slm.style.position = 'absolute'
        this.slm.style.backgroundRepeat = 'no-repeat'
        mapE.appendChild(this.slm)

        collision.push(this._x,this._y)
        arrBiology.push(collision)
        collision = []
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get Attributes() {
        return this._Attributes;
    }

    set Attributes(value) {
        this._Attributes = value;
    }

    jump(){
        SingleBackgroundFrameAnimation(this.slm, [0,15],0,80)
    }
}
