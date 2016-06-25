
'use strict'

class Emp{
    constructor(name, surname, ptrnmc, zpt){
        this.name = name;
        this.surname = surname;
        this.ptrnmc = ptrnmc;
        this.zpt = zpt;
    }

    middleMonthSalary(){
        return (this.zpt)*12/12;
    }
}


class EmpWithHourlySalary extends Emp{
    constructor(name, surname, ptrnmc, zpt, zptInHour){
      super(name, surname, ptrnmc, zpt);
      this.zptInHour = zptInHour;
    }
    middleMonthSalary(){
        return (this.zptInHour)*8*2.8;
    }

}

class  EmpWithFixedSalary extends Emp{
    constructor(name, surname, ptrnmc, zpt){
        super(name, surname, ptrnmc, zpt);
    }
    middleMonthSalary(){
        return (this.zpt)*8*2.8;
    }
}

/*var rab3 = new EmpWithFixedSalary('Ivan','Bobrow','Oreshkin',100000);
var rab4 = new  EmpWithHourlySalary('Bogdan','Bovram','Chepottle',0,100);
var rab = new Emp('gog', 'gg','ggg',100000);
console.log('test: '+rab.name+" "+rab.zpt+" "+rab.middleMonthSalary());
console.log('test: '+rab3.name+" "+rab3.zpt+" "+rab3.middleMonthSalary());
console.log('test: '+rab4.name+" "+rab4.zptInHour+" "+rab4.middleMonthSalary());*/


/*
console.log(employeers[1].name);
*/
var employeers = [];
function inObjs(data) {
    var employs = [];
    for(var i = 0;i<data.length;i++){
        employs[i] = JSON.parse(data[i]);
    }
    for(var j = 0;j<employs.length;j++){
        employeers[j] = employs[j];
    }
}

$.ajax({

    url: 'getListOfAllWorkers.php',
    type: 'get',
    success: function(data){
        inObjs(data);
    }

});
$('.underbody').append(employeers);
