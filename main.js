function clock(){
    let time= new Date();
    let hour=time.getHours();
    let mint=time.getMinutes();
    let sec=time.getSeconds();



document.getElementById("hours").innerHTML = hour+'\n'+' hour';
document.getElementById("mins").innerHTML= mint + '\n' + ' mins';
document.getElementById("secs").innerHTML= sec+ '\n'+' secs';


if(hour>12){
    hour = hour-12;
    document.getElementById("hours").innerHTML = hour+'\n'+ ' hour';
    document.getElementById("ap").innerHTML="PM"
}
else{
document.getElementById("ap").innerHTML="AM";}
}
setInterval(clock);

function valuediv1(){
    // for wakeup
    let values1=document.getElementById("wake-select");
    let valuesMsg1=values1.options[values1.selectedIndex].text;
    document.getElementById("valueMsg1").innerHTML="Wake-Up Time: " + valuesMsg1;

}
function valuediv2(){
        // for party
        let values2=document.getElementById("lunch-select");
        let valuesMsg2=values2.options[values2.selectedIndex].text;
        document.getElementById("valueMsg2").innerHTML="Lunch Time: " + valuesMsg2;
}
function valuediv3(){
    // for nap
    let values3=document.getElementById("nap-select");
    let valuesMsg3=values3.options[values3.selectedIndex].text;
    document.getElementById("valueMsg3").innerHTML="Nap Time: " + valuesMsg3;
}
function valuediv4(){
    // for night
    let values2=document.getElementById("night-select");
    let valuesMsg2=values2.options[values2.selectedIndex].text;
    document.getElementById("valueMsg4").innerHTML="Night Time: " + valuesMsg2;
}

function settime(){
    let one = document.getElementById("wake-select").value;
    let two= document.getElementById("lunch-select").value;
    let three= document.getElementById("nap-select").value;
    let four = document.getElementById("night-select").value;
    let hourr=new Date().getHours();
    

    if(one == hourr){

         document.getElementById("rel_images").style.backgroundImage= "url(./assets/morning.jpg)";
         document.getElementById("message_one").innerHTML="GOOD MORNING BUDDY!!!";
       
    }
    else if(two == hourr){
        document.getElementById("rel_images").style.backgroundImage= "url(./assets/lunch.jpg)";
        document.getElementById("message_one").innerHTML="LUNCH TIME BUDDY!!!";
    }
    else if(three == hourr){
        document.getElementById("rel_images").style.backgroundImage= "url(./assets/evening.jpg)";
        document.getElementById("message_one").innerHTML="GOOD EVENING BUDDY!!!";
    }
    else if(four == hourr){
        document.getElementById("rel_images").style.backgroundImage= "url(./assets/night.jpg)";
        document.getElementById("message_one").innerHTML="GOOD NIGHT BUDDY!!!";
    }
    else{
        document.getElementById("rel_images").style.backgroundImage= "url(./assets/welcome.jpg)";
        document.getElementById("message_one").innerHTML="SET THE ALARAM!!";

    }

    valuediv1();
    valuediv2();
    valuediv3();
    valuediv4();
}

function msg2(){
    var newtime = new Date();
    var hrr = newtime.getHours();
    console.log(hrr);

 if(hrr>=4 && hrr<12){
    document.getElementById("Message_two").innerHTML="I hope your morning is as bright as your smile";
}
else if(hrr>=12 && hrr<16){
    document.getElementById("Message_two").innerHTML="Lunch is a meal eaten around the middle of the day.";
}
else if(hrr>=16 && hrr<20){
  
    document.getElementById("Message_two").innerHTML="Good evening is a little bit more difficult to say exactly what time it starts and ends, You can read more about “good evening” here";
}
else if(hrr>=20 || hrr<4){
    document.getElementById("Message_two").innerHTML="Good Night Sweet Dreams Take Care.";
}


}

msg2();