import MovingObject from "./moving_object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "brown";
    
    constructor(options = {}) {
        super(options);
        this.pos = options.pos;
        this.color = Asteroid.COLOR;
        this.radius = Asteroid.RADIUS;
        this.vel = options.vel || Util.randomVec(4);
        
    }
}

export default Asteroid;