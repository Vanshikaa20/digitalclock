function showtime(){
    let d= new Date();
    let h= d.getHours();
    let m= d.getMinutes();
    let s=d.getSeconds();
    var session= document.getElementById("session");
    // if(h>12){
    //     h= h-12;
    //     //13-12=1
    //  }
     if(h>=12){
         session.innerHTML ="PM";
     }
     else{
        session.innerHTML="AM";
     }

     h=h<10? "0"+h : h;
     m=m<10? "0"+m : m;
     s=s<10? "0"+s : s;

    let time= h +":"+ m +":"+ s ; 
    document.getElementsByTagName("h1")[0].innerText=time;

    setTimeout(showtime,1000);
}