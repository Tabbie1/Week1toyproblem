//write a function named speedDetector with a parameter named reading
function speedDetector(reading){
// add first condition
    if (reading<70){
        return 'OK';
    }
    

    else{
        // introduce a condition where speed is>70, where 70 is the readingLimit.
    //demeritPoints are calculated for every 5 readings above 70
        
        const readingLimit = 70;
        let demeritPoints = 0;
            const excessSpeed = reading - readingLimit;
            demeritPoints = Math.floor(excessSpeed / 5)
        
        //Calculate demeritPoints if speed>70. However, the demeritPoints should be less than 12
        if (demeritPoints > 0 && demeritPoints<12) {
            return`Points: ${demeritPoints}`;

        } 
        //add condition for demeritPoints >12 points 
        else if(demeritPoints>=12){
            return 'License suspended';
        }
        //add a condition for readingLimit>70 but <75
        else {
            return "Ok";
        }

    }

   
}
console.log(speedDetector(135));


