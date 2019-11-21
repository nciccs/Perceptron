class Point
{
    constructor(x = random(-1, 1), y = random(-1, 1))
    {
        //this.x = random(width);
        //this.y = random(height);
        this.x = x;
        this.y = y;
        this.bias = 1;

        let lineY = f(x);
        this.label = this.y > lineY ? 1 : -1;
        //this.label = this.x > this.y ? 1 : -1;
    }

    getPixelX()
    {
        return map(this.x, -1, 1, 0, width);
    }

    getPixelY()
    {
        return map(this.y, -1, 1, height, 0);
    }

    show()
    {
        stroke(0);

        if(this.label == 1)
        {
            fill(255);
        }
        else
        {
            fill(0);
        }

        //ellipse(this.x, this.y, 16, 16);
        ellipse(this.getPixelX(), this.getPixelY(), 16, 16);
    }
}