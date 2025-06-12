class rectangle{

    constructor (width,height,color){    //blue print

        this.width = width
        this.height = height
        this.color=color
    }

    area(){

        const area= this.width * this.height
        return area
    }

    paint(){

        console.log("Color is  "  + this.color)
    }

  
}

const rect = new rectangle(2,4,"black")
const area = rect.area()
rect.paint()
console.log(area)