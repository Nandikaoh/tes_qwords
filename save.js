function SaveForm(){
 var name=document.forms['biodata']['nama'].value;
 var surel=document.forms['biodata']['email'].value;
 var phone=document.forms['biodata']['telepon'].value;

 var tabel=document.getElementById('tabelinput');
 var row=tabel.insertRow(1);
 var cell1=row.insertCell(0);
 var cell2=row.insertCell(1);
 var cell3=row.insertCell(2);

 cell1.innerHTML=name;
 cell2.innerHTML=surel;
 cell1.innerHTML=phone;
}