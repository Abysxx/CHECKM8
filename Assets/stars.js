
//var value = randomIntFromInterval(0,2000)+"px "+randomIntFromInterval(0,2000)+"px #1899ef, "

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function multipleBoxShadow(n)
{

    var value = ""
    var i=0
    while(n > i){
      if(i+1 == n){value += randomIntFromInterval(0,2000)+"px "+randomIntFromInterval(0,2000)+"px #ffffff"}else{value += randomIntFromInterval(0,2000)+"px "+randomIntFromInterval(0,2000)+"px #ffffff, "}
      i+=1
    }
    return value
}
//console.log(multipleBoxShadow(10))

shadowsSmall = multipleBoxShadow(1000) //700 default for 100% height
shadowsMedium = multipleBoxShadow(600) //200 default for 100% height
shadowsBig = multipleBoxShadow(200) //100 default for 100% height

var starStyle = document.createElement("style")
starStyle.innerHTML = `
#stars{
  width: 1px;
  height: 1px;
  border-radius: 5px;
  background: transparent;
  box-shadow: `+shadowsSmall+`;
  animation: animStar 50s linear infinite;}

#stars:after{
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  border-radius: 5px;
  background: transparent;
  box-shadow: `+shadowsSmall+`;}

#stars2{
  width: 2px;
  height: 2px;
  border-radius: 5px;
  background: transparent;
  box-shadow: `+shadowsMedium+`
  animation: animStar 100s linear infinite;}

#stars2:after{
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  border-radius: 5px;
  background: transparent;
  box-shadow: `+shadowsMedium+`;}

#stars3{
  width: 3px;
  height: 3px;
  border-radius: 5px;
  background: transparent;
  box-shadow: `+shadowsBig+`;
  animation: animStar 150s linear infinite;}

#stars3:after{
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  border-radius: 5px;
  background: transparent;
  box-shadow: `+shadowsBig+`;}

@keyframes animStar {
  from {transform: translateY(0px);}
  to {transform: translateY(-2000px);}
}


`
document.head.appendChild(starStyle)
