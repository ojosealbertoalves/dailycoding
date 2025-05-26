function check(){
    const date=new Date()
    const year=date.getFullYear()
    const txtyear=document.getElementById("txtyear")
    const res=document.querySelector('div#res')

    if(txtyear.value.length==0 || Number(txtyear.value)>year){
        window.alert("Check your data")
    }else {
        const fsex=document.getElementById('radsex')
        const age=year-Number(txtyear.value)
        const gender=''
        
        if(fsex[0].checked){
            gender="male"
        } else if(fsex[1].checked){
            gender='female'
        }
    }
}