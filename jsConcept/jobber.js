/**
 * Created by mesky on 24.06.16.
 */
function Employee(name, surname, ptrnmc, zpt) {
   this.name = name;
   this.surname = surname;
   this.ptrnmc = ptrnmc;
   this.zpt = zpt;
   this._midMounthSalary;
}
/*Employee.prototype.hello = function () {
    console.log('hello, i m employer');
};*/
Employee.prototype.middleMonthSalary = function () {
    this._midMonthSalary = (this.zpt)*10/12;
    return this._midMonthSalary;
};

/*Jobber1 = new Employee();
Jobber1.Name = 'Igor';
console.log(Jobber1.Name);*/
/*var animal = new Employee();
animal.hello();*/


/* потомок с почасовой заработной платой*/
function EmpWithHourlySalary(hourZpt) {
    this.hourZpt = hourZpt;
    Employee.apply(this, arguments);
    //this.hourZpt = hourZpt;
}
EmpWithHourlySalary.prototype = Object.create(Employee.prototype);
EmpWithHourlySalary.prototype.constructor = EmpWithHourlySalary;

EmpWithHourlySalary.prototype.middleMonthSalary = function (hourZpt) {
   this._midMonthSalary =  (this.hourZpt)*8*2.8;
    return this._midMonthSalary;
};

/* потомок с fixed заработной платой*/
function EmpWithFixedSalary(hourZpt) {
    this.hourZpt = hourZpt;
   // Employee.apply(this, arguments);
    //this.hourZpt = hourZpt;
}
EmpWithFixedSalary.prototype = Object.create(Employee.prototype);
EmpWithFixedSalary.prototype.constructor = EmpWithFixedSalary;

EmpWithFixedSalary.prototype.middleMonthSalary = function (zpt) {
    this._midMonthSalary =  this.zpt;
    return this._midMonthSalary;
};

var rab = new Employee('Nik','Gordon','Free', 500);
var rab2 = new EmpWithHourlySalary(22,'d');
console.log(rab.middleMonthSalary()+"  "+rab.name+" "+rab.zpt);
console.log(rab2.middleMonthSalary()+"  "+rab2.name+" "+rab2.zpt);