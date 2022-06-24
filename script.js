const opr = prompt("operator:+-*/")
const num1 = parseInt(prompt("number 1: "))
const num2 = parseInt(prompt("number 2: "))

if( opr == "+")
{
    console.log(num1 + num2)
} else if(opr =="-")
{
    console.log(num1-num2)
}else if(opr == "*")
{
    console.log( num1 * num2)
}else if(opr == "/")

{
    console.log(num1 / num2)
}
