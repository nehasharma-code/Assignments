
// Program to check whether user is eligible to get the loan or not

// * When Income and debtToIncomeRatio are considered as number

customerInformation(720,55000.0,true,35,"John Doe");

function customerInformation (creditScore:number, income :number, isEmployed :boolean,debtToIncomeRatio:number,customerName :string):void 
{ 
  if(creditScore>750)
{
    console.log("Congratulations "+ customerName +" Your Loan is Approved");
}
else if (creditScore>=650 && creditScore<=750)
    if(income>=50000)
        if(isEmployed==true)
            if(debtToIncomeRatio<=40)
            {
                console.log("Congratulations "+ customerName +" Your Loan is Approved");
            }
            else{
                console.log("Sorry "+customerName+" Your is Loan is Rejected");
            }
      else 
          {
                console.log("Sorry "+customerName+" Your Loan is Rejected");

           }
   else 
  {
    console.log("Sorry "+customerName+" Your Loan is Rejected");

  }
    else 
  {
    console.log("Sorry "+customerName+" Your Loan is Rejected");

  }

} 
 
// * When Income and debtToIncomeRatio are considered as string

/* customerInformation(720,"$55,000.0",true,"35%","John Doe");

function customerInformation (creditScore:number, income :string, isEmployed :boolean,debtToIncomeRatio:string,customerName :string):void 
{ 
  if(creditScore>750)
{
    console.log("Congratulations "+ customerName +" Your Loan is Approved");
}
else if (creditScore>=650 && creditScore<=750)
    if(income>='$50000')
        if(isEmployed==true)
            if(debtToIncomeRatio<='40%')
            {
                console.log("Congratulations "+ customerName +" Your Loan is Approved");
            }
            else{
                console.log("Sorry "+customerName+" Your is Loan is Rejected");
            }
      else 
          {
                console.log("Sorry "+customerName+" Your Loan is Rejected");

           }
   else 
  {
    console.log("Sorry "+customerName+" Your Loan is Rejected");

  }
    else 
  {
    console.log("Sorry "+customerName+" Your Loan is Rejected");

  }

}

 */
