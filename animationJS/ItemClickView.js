class ItemClickView{
    _itemClickView = null

    constructor(
        iw = 200,
        ih = 300,
        ix = 0,
        iy = 0,
        position = 'absolute',
        backgroundColor = '#5d4238',
        outline = '#795548 solid 4px',
        opacity = 0.9,
        zIndex = 82,
        display = 'none',
        imgE
    ) {
        this._iw = iw;
        this._ih = ih;
        this._ix = ix;
        this._iy = iy;
        this._position = position;
        this._backgroundColor = backgroundColor;
        this._outline = outline;
        this._opacity = opacity;
        this._zIndex = zIndex;
        this._display = display;
        this._imgE = imgE;
    }

    instance(){
        //使之以单例存在
        if (this._itemClickView !== null){
            return
        }
        this._itemClickView = document.createElement('div')
        this._itemClickView.id = 'itemClickView'
        this._itemClickView.style.width = this._iw+'px'
        this._itemClickView.style.height = this._ih+'px'
        this._itemClickView.style.position = this._position
        this._itemClickView.style.backgroundColor = this._backgroundColor
        this._itemClickView.style.outline = this._outline
        this._itemClickView.style.opacity = this._opacity
        this._itemClickView.style.zIndex = this._zIndex
        this._itemClickView.style.display = this._display
        stage.appendChild(this._itemClickView)

        var itemImg = document.createElement('div')


        console.log(this._itemClickView.id+' 实例化成功')
    }

    ChangeDisplay(){
        if (this._display === 'none'){
            this._display = ''
        }else {
            this._display = 'none'
        }
        this._itemClickView.style.display = this._display
    }


    get imgE() {
        return this._imgE;
    }

    set imgE(value) {
        this._imgE = value;
    }

    get itemClickView() {
        return this._itemClickView;
    }

    set itemClickView(value) {
        this._itemClickView = value;
    }

    get iw() {
        return this._iw;
    }

    set iw(value) {
        this._iw = value;
    }

    get ih() {
        return this._ih;
    }

    set ih(value) {
        this._ih = value;
    }

    get ix() {
        return this._ix;
    }

    set ix(value) {
        this._ix = value;
        this._itemClickView.style.left = value+'px'
    }

    get iy() {
        return this._iy;
    }

    set iy(value) {
        this._iy = value;
        this._itemClickView.style.top = value+'px'

    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(value) {
        this._backgroundColor = value;
    }

    get outline() {
        return this._outline;
    }

    set outline(value) {
        this._outline = value;
    }

    get opacity() {
        return this._opacity;
    }

    set opacity(value) {
        this._opacity = value;
    }

    get zIndex() {
        return this._zIndex;
    }

    set zIndex(value) {
        this._zIndex = value;
    }

    get display() {
        return this._display;
    }

    set display(value) {
        this._display = value;
        this._itemClickView.style.display = value
    }
}