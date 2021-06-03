//CONSTRUCTOR FUNCTION




//CALL BACK FUNCTION
//===================



//PARAMETRES VS ARGUMENTS
//========================
    // Basic function with three parameters that logs the sum of all the parameters
    function argCheck(parameter1, parameter2, parameter3){
    console.log(parameter1 + parameter2 + parameter3);
    }
  
    // Function with extra arguments
    argCheck(1,2,3,4);
    // Logs 6 (1 + 2 + 3, ignores 4)
  
    // Function with missing arguments
    argCheck(1,2);
    /* Logs NaN because by default if a corresponding argument is missing, it is set to undefined. 
    parameter3 is assigned undefined and so 1+2+undefined = NaN*/