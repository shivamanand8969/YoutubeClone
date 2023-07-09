
let music=[
    {
        
        songpath:"video1.mp4",
        songname:"Ishq De Fanniyar | Fukrey Returns | Pulkit Samrat & Priya Anand | Jyotica Tangri | Shaarib & Toshi"
    },
    {
        channelnm:"All Good Music",
        songpath:"video2.mp4",
        songname:"System Pe System | R Maan | Billa Sonipat Aala | New Haryanvi Songs | Ek Mere Bol Pa System Hilega"
    },
    // {
    //     songpath:"video3.mp4",
    //     songname:"Filhaal_2_Mohabbat__Sad_Song__B_Praak_ft._Akshay_Kumar%2C_Jaani___Nupur_Sanon%2C_Ammy_Virk___Arvindr_K(480p)"
    // },
    {
        songpath:"video4.mp4",
        songname:"Laptop_ko_banaye_TV_easy_way_for_Software_Engineers_#softwaredeveloper(1080p)"
    },
    {
        songpath:"video5.mp4",
        songname:"Mann_Mera__Official_Video____Table_No_21___Rajeev_Khandelwal___Tina_Desai___Gajendra_Verma(480p)"
    },
    {
        channelnm:"Sajid Khan",
        songpath:"video6.mp4",
        songname:"Meri_Jindagi_Se_Jaane_Ka_Kya_Loge_Tum__Full_Video__B_Praak___Akshay_Kumar%2C_Amyra_Dastur___New_Song(480p)"
    },
    {
        channelnm:"T-Series ",
        songpath:"video7.mp4",
        songname:"Naina_Re_Song_With_Himesh_Reshammiya___Dangerous_Ishhq(480p)"
    },
    {
        songpath:"video8.mp4",
        songname:"O_Bedardeya__Full_Video__Tu_Jhoothi_Main_Makkaar___Ranbir%2C_Shraddha___Pritam%2CArijit_Singh%2C_Amitabh_B(480p)"
    }
]

const vdio=document.querySelector("video")
vdio.src="video1.mp4";
function changevideo(){
    vdio.src=music[1].songpath;
    document.getElementById("songtitle").innerHTML=music[1].songname;
    document.getElementById("channelname").innerHTML=music[1].channelnm;
    document.getElementById("vidoedislike").style.color="black";   
    document.getElementById("videolike").style.color="black";
     

    console.log(vdio)
}
function changevideo1(){
    vdio.src=music[4].songpath;
    document.getElementById("songtitle").innerHTML=music[4].songname;
    document.getElementById("channelname").innerHTML=music[4].channelnm;
    document.getElementById("vidoedislike").style.color="black";   
    document.getElementById("videolike").style.color="black";
     
}
function changevideo2(){
    vdio.src=music[5].songpath;
    document.getElementById("songtitle").innerHTML=music[5].songname;
    document.getElementById("channelname").innerHTML=music[5].channelnm;
    document.getElementById("vidoedislike").style.color="black";   
    document.getElementById("videolike").style.color="black";
     
}
function changevideo3(){
    vdio.src=music[5].songpath;
    document.getElementById("songtitle").innerHTML=music[5].songname;
    document.getElementById("channelname").innerHTML=music[5].channelnm;
    document.getElementById("vidoedislike").style.color="black";   
    document.getElementById("videolike").style.color="black";
     
}
function changevideo4(){
    vdio.src="video3.mp4";
    document.getElementById("songtitle").innerHTML=music[6].songname;
    document.getElementById("channelname").innerHTML=music[6].channelnm;
    document.getElementById("vidoedislike").style.color="black";   
    document.getElementById("videolike").style.color="black";
     
}
function cmp(){
    let coment=document.getElementById("getcomment").value;
    document.getElementById("firstcomment").innerHTML=coment;
}
// let like=100;
// document.getElementById("likenumber").innerHTML=like;
let a=0;
function like(){
    document.getElementById("videolike").style.color="blue";
    document.getElementById("vidoedislike").style.color="black";        
}
function dislike(){
    document.getElementById("vidoedislike").style.color="blue";
    document.getElementById("videolike").style.color="black";
}
function showInput(){
    let a=document.getElementById("inputbox").value;
    if(music[1].songname.includes(a)){
        changevideo();
    }
    else if(music[4].songname.includes(a)){
        changevideo1()
    }
    else if(music[5].songname.includes(a)){
        changevideo2();
    }
    else{
        alert("Song not found");
    }
}