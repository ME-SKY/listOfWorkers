
'use strict'
 var emps = [];  
var employeers = [];
var temp;

/* alert('begin emps, employeers and temp  '+emps+' '+employeers+' '+temp); */ 	
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
/*  var emps = [];  */
/* var emph = [];
var empf = [];  оказалось ненужной херней*/
/* var empsfix = [];//массив объектов класса работников с фиксированной зп
var emphourly = [];//массив объектов класса работников с почасовой оплатой */ //оказалось ненужной херней
/* var employeers = [];
var temp; */
/* function objs(ind, pr){
	if(pr!=0){
		eval('var emph_'+ind);
	} else {
		eval('var empf_'+ind);
	}
	return;
} */
function inObjs(data) {
	 /* var emps = []; */
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
			}/* alert('after if-else emps all '+ emps); */
		}/* alert('after for y, emps all '+ emps); */
    }
	alert('temp: '+temp);
	alert('emps[0].name, emps[0].middleMonthSalary '+ emps[0].name+' '+emps[0].middleMonthSalary);
	alert('emps[1].name, emps[1].middleMonthSalary '+ emps[1].name+' '+emps[1].middleMonthSalary);
	/* alert('emps[0]: '+ emps[0].name);
	alert('employeers: '+employeers);
	alert('empsfix: '+empsfix);
	$('.underbody').append('<p>work</p>'); */
	alert('emps all '+ emps);
}
   /*  alert(' 2 emps[0].name, emps[0].middleMonthSalary '+ emps[0].name+' '+emps[0].middleMonthSalary);
	alert(' 2 emps[1].name, emps[1].middleMonthSalary '+ emps[1].name+' '+emps[1].middleMonthSalary); */
/* $.ajax({

    url: 'getListOfAllWorkers.php',
    type: 'get',
	dataType:'json',
    success: function(data){
		/* alert(data.name+" data.name"); 
		alert(data[0]+" data0");
		alert(data[1]+" data1");
        inObjs(data);
    }

}); */
/* alert('employeers: '+employeers); */
/* function mainfunc(){
	if (emps === undefined){
		alert('emps не определено');
	} else {
		alert('emps: '+emps);
	}
} */
function allrecords(){
	$('#allrecords'	).click(function(){
		for(var p = 0; p<emps.length; p++){
			$('.underbody').append(emps[p].id+' '+emps[p].name+' '+emps[p].surname+' '+emps[p].ptrnmc+' '+emps[p].zpt+' '+emps[p].hourlyzpt);
		}
		
	});
}
$('.underbody').append('ggggg');
$(document).ready( function(){
	$.ajax({

    url: 'getListOfAllWorkers.php',
    type: 'get',
	dataType:'json',
    success: function(data){
		/* alert(data.name+" data.name"); */
		alert(data[0]+" data0");
		alert(data[1]+" data1");
        inObjs(data);
		//mainfunc();
		alert('in success function '+emps); 
		/* $('.underbody').append(emps[0].name); */
		allrecords();
		}
    });
	//mainfunc();
	/* $('.underbody').append(emps[0].name); */
	/* alert(employeers); */
	/* alert(emps[0].name); */
 /*  $('.underbody').append(emps[0].name); */// вывод всех записей
  /*  alert(emph[0]); */
  /*alert(emph_2);
  alert(emph_0); */
});
/* $('.underbody').append(emps[0].name); */