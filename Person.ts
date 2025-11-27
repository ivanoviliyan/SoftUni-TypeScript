class Person {
   protected _firstName: string;
   protected lastName: string;
   protected age: number;

   static personsCount = 0;

   constructor(firstName: string, lastName: string, age: number) {
      this._firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      Person.personsCount++;
   }

   get name(): string {
      return `Person name is ${this._firstName} ${this.lastName}`;
   }

   set firstName(newName: string) {
      if (newName.length > 0) {
         this._firstName = newName;
      }
   }

   introduce() {
      return `My name is ${this._firstName} ${this.lastName} and I am ${this.age} years old.`;
   }
}

const person1 = new Person('John', 'Doe', 30);
console.log(person1.introduce());
person1.firstName = 'Tomas';
console.log(person1.name);

const person2 = new Person('John', 'Doe', 35);
const person3 = new Person('John', 'Doe', 35);

console.log(Person.personsCount);
