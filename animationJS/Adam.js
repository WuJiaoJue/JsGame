class Adam extends Chara{
    _arms;
    get arms() {
        return this._arms;
    }

    set arms(value) {
        this._arms = value;
        let arms = document.createElement('div')
        arms.id = '_img_arm' + this._id
        arms.style.backgroundImage = 'url('+arrayArms[this.arms]+')'
        arms.style.backgroundRepeat = 'no-repeat'
        arms.style.width = 80+'px'
        arms.style.height = 56+'px'
        arms.style.overflow = 'hidden'
        arms.style.willChange = 'transform'
        arms.style.zIndex = this._z_index-1
        arms.style.position = 'absolute'
        arms.style.top = 0+'px'
        arms.style.right = -4+'px'
        $('hand_'+this._id).appendChild(arms)
    }

    /**
     * 构造方法
     * @param level 等级（1~100）
     * @param state 状态（0：正常|1：流血|2：虚弱...）
     * @param Blood 血量（100~...）
     * @param harm 伤害（10~...）
     * @param armor 护甲（10~...）
     * @param defense 防御（0~...）
     * @param gold 金币（0~...）
     * @param arms 武器（？？？）
     */
    constructor(level = 1,state = 0,Blood = 100,harm = 10,armor = 10,defense = 0,gold = 0,arms = 0) {
        super();
        this._level = level;
        this._state = state;
        this._Blood = Blood;
        this._harm = harm;
        this._armor = armor;
        this._defense = defense;
        this._gold = gold;
        this._arms = arms;
    }


    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get Blood() {
        return this._Blood;
    }

    set Blood(value) {
        this._Blood = value;
    }

    get harm() {
        return this._harm;
    }

    set harm(value) {
        this._harm = value;
    }

    get armor() {
        return this._armor;
    }

    set armor(value) {
        this._armor = value;
    }

    get defense() {
        return this._defense;
    }

    set defense(value) {
        this._defense = value;
    }

    get gold() {
        return this._gold;
    }

    set gold(value) {
        this._gold = value;
    }

    run(direction = 0,rate = 2){
        const foot1 = $('_img_foot1adam');
        const foot2 = $('_img_foot2adam');
        foot1.style.transformOrigin = array4Rotation["run"][2]+'% '+array4Rotation["run"][3]+'%'
        foot2.style.transformOrigin = array4Rotation["run"][2]+'% '+array4Rotation["run"][3]+'%'
        if (dateA < array4Rotation["run"][0] || dateA > array4Rotation["run"][1]) {
            direction2foot = -1*direction2foot
        }
        dateA = dateA + rate*direction2foot
        foot1.style.transform = 'rotate('+dateA+'deg)'
        foot2.style.transform = 'rotate('+(-1*dateA)+'deg)'
    }

    attack(){
        RotatingAnimation2A($('hand_adam'),array4Rotation["attack"],1,3)
    }

    standby(){
        const foot1 = $('_img_foot1adam');
        const foot2 = $('_img_foot2adam');
        foot1.style.transform = 'rotate('+0+'deg)'
        foot2.style.transform = 'rotate('+0+'deg)'
    }
}