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
     
//introduce conditions and ranges for payee
   if (taxablePay<=24000){
    payee=0.01*taxablePay;
}
else if(taxablePay>=24001 && taxablePay<=32333){
    payee=0.25*taxablePay;
}
else if(taxablePay>=32334 && taxablePay<=500000){
  
    payee=0.3*taxablePay;
  
}
else if(taxablePay>=500001 && taxablePay<=800000){
    payee=0.325*taxablePay;
}
else {
    payee=0.35*taxablePay;
}


}