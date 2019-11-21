var points;
var brain;

function setup()
{
    // put setup code here
    createCanvas(600, 600);

    points = [];

    for(let i = 0; i < 500; i++)
    {
        points.push(new Point());
    }

    //let inputs = [-1, 0.5];
    brain = new Perceptron(3);
    //let guess = brain.guess(inputs);
}

function draw()
{
    // put drawing code here
    background(175);
    stroke(0);
    //line(0, 0, width, height);
    //line(0, height, width, 0);
    let p1 = new Point(-1, f(-1));
    let p2 = new Point(1, f(1));
    line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());

    push();
    stroke(128);
    strokeWeight(4);
    let p3 = new Point(-1, brain.guessY(-1));
    let p4 = new Point(1, brain.guessY(1));
    line(p3.getPixelX(), p3.getPixelY(), p4.getPixelX(), p4.getPixelY());
    pop();

    for(pt of points)
    {
        pt.show();
    }

    for(pt of points)
    {
        let inputs = [pt.x, pt.y, pt.bias];
        let target = pt.label;
        //brain.train(inputs, target);

        let guess = brain.guess(inputs);
        if(guess == target)
        {
            fill(0, 255, 0);
        }
        else
        {
            fill(255, 0, 0);
        }

        noStroke();
        //ellipse(pt.x, pt.y, 12, 12);
        ellipse(pt.getPixelX(), pt.getPixelY(), 12, 12);
    }

    stroke(0);
    fill(0);
    textSize(32);
    text("weight[0]: " + brain.weights[0], 10, 30);
    text("weight[1]: " + brain.weights[1], 10, 30+32);
}

function mousePressed()
{
    for(pt of points)
    {
        let inputs = [pt.x, pt.y, pt.bias];
        let target = pt.label;

        brain.train(inputs, target);
    }
}

function f(x)
{
    return x + 0.2;
}