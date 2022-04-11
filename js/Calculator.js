class Calculator {
    constructor() {
        this.handleNumber = (event) => {
            const number = event.target.textContent;
            if (this.lastEquals) {
                this.first = '';
                this.lastEquals = false;
            }
            if (this.operator.length) {
                this.second += number;
                this.setResultElement(this.second);
            }
            else {
                this.first += number;
                this.setResultElement(this.first);
            }
        };
        this.handleOperator = (event) => {
            if (!this.first.length)
                return;
            if (this.second.length) {
                this.handleEquals();
            }
            const operator = event.target.textContent;
            this.lastEquals = false;
            this.operator = operator;
        };
        this.handleEquals = () => {
            if (!this.first.length || !this.second.length)
                return;
            const first = parseFloat(this.first);
            const second = parseFloat(this.second);
            switch (this.operator) {
                case '+':
                    this.result = first + second;
                    break;
                case '-':
                    this.result = first - second;
                    break;
                case 'x':
                    this.result = first * second;
                    break;
                case '/':
                    this.result = second === 0 ? 0 : first / second;
                    break;
            }
            this.resultElement.textContent = this.result.toString();
            this.first = this.result.toString();
            this.second = '';
            this.lastEquals = true;
        };
        this.handleDelete = () => {
            if (this.second.length) {
                this.second = this.second.slice(0, -1);
                this.setResultElement(this.second);
            }
            else if (this.first.length) {
                this.first = this.first.slice(0, -1);
                this.setResultElement(this.first);
            }
        };
        this.handleReset = () => {
            this.result = 0;
            this.first = '';
            this.second = '';
            this.operator = '';
            this.lastEquals = false;
            this.setResultElement(this.first);
        };
        this.numbers = document.querySelectorAll('.number');
        this.operators = document.querySelectorAll('.operator');
        this.equals = document.querySelector('.equal');
        this.resultElement = document.querySelector('.calc_result');
        this.deleteChar = document.querySelector('.delete');
        this.reset = document.querySelector('.reset');
        this.result = 0;
        this.first = '';
        this.second = '';
        this.operator = '';
        this.lastEquals = false;
        this.setupListeners();
    }
    setupListeners() {
        this.numbers.forEach((item) => {
            item.addEventListener('click', this.handleNumber);
        });
        this.operators.forEach((item) => {
            item.addEventListener('click', this.handleOperator);
        });
        this.equals.addEventListener('click', this.handleEquals);
        this.deleteChar.addEventListener('click', this.handleDelete);
        this.reset.addEventListener('click', this.handleReset);
    }
    setResultElement(text) {
        console.log(text.length);
        if (!text.length)
            this.resultElement.textContent = '0';
        else
            this.resultElement.textContent = text;
    }
}
export default Calculator;
