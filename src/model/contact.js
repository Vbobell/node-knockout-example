class Contact {
    constructor(person, phone, cellPhone) {
        let _person = person;
        let _phone = phone;
        let _cellPhone = cellPhone;

        this.getPerson = () => {
            return _person;
        }

        this.getPhone = () => {
            return _phone;
        }

        this.getCellPhone = () => {
            return _cellPhone;
        }

        this.toObject = () => {
            return {
                person: _person.toObject(),
                phone: _phone.toObject(),
                cellPhone: _cellPhone.toObject()
            };
        }
    }
}

module.exports = Contact;