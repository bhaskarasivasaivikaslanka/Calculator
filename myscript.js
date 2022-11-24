var opr = prompt("Operator: ")
var num1 =parseInt(prompt("Number 1: "))
var num2 =parseInt(prompt("Number 2: "))
 
if(opr == "+")
{
    alert(num1 + num2)
} else if (opr == "-")
{
    alert(num1-num2)
}else if (opr == "*")
{
    console.log(num1*num2)
}else if (opr == "/")
{
    console.log(num1/num2)
}
else if (opr == "x")
{
    console.log(Math.sqrt(num1))
}