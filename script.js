window.onload=()=>{
    let btnMenu=document.querySelector("#menu")
    let contenido=document.querySelector("#container")
    let clk=true;
    btnMenu.onclick=(e)=>{
        e.preventDefault()
        if(clk){
            contenido.style.cssText="width:calc(70px*6)"
            clk=false
        }else{
            contenido.style.cssText="width:calc(70px*1)"
            clk=true
        }
    }
}