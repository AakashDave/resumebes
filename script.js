AOS.init();

let cvtemplate=document.getElementById('cvtemplate');
let cvform=document.getElementById('cvform');
const home=document.getElementById('home');
const navbar=document.getElementById('navbar');
home.style.display='flex';
cvform.style.display='none';
cvtemplate.style.display='none';
navbar.style.display='block';
function openedit() {
    home.style.display='none';
    cvform.style.display='block';
}

function addwefield() {
    var audio = new Audio('edit.wav');
    audio.play();
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wrkExpfield');
    newnode.classList.add('hoveffect');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder',"Enter Here");
   let dltbtn= document.createElement('button');
    dltbtn.classList.add('btn');
    dltbtn.classList.add('btn-primary');    
    dltbtn.classList.add('btn-sm');
    dltbtn.innerHTML="-";
    dltbtn.addEventListener('click',()=>{
        var audio = new Audio('edit.wav');
        audio.play();
        newnode.remove();
        dltbtn.remove()
    }) 

    let weaddbtn=document.getElementById('weaddbtn');
    let workexpdiv=document.getElementById('workexp');
    
    workexpdiv.insertBefore(newnode,weaddbtn);
    workexpdiv.insertBefore(dltbtn,weaddbtn)
}
function addacfield() {
    var audio = new Audio('edit.wav');
    audio.play();
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('qualfield');
    newnode.classList.add('hoveffect');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder',"Enter Here");
    let dltbtn= document.createElement('button');
    dltbtn.classList.add('btn');
    // dltbtn.classList.add('btn-primary');    
    dltbtn.classList.add('btn-sm');
    dltbtn.innerHTML="-";
    dltbtn.addEventListener('click',()=>{
        var audio = new Audio('edit.wav');
        audio.play();
        newnode.remove();
        dltbtn.remove()
        
    }) 
    let aqaddbtn=document.getElementById('aqaddbtn');
    let acadqal=document.getElementById('acadqal');
    
    acadqal.insertBefore(newnode,aqaddbtn);
    acadqal.insertBefore(dltbtn,aqaddbtn)

}


// generating cv
function generateCV() {
    var audio = new Audio('clicked.wav');
    audio.play();
    cvform.style.display='none';
    cvtemplate.style.display='block';
    navbar.style.display='none';
    
    let namefield=document.getElementById('namefield').value;
    let namet1=document.getElementById('name1');
    namet1.innerHTML=namefield;
    let namet2=document.getElementById('name2');
    namet2.innerHTML=namefield;

    let phonefield=document.getElementById('phonefield').value;
    let contact1=document.getElementById('contact1');
    contact1.innerHTML=phonefield;

    let emailfield=document.getElementById('emailfield').value;
    let email1=document.getElementById('email1');
    email1.innerHTML=emailfield;

    let bdfield=document.getElementById('bdfield').value;
    letbdl1=document.getElementById('bd1');
    bd1.innerHTML=bdfield;

    let addressfield=document.getElementById('address').value;
    let address1=document.getElementById('address1');
    address1.innerHTML=addressfield;

    let signfield=document.getElementById('signfield').value;
    let sign1=document.getElementById('sign1');
    sign1.innerHTML=signfield;
   
    let mybg0=document.getElementById('mybg0');
    let mybg1=document.getElementById('mybg1');
    let mybg2=document.getElementById('mybg2');
    let mybg3=document.getElementById('mybg3');
    let mybg4=document.getElementById('mybg4');
    let mybg5=document.getElementById('mybg5');
    mybg0.style.backgroundColor=document.getElementById('bg').value;
    mybg1.style.backgroundColor=document.getElementById('bg').value;
    mybg2.style.backgroundColor=document.getElementById('bg').value;
    mybg3.style.backgroundColor=document.getElementById('bg').value;
    mybg4.style.backgroundColor=document.getElementById('bg').value;
    mybg5.style.backgroundColor=document.getElementById('bg').value;
    
    // code for image set
    let file=document.getElementById('pic').files[0];
    if (file==undefined) {
        document.getElementById('imgtemp').innerHTML="no image";
    }
    else{
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        document.getElementById('imgtemp').src=reader.result;
    };
    }

    let fblink=document.getElementById('fblink').value;
    let setfb=document.getElementById('fb1');
    setfb.innerHTML=fblink;

    let instalink=document.getElementById('instalink').value;
    let setig=document.getElementById('insta1');
    setig.innerHTML=instalink;

    let linkedlink=document.getElementById('linkedlink').value;
    let setll=document.getElementById('link1');
    setll.innerHTML=linkedlink;

    let gitlink=document.getElementById('gitlink').value;
    let setgit=document.getElementById('git1');
    setgit.innerHTML=gitlink;

    // objective
    document.getElementById('objt1').innerHTML=document.getElementById('objfield').value;

    // workexp
    let workexpdiv=document.getElementsByClassName('wrkExpfield');
    let str='';
    for(let e of workexpdiv){
        str+=`<li>${e.value}</li>`;
    }
    document.getElementById('we1').innerHTML=str;
    // acadmic qualification
    let acdmicfield=document.getElementsByClassName('qualfield');
    let mystr='';
    for(let e of acdmicfield){
        mystr+=`<li>${e.value}</li>`;
    }
    document.getElementById('aq1').innerHTML=mystr;
   //skills
   document.getElementById('sk1').innerHTML=document.getElementById('skfield').value;
   //skills
   document.getElementById('hb1').innerHTML=document.getElementById('hbfield').value;
}

// printcv
window.onload =function(){
        document.getElementById('download').addEventListener('click',()=>{
        console.log(cvtemplate);
        let showtemp=document.getElementById('showcvtemplate')
        var opt = {
            margin:       [-2,0,0,0],
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2,logging:true,dpi:192,letterRendering:true},
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait'},
          };
          html2pdf().set(opt).from(showtemp).save();
    })
}

function printCV() {
    var audio = new Audio('clicked.wav');
    audio.play();
}

// edit
function edit(){
    var audio = new Audio('edit.wav');
    audio.play();
    cvtemplate.style.display='none';
    cvform.style.display='block';
    navbar.style.display='block';
}