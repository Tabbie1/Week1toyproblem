// Create a new function named studentGrade that takes one parameter named score
function studentGrade(score){
    // add the first condition
    if (score>79){
        return 'A';
    }
    // Add the second condition
    else if (score>=60 && score<=79){
        return 'B';
    }
    //add third condition
    else if (score>=49 && score <=59){
        return 'C'
    }
    //add fourth condition
    else if (score>=40 && score <=49){
        return 'D';
    }
    //add last condition
    else if (score<40){
        return 'E';
    }
}