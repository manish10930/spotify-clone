console.log("welcome to spotify");
// audioElement.play();
let songsongIndex=0;
let audioElement=new Audio('songs/1.mp3');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

// let masterpause=document.getElementById('masterpause');

// let plyas=document.getElementById('plays');

let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');

let songItems=Array.from(document.getElementsByClassName('songsItem'));

let songs=[ 
    
        {songName:"slam-e-Ishq", filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
        {songName:"char botle vodka", filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
        {songName:"Bam Bhole", filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
        {songName:"Lost in Air", filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
        {songName:"Humnava", filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
        {songName:"Tera hua", filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
        {songName:"Ranjhana", filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},    
]



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fafa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity="1";
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fafa-circle-play');
        gif.style.opacity="0";

     
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);  
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


songItems.forEach((element,i) => {

    console.log(element,i);
    
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

const makeAllPlays=()=>{
  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         
        element.classList.remove('fa-circle-pause');
        element.classList.add('fafa-circle-play');
    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            
           console.log(e.target);
           makeAllPlays();
            songIndex=parseInt(e.target.id);
           e.target.classList.remove('fafa-circle-play');
           e.target.classList.add('fa-circle-pause');
           audioElement.src=`songs/${songIndex+1}.mp3`
           masterSongName.innerText=songs[songIndex].songName;
           audioElement.currentTime=0;
           audioElement.play();
           gif.style.opacity=1;
        //    masterPlay.classList.remove('fa-circle-play');
        //    masterPlay.classList.add('fafa-circle-pause');
           
               

    })
})

document.getElementById('next').addEventListener('click',()=>
{ 
    if(songIndex>9)
    {  
    songIndex=0;  
    }    
    else{
    songIndex+=1;       
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;


})

document.getElementById('previous').addEventListener('click',()=>
{ 
    if(songIndex<=0)
    {  
    songIndex=0;  
    }    
    else{
    songIndex-=1;       
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;


})