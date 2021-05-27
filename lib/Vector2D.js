export default class Vector2D extends Array{
    constructor (x = 1, y = 0) {
        super(x, y);
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    } 
    
    get x() {
        return this[0];
    }
    
    get y() {
        return this[1];
    }
    
    // 向量的模长
    get length() {
        return Math.hypot(this.x, this.y);
    }

    // 向量与x轴正方向的夹角弧度制，取值范围[-Math.PI, Math.PI]
    get angle() {
        return Math.atan2(this.y, this.x);
    }

    clone() {
        return new Vector2D(this.x, this.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    scale(v) {
        this.x *= v;
        this.y *= v;
        return this;
    }

}
