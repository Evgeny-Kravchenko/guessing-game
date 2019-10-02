class GuessingGame {
    constructor() {
        //Нижний обновляемый диапазон чисел
        this.min = 0;
        //Верхний обновляемый диапазон чисел
        this.max = 0;
        //Предположительное число
        this.number = 0;
    }

    setRange(min, max) {
        //Задаём минимальную начальную границу чисел
        this.min = min;
        //Задаём максимальную начальную границу чисел
        this.max = max;
        //Начинаем поиск с максимального числа
        this.number = max;
    }

    guess() {
        if(this.number === this.max) {
            this.number = this.max - (this.max - this.min)/2
        };
        return this.number;
      
    }

    lower() {
        this.max = this.number;
        this.number = Math.ceil(this.max - (this.max - this.min)/2);
    }

    greater() {
        this.min = this.number;
        this.number = Math.ceil(this.min + (this.max - this.min)/2);
    }
}

module.exports = GuessingGame;
