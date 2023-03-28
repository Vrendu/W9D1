class MovingObject{
    constructor(options = {}){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle =  this.color;
        ctx.stroke();
    }

    move() {
        let newxPos = this.pos[0] + this.vel[0];
        let newyPos = this.pos[1] + this.vel[1];
        this.pos = this.game.wrap([newxPos, newyPos]);
    }

    isCollidedWith(otherObject){
        let centerDistance = sqrt((this.pos[0] - otherObject.pos[0])**2 + (this.pos[1] - otherObject.pos[1])**2);
        let sumRadii = this.radius + otherObject.radius;

        if (centerDistance < sumRadii){
            return true;
        }else {
            return false;
        }
    }

}

export default MovingObject;