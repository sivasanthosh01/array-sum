var sum=[10,25,15,30,12,8,5];
var a=0;
var b;
document.write("array values:&nbsp;"+sum+"<br>");
for(let i=0;i<sum.length;i++)
{
	a=a+sum[i];
	b=a/sum.length;
	console.log(a);
}
document.write("sum of array=&nbsp;"+a+"<br>");
document.write("average=&nbsp;"+b);