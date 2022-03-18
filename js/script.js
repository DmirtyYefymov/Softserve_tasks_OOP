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
    nameIncludes() {
        return stud1.hasOwnProperty('fullName');
    }
    get direction () {
        return this._direction;
    }
    set direction (value) {
        this._name = value;
    }
    showCourse() {
        return  2022 - this.year;
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
class Worker extends Student {
    constructor(fullName, dayRate, workDays, _experience) {
        super(fullName);
        this.dayRate = dayRate;
        this.workDays = workDays;
        this._experience = 1.2;
    }
    showSalary () {
        return this.dayRate * this.workDays;
    }
    get showSalaryWithExperience () {
        return this._experience * (this.dayRate * this.workDays);
    }
    get setExp () {
        return this._experience;
    }
    set setExp (num) {
        this._experience = num;
    }
}


const worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);
console.log("New experience: " + worker1.setExp);
console.log("John Johnson salary: " + worker1.showSalaryWithExperience);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.setExp);
console.log("John Johnson salary: " + worker1.showSalaryWithExperience);

const worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName);
console.log("New experience: " + worker2.setExp);
console.log("Tom Tomson salary: " + worker2.showSalaryWithExperience);
worker2.setExp = 1.5;
console.log("New experience: " + worker2.setExp);
console.log("Tom Tomson salary: " + worker2.showSalaryWithExperience);

const worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker3.fullName);
console.log("New experience: " + worker3.setExp);
console.log("Andy Ander salary: " + worker3.showSalaryWithExperience);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.setExp);
console.log("Andy Ander salary: " + worker3.showSalaryWithExperience);


class WorkersCollection extends Student {
    constructor(list = [], _experience) {
        super(_experience);
        this.list = list;
    }
    add(worker) {
      this.list.push(worker);
    }
    getSorted() {
      const el = document.querySelector('ol');
      el.innerText = '';
      this.list.sort((a, b) => a.showSalaryWithExperience - b.showSalaryWithExperience);
      this.list.forEach(worker => el.insertAdjacentHTML(
        'beforeend',
        `<li>${worker.fullName} salary: ${worker.showSalaryWithExperience}</li>`
      ));
    }
  }

  const collection = new WorkersCollection();
  
  collection.add(new Worker("John Johnson", 20, 23));
  collection.add(new Worker("Tom Tomson", 48, 22));
  collection.add(new Worker("Andy Ander", 29, 23));
  
  collection.getSorted();


