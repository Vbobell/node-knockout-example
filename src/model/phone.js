class Phone {
    constructor(DDD, number, type) {
        let _DDD = DDD;
        let _number = number;
        let _type = type;

        this.getDDD = () => {
            return _DDD;
        }

        this.getNumber = () => {
            return _number;
        }

        this.getType = () => {
            return _type;
        }

        this.toObject = () => {
            return {
                DDD: _DDD,
                number: _number,
                type: _type
            }
        }
    }
}

module.exports = Phone;