var student = {
    imgurl:'https://tse1.mm.bing.net/th?id=OIP.8hAwihO-TvaWvffKHwlQmQHaE8&pid=Api&rs=1&c=1&qlt=95&h=220',
    name : 'Jyothi ',
    Age : 18,
    Gender:'Female',
    Class : 'Inter 1stYear',
    College :'Junior College',
    Marks : [66,77,88,99,90,76],
}
var productDetails = () =>{
var mainlitag =document.createElement('li');
mainlitag.setAttribute('class','mainli');
var ultag = document.createElement('ul');
mainlitag.append(ultag);
ultag.setAttribute('class','outerblock');
var litag = document.createElement('li');
litag.innerText =  'Student Details';
litag.setAttribute('class','head');
ultag.append(litag);
var imglitag = document.createElement('li');
var imgtag = document.createElement('img');
imgtag.setAttribute('src',student.imgurl);
imglitag.append(imgtag);
ultag.append(imglitag); 
var litag1 = document.createElement('li');
litag1.innerText =  ` Name: ${student.name}`;
ultag.append(litag1);
var litag2 =document.createElement('li');
litag2.innerText =`Age : ${student.Age}`;
ultag.append(litag2);
var litag3 = document.createElement('li');
litag3.innerText =`Gender : ${student.Gender}`;
ultag.append(litag3);
var litag4 = document.createElement('li');
litag4.innerText = 'Marks :';
var span1 = document.createElement('span');
span1.innerText = ` ${student.Marks[0]},`;
litag4.append(span1);
var span2 = document.createElement('span');
span2.innerText = ` ${student.Marks[1]},`;
litag4.append(span2);
var span3 = document.createElement('span');
span3.innerText = ` ${student.Marks[2]},`;
litag4.append(span3);
var span4 = document.createElement('span');
span4.innerText = ` ${student.Marks[3]},`;
litag4.append(span4);
var span5 = document.createElement('span');
span5.innerText = ` ${student.Marks[4]},`;
litag4.append(span5);
var span6 = document.createElement('span');
span6.innerText = ` ${student.Marks[5]}`;
litag4.append(span6);
ultag.append(litag4);

var litag5 = document.createElement('li');
litag5.innerText =  ` Total: ${total()}`;
ultag.append(litag5);
var litag6= document.createElement('li');
litag6.innerText =  ` Avg: ${avg()}`;
ultag.append(litag6);
var litag7= document.createElement('li');
litag7.innerText =  ` Grade: `;
var sptag= document.createElement('span');
sptag.innerText = grade();
sptag.style.color = 'red';
sptag.style['font-weight'] = 'bold';
sptag.style['font-size'] = '20px';

litag7.append(sptag);

ultag.append(litag7);

document.querySelector('.student').append(mainlitag);
}
var total = () => {
    student.total = 0;
    for(var i = 0;i < student.Marks.length; i++)
    { 
        student.total += student.Marks[i] ;
        
    }
    return student.total;
}
var avg = () => 
{
    total();
    student.avg = parseInt(student.total / student.Marks.length);
    return student.avg;
}
var grade = () => {
    avg();
    if(student.avg >= 45){
        return 'pass';
    }else{
        return 'You got a surpriced';
    }
}
productDetails();