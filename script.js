let result = document.getElementById("inputext");

let calculate=(number)=>{
    result.value+= number;
}
//Result function 
let Result=()=>{
    try{
        result.value= eval(result.value)
    }
    catch{
        alert("Enter the valid input")
    }
};
//clear function
function clr(){
    result.value= " ";
}
//delete function

function del(){
    result.value=result.value.slice(0,-1);
}