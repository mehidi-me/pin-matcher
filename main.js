//generate new number
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
     let randomNumber = Math.random() *  9999;
     randomNumber =  Math.round(randomNumber);
     if(randomNumber > 999){
          document.getElementById("generate-input").value =randomNumber;   
     } 
     document.getElementById("try").innerText= 3 ;
     document.getElementById("submit-Btn").disabled = false;                                    
     document.getElementById("submit-Btn").style.color="white";
     document.getElementById("submit-input").value=' ';
     document.getElementById("match").style.display="none";
     document.getElementById("try-Left").innerText='Try left';
     document.getElementById("try").style.display="inline";
     document.getElementById("not-Match").style.display="none";
     document.getElementById("submit-Btn").style.display="inline";
     document.getElementById("clearBtn").style.color="white"; 
     document.getElementById("clearBtn").style.backgroundColor= "#425062";
})
//number submit btn 
function submitValue(number){
     const numberValue = document.getElementById("submit-input").value;
     const numberValueAdd = numberValue + number;
     const submitValue = document.getElementById("submit-input").value=numberValueAdd;
     return submitValue;
} 
//submit btn 
 const  clickSubmitBtn = document.getElementById("submit-Btn");
  clickSubmitBtn.addEventListener("click", function(){
     let getGenerateInput = document.getElementById("generate-input").value;
     let getGenerateInputs = parseFloat(getGenerateInput);
     let getSubmitInput = document.getElementById("submit-input").value;
     let getSubmitInputs = parseFloat(getSubmitInput);

     if(getSubmitInput == 0  ||  getGenerateInput == 0  ){
          document.getElementById("try-Left").innerText='Generate Number first or  Write Number ';
          document.getElementById("try").style.display="none";
         }
     else if ( getSubmitInput > 10000 ||  getSubmitInput < 1000 ){
          document.getElementById("try-Left").innerText='Write  4 Number ( first number 0 is not acceptable ) ';
          document.getElementById("try").style.display="none";
          document.getElementById("submit-Btn").disabled = true;    
          document.getElementById("clearBtn").style.backgroundColor= "grey";
     }
     else {
          if (getGenerateInputs == getSubmitInputs) {
               checkMatching();
           }
          else{
               checkTry();
          }
          }
})
//clear btn 
const clearBtn = document.getElementById("clearBtn");
 clearBtn.addEventListener("click", function(){

     const notMatcher =document.getElementById("not-Match");
     notMatcher.style.display="none";
     const matcher =document.getElementById("match");
     matcher.style.display="none";

     document.getElementById("submit-input").value = ' ';
     document.getElementById("try-Left").innerText='Try left';
     document.getElementById("try").style.display="inline";
     document.getElementById("submit-Btn").style.color="white";
     document.getElementById("submit-Btn").disabled = false;        
     document.getElementById("clearBtn").style.backgroundColor= "#425062";

}
 )
 //remove last number in input value 
 const removeBtn = document.getElementById("remove-btn");
 removeBtn.addEventListener("click", function(){
     let submitNumber = document.getElementById("submit-input").value;
     submitNumber = submitNumber.toString();
    const  getSubmitValue = submitNumber.substring(0, submitNumber.length - 1);
    document.getElementById("submit-input").value = getSubmitValue;
 }
 )
//check its match or not 
function checkMatching(){
     const matcher =document.getElementById("match");
     matcher.style.display="block";
     const matcherNot =document.getElementById("not-Match");
     matcherNot.style.display="none";
}
//check how many times left
function checkTry(){
     const matcherNot =document.getElementById("not-Match");
     matcherNot.style.display="block";
     const matcher =document.getElementById("match");
     matcher.style.display="none";

     let getTryText = document.getElementById("try").innerText;
     let  totalChance = getTryText-1  ;
     let totalChanceValue =  document.getElementById("try").innerText= totalChance ;

   if(totalChance == 0){
     document.getElementById("clearBtn").disabled = true;      
     document.getElementById("try").innerText= 'Start Again, Click Generate Button' + ", " + totalChanceValue;
     document.getElementById("submit-Btn").disabled = true;
     document.getElementById("submit-Btn").style.display="none";
}}