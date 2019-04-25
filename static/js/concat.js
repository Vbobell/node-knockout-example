class Contact {
    constructor(person, phone, cellPhone) {
        this.person = person;
        this.phone = phone;
        this.cellPhone = cellPhone;
    }
}
class Person {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = new Date(birthDate);
    }

    formatDate() {
        return `${ this.birthDate.getDay() }/${ this.birthDate.getDate() }/${this.birthDate.getFullYear()}`
    }
}
class Phone {
    constructor(DDD, number, type) {
        this.DDD = DDD;
        this.number = number;
        this.type = type;
    }

    formatPhone() {
        return `(${ this.DDD }) ${ this.number }`
    }
}

class ContactController {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    getContact(callback) {
        this.xhr.open('GET', "/node-knockout-example/static/json/contacts.json", true);

        this.xhr.onload = () => {
            this.xhr.status === 200 ? 
            console.log(this.xhr.response) :
            console.error('error');

            return callback(JSON.parse(this.xhr.response));
        };

        this.xhr.send();
    }
}
class ContactView {
    constructor() {
        this.contacts = ko.observableArray([]);
        this.contactController = new ContactController();
    }

    setObservable() {
        this.contactController.getContact(( {contacts} ) => {

            contacts.forEach((contact) => {
                let person = new Person(contact.person.name, contact.person.birthDate);
                let phone = new Phone(contact.phone.DDD, contact.phone.number, contact.phone.type);
                let cellPhone = new Phone(contact.cellPhone.DDD, contact.cellPhone.number, contact.cellPhone.type);
                
                this.contacts.push(new Contact(person, phone, cellPhone));
            });
            
            ko.applyBindings({
                "contacts": this.contacts
            });
        });
    }
}
