// class 
class Office {
    constructor(name, type, location, employeeCount, ceoName){
        this.name = name;
        this.type = type;
        this.location = location;
        this.employeeCount = employeeCount;
        this.ceoName = ceoName
    }

    companyDetails(){
        return `This is a ${this.type} company. Which name is ${this.name}. It has ${this.employeeCount} employee`
    }

    employeeResponsibility(employType){
        switch (employType) {
            case 'developer':
                return `Developers are develop modern software`;
        
            case 'hr&admin':
                return `Hr & Admin maintain overall setution in office`;
        
            case 'director':
                return `It's an important role of any corporate office. Director controlled every sector of the office`;
        
            default:
                return 'employee type not exist! Give employee type';
        }
    }

    calledCEO(){
        return `${this.name}'s honorable CEO name is ${this.ceoName}`
    }
}

// console.log(Office)

const universeOffice = new Office('Universe Soft Care', 'Software Company', 'Merul Badda', 10, 'Md Golam Kibria Shuvo')

console.log(universeOffice.employeeResponsibility('developer'))
console.log(universeOffice.calledCEO())

// inheritance...

class Person extends Office{
    constructor(ceoName, personAge){
        super(ceoName)
        this.personAge = personAge;
    }

    calledCEO(){
        return `Hey ${this.ceoName}`
    }

}

const person1 = new Person('Md Golam Kibria Shuvo', 28);
console.log(person1.calledCEO())

