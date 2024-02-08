let InputNumbers = document.getElementById('Input');
let OutputNumber = document.getElementById('Out');


 function DisplayNumber(value){
    InputNumbers.innerHTML+= value;
 }

function equal(){
   try{
      let result= eval(InputNumbers.innerHTML); 
      if(result !== undefined){
         OutputNumber.innerHTML = result ;

      }
      else{
         OutputNumber.innerHTML = 'Error';
      }

   }
   catch(error){
      OutputNumber.innerHTML = 'Error';

   }

   
}
function squareRoot(){
   try{
      let sqRoot = eval (Math.sqrt(InputNumbers.innerHTML));
      if(sqRoot !== undefined){
         OutputNumber.innerHTML = sqRoot;

      }
      else{
         OutputNumber.innerHTML = 'Error';
      }

   }
   catch(error){
      OutputNumber.innerHTML = 'Error';
   }
   

}

function square(){
   try{
      let InputValue = InputNumbers.innerHTML;
      let Val = InputValue ** 2;
      if(Val !== undefined){
         OutputNumber.innerHTML = Val;

      }
      else{
         OutputNumber.innerHTML = 'Error';

      }

   }
   catch(error){
   
         OutputNumber.innerHTML = 'Error';
   }
 
 

  

}
function ClearOneDigit(){
   let InputNumbr = InputNumbers.innerHTML;
    Array.InputNumbr = InputNumbr.slice(0,-1);
    InputNumbers.innerHTML = Array.InputNumbr;

}


function Clear(){
   InputNumbers.innerHTML="";
   OutputNumber.innerHTML="";

}




