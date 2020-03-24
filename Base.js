class Base {
    constructor(x,y,w,h){
        var box_option={
            restitution:0.4,
            friction:0
        }
        this.body=Bodies.rectangle(x,y,w,h,box_option);
        this.w = w; 
        this.h = h;
        this.image= loadImage("Base.jpg");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("blue");
        image(this.image,pos.x, pos.y, this.w,this.h);
    }
};




