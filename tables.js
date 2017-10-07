flag=1;
function AddItem(Name,Price)
{ for (var i=1;i<=73;i+=10)
{if(document.getElementById(i).innerHTML.match(Name))
{     var Item=parseInt(document.getElementById(i+1).innerHTML);
		Item+=1;
		document.getElementById(i+1).innerHTML=Item;
		Price*=Item;
		document.getElementById(i+2).innerHTML=Price;
		flag=0;}
else if(document.getElementById(i).innerHTML==""&&flag==1)
{ document.getElementById(i).innerHTML=Name;
document.getElementById(i+1).innerHTML=1;
document.getElementById(i+2).innerHTML=Price;  break;}}
flag=1;
var Total=0;
for(var j=3;;j+=10)
{ Total+=parseInt(document.getElementById(j).innerHTML);
if(document.getElementById(j+10).innerHTML=="")
{document.getElementById("83").innerHTML=Total;
 break;
 }}}
function RemoveItem(R1,R2,R3)
{
if(document.getElementById(R2).innerHTML==1)
{document.getElementById(R1).innerHTML="";
document.getElementById(R2).innerHTML="";
document.getElementById(R3).innerHTML="";  
for(var i=parseInt(R1);;i+=10)
{document.getElementById(i).innerHTML=document.getElementById(i+10).innerHTML;
document.getElementById(i+1).innerHTML=document.getElementById(i+11).innerHTML;
document.getElementById(i+2).innerHTML=document.getElementById(i+12).innerHTML;
if(document.getElementById(i+10).innerHTML==""){break;}}}
else if(document.getElementById(R2).innerHTML!=""){
var Item=parseInt(document.getElementById(R2).innerHTML);
var Price=parseInt(document.getElementById(R3).innerHTML); 
Price/=Item;
Item-=1;
document.getElementById(R2).innerHTML=Item;
Price*=Item;
document.getElementById(R3).innerHTML=Price;}
var Total=0;
for(var j=3;;j+=10)
{ Total+=parseInt(document.getElementById(j).innerHTML);
if(document.getElementById(j+10).innerHTML=="")
{document.getElementById(83).innerHTML=Total;
if(document.getElementById(1).innerHTML=="")
{(document.getElementById(83).innerHTML="");}
 break;}}}

