let age = 23;
let score = 68;
let famInc = 100000;
let baseFee = 50000;
let finalFee;
if (age >= 18 && score >= 60) 
{
    console.log("Admission Eligibile");
    
    let hasScholarship = score >= 85 || famInc <= 200000 ? true : false;
    
    if (hasScholarship)
    {
        finalFee = baseFee / 2;
        
    }
    else
    {
        finalFee = baseFee;
    }
    
    console.log(`Fees to be paid is ${finalFee}`);
    
}

else
{
    console.log("No Admission");
}