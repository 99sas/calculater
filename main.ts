import inquirer from "inquirer";

const answer = await inquirer.prompt([
{
      name:"firstNumber",
      type:"number",
      message:"Enter your first number"   
},
{
      name:"secondNumber",
      type:"number",
      message:"Enter your second number"

},
{
      name:"operator",
      type:"list",
      message:"choose operator",
      choices:["+","-","*","/"] 
},

]);

if(answer.operator ==="+"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator ==="-"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator ==="*"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator ==="/"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("invalid operator");
}