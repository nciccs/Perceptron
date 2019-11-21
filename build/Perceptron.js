class Perceptron
{
    constructor(n)
    {
        this.weights = [];
        this.lr = 0.1;

        for(let i = 0; i < n; i++)
        {
            this.weights.push(random(-1, 1));
        }
        /*this.weights.push(0.5);
        this.weights.push(-0.5);
        this.weights.push(0);*/
    }

    guess(inputs)
    {
        let sum = 0;
        for(let i = 0; i < this.weights.length; i++)
        {
            sum += inputs[i] * this.weights[i];
        }

        return this.sign(sum);
    }

    guessY(x)
    {
        //let m = this.weights[1] / this.weights[0];
        //let b = this.weights[2];
        let w0 = this.weights[0];
        let w1 = this.weights[1];
        let w2 = this.weights[2];

        return -(w2/w1) - (w0/w1) * x;
    }

    sign(n)
    {
        return n >= 0 ? 1 : -1;
    }

    train(inputs, target)
    {
        let guess = this.guess(inputs);
        let error = target - guess;

        for(let i = 0; i < this.weights.length; i++)
        {
            //weight = weight + delta weight
            this.weights[i] = this.weights[i] + error * inputs[i] * this.lr;
        }
    }
}