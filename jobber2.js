
'use strict'
alert('dd');
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
//var emps = new Emp[];
var empsfix = [];//массив объектов класса работников с фиксированной зп
var emphourly = [];//массив объектов класса работников с почасовой оплатой
var employeers = [];
function inObjs(data) {
    var employs = [];
    for(var i = 0;i<data.length;i++){
        employs[i] = data[i];
		//alert('employs: '+employs[i]);
    }//alert('employs: '+employs);
    for(var j = 0;j<employs.length;j++){
        employeers[j] = employs[j];
		for(var y = 0;y<employeers.length;y++){
			if(employeers[y][5]!=0){
				emphourly[y] = employeers[y];
			} else {
				empsfix[y] = employeers[y];
			}
		}
    }
	
	alert('emphourly: '+emphourly);
	alert('empsfix: '+empsfix);
	$('.underbody').append(employeers);
}

$.ajax({

    url: 'getListOfAllWorkers.php',
    type: 'get',
	dataType:'json',
    success: function(data){
		alert(data.name+" data.name");
		alert(data[0]+" data0");
		alert(data[1]+" data1");
        inObjs(data);
    }

});
alert('employeers: '+employeers);
$('.underbody').append(employeers);
