class Chara{
    _chara
    id

    constructor(x = 0,
                y = 0,
                z_index = 21,
                bodysrc = 'images/默认.png',
                footsrc = '',
                headsrc = '',
                handsrc = '',
                id ,
                w = 80,
                h = 80) {
        // this._chara = chara;
        this._x = x;
        this._y = y;
        this._z_index = z_index;
        this._bodysrc = bodysrc;
        this._id = id;
        this._w = w;
        this._h = h;
        this._footsrc = footsrc;
        this._headsrc = headsrc;
        this._handsrc = handsrc;
    }

    instance(){
        //创建人物实例
        this._chara = document.createElement('div')
        this._chara.id = this._id
        this._chara.style.width = this._w + 'px'
        this._chara.style.height = this._h + 'px'
        this._chara.style.position = 'absolute'
        this._chara.style.left = this.x + 'px'
        this._chara.style.top = this.y + 'px'
        this._chara.style.z_index = this.z_index
        // this._chara.style.overflow = 'hidden'
        addChild(this._chara)

        let body = document.createElement('div');
        body.id = '_img_body' + this._id
        body.style.backgroundImage = 'url(\"'+ this._bodysrc +'\")'
        body.style.backgroundRepeat = 'no-repeat'
        body.style.width = 46 + 'px'
        body.style.height = 64 + 'px'
        body.style.overflow = 'hidden'
        body.style.willChange = 'transform'
        body.style.zIndex = this._z_index + 1
        body.style.position = 'absolute'
        body.style.top = 58+'px'
        body.style.left = 16+'px'

        let foot1 = document.createElement('div');
        foot1.id = '_img_foot1' + this._id
        foot1.style.backgroundImage = 'url(\"'+ this._footsrc +'\")'
        foot1.style.backgroundRepeat = 'no-repeat'
        foot1.style.width = 16 + 'px'
        foot1.style.height = 44 + 'px'
        foot1.style.overflow = 'hidden'
        foot1.style.willChange = 'transform'
        foot1.style.zIndex = this._z_index
        foot1.style.position = 'absolute'
        foot1.style.top = 118+'px'
        foot1.style.left = 17+'px'
        let foot2 = document.createElement('div');
        foot2.id = '_img_foot2' + this._id
        foot2.style.backgroundImage = 'url(\"'+ this._footsrc +'\")'
        foot2.style.backgroundRepeat = 'no-repeat'
        foot2.style.width = 16 + 'px'
        foot2.style.height = 44 + 'px'
        foot2.style.overflow = 'hidden'
        foot2.style.willChange = 'transform'
        foot2.style.zIndex = this._z_index
        foot2.style.position = 'absolute'
        foot2.style.top = 118+'px'
        foot2.style.left = 42+'px'

        let hand = document.createElement('div')
        hand.id = 'hand_'+this._id
        hand.style.position = 'absolute'
        hand.style.zIndex = this._z_index
        hand.style.top = 62+'px'
        hand.style.left = 4+'px'
        hand.style.width = 14+'px'
        hand.style.height = 56+'px'

        let hand1 = document.createElement('div');
        hand1.id = '_img_hand1' + this._id
        hand1.style.backgroundImage = 'url(\"'+ this._handsrc +'\")'
        hand1.style.backgroundRepeat = 'no-repeat'
        hand1.style.width = 14 + 'px'
        hand1.style.height = 56 + 'px'
        hand1.style.willChange = 'transform'
        hand1.style.zIndex = this._z_index
        hand1.style.position = 'absolute'
        // hand1.style.top = 62+'px'
        // hand1.style.left = 4+'px'
        hand.appendChild(hand1)

        let hand2 = document.createElement('div');
        hand2.id = '_img_hand2' + this._id
        hand2.style.backgroundImage = 'url(\"'+ this._handsrc +'\")'
        hand2.style.backgroundRepeat = 'no-repeat'
        hand2.style.width = 14 + 'px'
        hand2.style.height = 56 + 'px'
        hand2.style.overflow = 'hidden'
        hand2.style.willChange = 'transform'
        hand2.style.zIndex = this._z_index
        hand2.style.position = 'absolute'
        hand2.style.top = 62+'px'
        hand2.style.left = 60+'px'
        hand2.style.transform = 'scaleX(-1)'

        let head = document.createElement('div');
        head.id = '_img_head' + this._id
        head.style.backgroundImage = 'url(\"'+ this._headsrc +'\")'
        head.style.backgroundRepeat = 'no-repeat'
        head.style.width = 80 + 'px'
        head.style.height = 58 + 'px'
        head.style.overflow = 'hidden'
        head.style.willChange = 'transform'
        head.style.zIndex = this._z_index + 2
        head.style.position = 'absolute'
        head.style.top = 0+'px'
        head.style.left = 0+'px'

        this._chara.appendChild(body)
        this._chara.appendChild(foot1)
        this._chara.appendChild(foot2)
        this._chara.appendChild(hand)
        // this._chara.appendChild(hand1)
        this._chara.appendChild(hand2)
        this._chara.appendChild(head)
        console.log('创建实例成功')
    }

    get chara() {
        return this._chara;
    }

    set chara(value) {
        this._chara = value;
    }

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

    get z_index() {
        return this._z_index;
    }

    set z_index(value) {
        this._z_index = value;
    }

    get bodysrc() {
        return this._bodysrc;
    }

    set bodysrc(value) {
        this._bodysrc = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get w() {
        return this._w;
    }

    set w(value) {
        this._w = value;
    }

    get h() {
        return this._h;
    }

    set h(value) {
        this._h = value;
    }


    get footsrc() {
        return this._footsrc;
    }

    set footsrc(value) {
        this._footsrc = value;
    }

    get headsrc() {
        return this._headsrc;
    }

    set headsrc(value) {
        this._headsrc = value;
    }

    get handsrc() {
        return this._handsrc;
    }

    set handsrc(value) {
        this._handsrc = value;
    }
}