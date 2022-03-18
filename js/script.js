'use strict';

// Task 1
class Student {
    constructor (fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName(midleName) {
        return this.fullName + " " + midleName;   
    }
    nameIncludes(data) {
        return this.showFullName().includes(data);
    }
    get direction () {
        return this._direction;
    }
    set direction (value) {
        this._name = value;
    }
    showCourse() {
        const currentCourse = new Date().getFullYear() - this.year;
        if (currentCourse < 1 || currentCourse > 6) throw new Error('Wrong year');
        return currentCourse;
    }
    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }
};

const stud1 = new Student("Ivan Petrenko", "web");
const stud3 = Student.studentBuilder();

console.log(stud1.nameIncludes("Ivan Petrenko"));
console.log(stud3.showFullName(""));

//Task 2
class Person extends Student {
    constructor(fullName, direction, year, midleName) {
        super(fullName, direction, midleName);
        this.year = year;
    }
}

const stud4 = new Person("Ivan Petrenko", "web", 2017);
const stud2 = new Person("Sergiy Koval", "python", 2020);

console.log(stud4.showFullName("Petrovich"));
console.log(stud2.showFullName("Kir"));
console.log(stud4.showCourse());
console.log(stud2.showCourse());


//Task 3
class Worker  {
    #expirience = 1.2;
    constructor(fullName, dayRate, workDays, arr) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workDays = workDays;
        this.arr = arr;
        // arr.push(this);
    }
    getSalary () {
        return this.dayRate * this.workDays;
    }
    getSalaryWithExperience () {
        return this.getSalary() * this.#expirience;
    }

    showWorker() {
        this.arr.sort((a,b) => a.getSalaryWithExperience()>b.getSalaryWithExperience()?1:-1);
        console.log("Sorted by salary");
        this.arr.forEach((el) => console.log(el.fullName + ':' + el.getSalaryWithExperience()));
    }

    showWorkerWithoutExp() {
        this.arr.sort((a,b) => a.getSalary()>b.getSalary()?1:-1);
        console.log("Sorted by salary");
        this.arr.forEach((el) => console.log(el.fullName + ':' + el.getSalary()));
    }

    showSalary() {
        return `${this.fullName} salary : ${this.getSalary()}`;
    }

    showSalaryWithExperience () {
        return `${this.fullName} salary : ${this.getSalary()}`;
    }

    get showExp () {
        return this.#expirience;
    }
    set setExp (num) {
        this.#expirience = num;
    }
}


const worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);
console.log("New experience: " + worker1.setExp);
console.log("John Johnson salary: " + worker1.getSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.setExp);
console.log("John Johnson salary: " + worker1.getSalaryWithExperience());

const worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName);
console.log("New experience: " + worker2.setExp);
console.log("Tom Tomson salary: " + worker2.getSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.setExp);
console.log("Tom Tomson salary: " + worker2.getSalaryWithExperience());

const worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker3.fullName);
console.log("New experience: " + worker3.setExp);
console.log("Andy Ander salary: " + worker3.getSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.setExp);
console.log("Andy Ander salary: " + worker3.getSalaryWithExperience());






