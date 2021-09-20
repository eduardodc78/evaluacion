class RandomArray {

    constructor(elements){
        this.elements = elements;
        this.values = [];
        this.generateArray();
    }

    generateArray() {
        for (let i = 0; i < this.elements; i++) {
            let num = Math.floor(Math.random() * 100) + 1; // numbers between 1 - 100
            this.values.push(num);        
        }
    }

}

module.exports = RandomArray;