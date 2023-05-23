function a(){
    console.log("executando function a")
}
function b(){
    console.log("executando function b")
}
function c(){
    console.log("executando function c")
    b()
    a()
}

c()