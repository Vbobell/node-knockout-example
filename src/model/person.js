class Person {
    constructor(name, birthDate) {
        let _name = name;
        let _birthDate = birthDate;

        this.setName = (name) => {
            _name = name;
        }

        this.getName = () => {
            return _name;
        }

        this.setBirthDate = (birthDate) => {
            _birthDate = birthDate;
        }

        this.getBirthDate = () => {
            return _birthDate;
        }

        this.toObject = () => {
            return {
                name: _name,
                birthDate: _birthDate
            }
        }
    }
}

module.exports = Person;