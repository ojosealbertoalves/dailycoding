function load(){
  const msg = window.document.getElementById("msg");
  const img = window.document.getElementById("img");
  const date = new Date();
  const time = date.getHours();
  console.log(time);
  msg.innerHTML = `Now is ${time} hours`;

  if(time>=0 && time<12){
    //Good morning
    img.src="images/morning.png"
    document.body.style.background= '#0000FF'

  }else if(time>=12 && time<18){
     img.src="images/afternoon.png"
     document.body.style.background= '#7FFFD4'

  }else {
      img.src="images/night.png"
      document.body.style.background= '#000000'
  }
}