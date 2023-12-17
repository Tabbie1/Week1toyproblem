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
        }



   
}


