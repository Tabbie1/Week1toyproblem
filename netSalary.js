// introdude a function named salaryPayment with its parameters being basicSalary and benefits
//declare nssf, nhif, and payee using let
function salaryPayment(basicSalary,benefits){

    const grossSalary= (basicSalary+benefits);
    
    let nssf = 0;
    let nhif=0;
    let payee=0;
// introduce conditions for nssf
    if (grossSalary<=18000){
        nssf = 0.06 * grossSalary
   }
   else{
       nssf=1080;
   }
     
}