var nm=prompt("What is your name?");
while(nm == null || nm == "") 
{
nm = prompt("What is your name?")
}
alert("Make sure volume is turned on.And ignore console error due to API.")
var text; 

window.onload=function(){
var cn=0;
var q='';
var tk=new Date()
var tt=tk.getHours();
if(tt<=9)
{

text="Hello " +nm+ " Good Morning.";
   pr(text)


}
else if(tt>9 && tt<=15)
{
    
    text="Hello " +nm+ " Good AfterNoon." ;
    pr(text);

}
else if(tt>=16 && tt<=17)
{
    
    text="Hello " +nm+ " Good afternoon." ;
    pr(text);
    
}
else if(tt>=18 && tt<=21)
{
    
    text="Hello " +nm+ " Good evening." ;
    pr(text);
    
}
else if(tt>=22)
{
    
    text="Hello " +nm+ " Good Night." ;
    pr(text);
}

}

function ro()
{
    document.getElementsByTagName("i")[0].style.display="none";
    
    var com=no.value;
    com=com+" ";
    var len=com.length;

    var wo=[];
    var w="";var q=0;
    for(var i=0;i<len;i++)
    {
      
        if(com.charAt(i)==" "||com.charAt(i)=="?")
        { 
        
            wo[q]=w;
            
            w="";
            q++;
        }
        else
        {
              w=w+com.charAt(i);
        }
    }
    var flag=0;
    for(var i=0;i<q;i++)
    {
        
        if(wo[i]==="date" || wo[i]==="Date")
        {
          var today = new Date(); var dd = today.getDate(); 
          var mm = today.getMonth()+1; 
          var yyyy = today.getFullYear(); 
          if(dd<10) 
          { dd = '0'+dd }
          if(mm<10) 
          { mm = '0'+mm } 
          today = dd + '/' + mm + '/' + yyyy; 
        flag=2; document.getElementById('ans').innerHTML="Today's date is " +today;
        text="Today's date is " +today;
        responsiveVoice.speak(text);
    }
    else if(wo[i]==="time" || wo[i]==="Time")
    {
       flag=2;
       var time= new Date();
       var t=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
       document.getElementById('ans').innerHTML="Current Time is " +t;
       text="Current Time is " +t;
       responsiveVoice.speak(text);
    }
    else if(wo[i]==="Hello" || wo[i]==="hello"||wo[i]==="Hi"||wo[i]==="hi"||wo[i]==="HI"||wo[i]==="name"||wo[i]==="Name"||wo[i]==="HELLO"||wo[i]==="NAME")
    {   
    flag=2; document.getElementById('ans').innerHTML="Hello "+nm+" My Name is Corona. i'm Your Virtual Assistant.";
    text="Hello "+nm+"My Name is Corona. i'm Your Virtual Assistant.";
    responsiveVoice.speak(text);
    
    }
    else if(wo[i]==="Age" || wo[i]==="age"||wo[i]==="old")
    {   
    flag=2; document.getElementById('ans').innerHTML="Supriya: My age "+nm+"? I'm 1 year old. It's Static";
    text="My age "+nm+"? I'm 1 year old. It's Static";
    responsiveVoice.speak(text);
    
    }

    else if(wo[i]==="LITTLE" || wo[i]==="WOMAN"||wo[i]==="old")
    {   
    flag=2; document.getElementById('ans').innerHTML="Supriya: Because I can be measured with 15 centimeter scale";
    text="Because I can be measured with 15 centimeter scale";
    responsiveVoice.speak(text);
    
    }
    else if(wo[i].charAt(0)=='0'||wo[i].charAt(0)=='1'||wo[i].charAt(0)=='2'||wo[i].charAt(0)=='3'||wo[i].charAt(0)=='4'||wo[i].charAt(0)=='5'|| wo[i].charAt(0)=='6'||
wo[i].charAt(0)=='7'||wo[i].charAt(0)=='8'||wo[i].charAt(0)=='9')
{
    var l=wo[i].length;
    
    for(var j=0;j<l;j++)
    {
        if(wo[i].charAt(j)=='+'||wo[i].charAt(j)=='-'||wo[i].charAt(j)=='*'||wo[i].charAt(j)=='/'||wo[i].charAt(j)=='%'||
        wo[i].charAt(j)=='^')
        {
            cn=j;
            q=wo[i].charAt(j);
        }
    }
    var fp=wo[i].substring(0,cn);
    var lp=wo[i].substring(cn+1,l);
    var a = parseFloat(lp);
    var b = parseFloat(fp);
    switch(q)
    {
        case '+':
        {
            var res=parseFloat(lp)+parseFloat(fp);
            break;
        }
        case '-':
        {
            var res=parseFloat(fp)-parseFloat(lp);
            
            break;
        }
        case '*':
        {
            var res=parseFloat(lp)*parseFloat(fp);
            break;
        }
        case '^':
        {
            var res=parseFloat(fp)^parseFloat(lp);;
            break;
        }
        case '/':
        {
            var res=parseFloat(fp)/parseFloat(lp);
            break;
        }
        case '%':
        {
            var res=parseFloat(fp)%parseFloat(lp);
            break;
        }
        default:
           break;
    }
    document.getElementById('ans').innerHTML="The operation of that number are &nbsp"+a+" and "+b+ ". So Your Result :" +res;
    text="The operation of that number are"+a+"and"+b+".So Your Result is :" +res;
    responsiveVoice.speak(text);
    flag=2;
    
}
else if(wo[i]==="you")
{
    text="I am fine. "+nm+" Tell me how can I help you?";
    document.getElementById('ans').innerHTML=text;
    flag=2;
    responsiveVoice.speak(text);
}
else if(wo[i]==="morning"||wo[i]==="Morning"||wo[i]==="noon"||wo[i]==="Noon"||wo[i]==="evening"||wo[i]==="Evening"||wo[i]==="Night"||wo[i]==="night"||wo[i]==="afternoon"||wo[i]==="Afternoon")
{
    text=nm+" Tell me how can I help you?";
    document.getElementById('ans').innerHTML=text;
    flag=2;
    responsiveVoice.speak(text);
}
else if(wo[i]==="Solo"||wo[i]==="SOLO")
{
    text=nm+" Tell me how can I help you?";
    document.getElementById('ans').innerHTML=text;
    flag=2;
    responsiveVoice.speak(text);
}
    else
    {
         if(flag==0)
         flag=1; 
         
    }
    
}
if(flag==1)
{
    
    var str="http://www.google.com/search?hl=en&source=hp&q=" + com + "&aq=f&oq=&aqi=";
var replaced=str.replace(" ","+");
window.location.replace(replaced);
}

}
function pr(txt)
{
    var word = txt.split("");
var i = 0;
var interval = setInterval(writeText, 100 );
function writeText() {
    var p = document.getElementsByTagName("i")[0];
    if (i < word.length) {
        p.innerHTML += word[i];
        i++;
    } else {
        clearInterval(interval);
         
  
  } 
}
}
console.log = function() {}