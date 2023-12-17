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
const taxablePay = grossSalary-nssf

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
// introduce conditions and ranges for nhif
if (grossSalary<=5999){
    nhif=150;
}
else if(grossSalary>=6000 && grossSalary<=7999){
    nhif=300;
}
else if(grossSalary>=8000 && grossSalary<=11900){
    nhif=400;
}
else if(grossSalary>=12000 && grossSalary<=14999){
    nhif=500;
}
else if(grossSalary>=15000 && grossSalary<=19999){
    nhif=600;
}
else if(grossSalary>=20000 && grossSalary<=24999){
    nhif=750;
}
else if(grossSalary>=25000 && grossSalary<=29999){
    nhif=850;
}

else if(grossSalary>=30000 && grossSalary<=34999){
    nhif=900;
}
else if(grossSalary>=35000 && grossSalary<=39999){
    nhif=950;
}
else if(grossSalary>=40000 && grossSalary<=44999){
    nhif=1000;
}
else if(grossSalary>=45000 && grossSalary<=49999){
    nhif=1100;
}
else if(grossSalary>=50000 && grossSalary<=59999){
    nhif=1200;
}
else if(grossSalary>=60000 && grossSalary<=69999){
    nhif=1300;
}
else if(grossSalary>=70000 && grossSalary<=79999){
    nhif=1400;
}
else if(grossSalary>=80000 && grossSalary<=89999){
    nhif=1500;
}
else if(grossSalary>=90000 && grossSalary<=99999){
    nhif=1600;
}
else {
    nhif=1700;
}


//The final, overall output that is displayed upon searching 
const netSalary= grossSalary -(payee+nhif+nssf);

return `
        Payee       : ${payee},
        NHIF        : ${nhif},
        NSSF        : ${nssf},
        Gross Salary: ${grossSalary},
        Net Salary  : ${netSalary}`


}

console.log(salaryPayment(50000,10000));
