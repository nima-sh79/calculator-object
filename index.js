const calculator = {
    firstNumber: +prompt('first'),
    operator: prompt('operator'),
    secondNumber: +prompt('second'),
    result: 0,
    mashin: function () {
        switch (this.operator) {
            case '*':
                this.result = this.firstNumber * this.secondNumber;
                break;
                case '+':
                this.result = this.firstNumber + this.secondNumber;
                break;
                case '/':
                this.result = this.firstNumber / this.secondNumber;
                break;
                case '-':
                this.result = this.firstNumber - this.secondNumber;
                break;
            default:
                this.result= 000;
                break;
        };
    },
   
    show: function () {console.log(this.result)},   
};
calculator.mashin();
calculator.show();

