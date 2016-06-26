
'use strict'
alert('begin');
class Emp{
    constructor(id,name, surname, ptrnmc, zpt, hourlyzpt){
        this.id = id;
		this.name = name;
        this.surname = surname;
        this.ptrnmc = ptrnmc;
        this.zpt = zpt;
		this.hourlyzpt = hourlyzpt;
    }

    get middleMonthSalary(){
        return (this.zpt)*12/12;
    }
}


class EmpWithHourlySalary extends Emp{
    constructor(id, name, surname, ptrnmc, zpt, hourlyzpt){
      super(id, name, surname, ptrnmc, zpt, hourlyzpt);
      
    }
    get middleMonthSalary(){
        return (this.zpt)*8*2.8;
    }

}

class  EmpWithFixedSalary extends Emp{
    constructor(id, name, surname, ptrnmc, zpt, hourlyzpt){
        super(id, name, surname, ptrnmc, zpt, hourlyzpt);
    }
    get middleMonthSalary(){
        return (this.zpt)*12/12;
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
var emps = [];
var emph = [];
var empf = [];
var empsfix = [];//массив объектов класса работников с фиксированной зп
var emphourly = [];//массив объектов класса работников с почасовой оплатой
var employeers = [];
var temp;
/* function objs(ind, pr){
	if(pr!=0){
		eval('var emph_'+ind);
	} else {
		eval('var empf_'+ind);
	}
	return;
} */
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
				/* var prprty = 1; */
				
				/* eval("var emph_"+i+"="+ */  temp =  new EmpWithHourlySalary(employeers[y][0],
																employeers[y][1],
																employeers[y][2],
																employeers[y][3],
																employeers[y][4],
																employeers[y][5]);
				emps[y] = temp;
				/* alert('temp.name: '+temp.name);
				alert('emph[y].name and y  and middleMonthSalary '+emph[y].name+' '+y+' '+ emph[y].middleMonthSalary); */
				
			    /*  alert(y);
				 alert(emph_1);
				 alert(emph_2); */
			} else {
				temp =  new EmpWithFixedSalary(employeers[y][0],
																employeers[y][1],
																employeers[y][2],
																employeers[y][3],
																employeers[y][4],
																employeers[y][5]);
				emps[y] = temp;
			}
		}
    }
	alert('temp: '+temp);
	alert('emps[0].name, emps[0].middleMonthSalary '+ emps[0].name+' '+emps[0].middleMonthSalary);
	alert('emps[1].name, emps[1].middleMonthSalary '+ emps[1].name+' '+emps[1].middleMonthSalary);
	/* alert('emps[0]: '+ emps[0].name);
	alert('employeers: '+employeers);
	alert('empsfix: '+empsfix);
	$('.underbody').append('<p>work</p>'); */
}

$.ajax({

    url: 'getListOfAllWorkers.php',
    type: 'get',
	dataType:'json',
    success: function(data){
		/* alert(data.name+" data.name"); */
		alert(data[0]+" data0");
		alert(data[1]+" data1");
        inObjs(data);
    }

});
/* alert('employeers: '+employeers); */
$('.underbody').append('ggggg');
$(document).ready( function(){
  $('.underbody').append(employeers);// вывод всех записей
  /*  alert(emph[0]); */
  /*alert(emph_2);
  alert(emph_0); */
});
