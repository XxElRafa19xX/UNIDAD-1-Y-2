let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let tittle = document.querySelector('#tittle');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let toral = document.querySelector('total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song= [
    {
        
        name: "Michael Jackosn",
        path: "musica/cancion1.mp3",
        img: "imagenes/imagen 1.jpg",
        singer: "Beat It"
    },
    {
        name: "QUEEN ",
        path: "musica/cancion2.mp3",
        img: "imagenes/imagen 2.jpg",
        singer: "Another One Bites The Dust"
    },
    {
        name: "KISS",
        path: "musica/cancion3.mp3",
        img: "imagenes/imagen 3.jpg",
        singer: "I Was Made For Lovin' You"
    },
    {
        name: " I Want To Break Free ",
        path: "musica/cancion4.mp3",
        img: "imagenes/imagen 4.jpg",
        singer: "Queen"
    },
    {
        name: "Red Hot Chili Peppers",
        path: "musica/cancion5.mp3",
        img: "imagenes/imagen 5.jpg",
        singer: "Otherside"
    },
    {
        name: "Iron Maiden",
        path: "musica/cancion6.mp3",
        img: "imagenes/imagen 6.jpg",
        singer: "The Trooper"
    },
    {
        name: "Nickelback",
        path: "musica/cancion7.mp3",
        img: "imagenes/imagen 7.jpg",
        singer: "Burn It To The Ground"
    },
    {
        name: "Rammstein ",
        path: "musica/cancion8.mp3",
        img: "imagenes/imagen 8.jpg",
        singer: "Rammstein "
    },
    {
        name: "Alemán & L-Gante",
        path: "musica/cancion9.mp3",
        img: "imagenes/imagen 9.jpg",
        singer: "Requisito 420"
    },
    {
        name: "C-Kan & Dharius",
        path: "musica/cancion10.mp3",
        img: "imagenes/imagen 10.jpg",
        singer: "Quiúboles Que!"
    },
    {
        name: "Cartel de santa",
        path: "musica/cancion11.mp3",
        img: "imagenes/imagen 11.jpg",
        singer: "El ratón y el queso"
    },
    {
        name: "Bad Bunny",
        path: "musica/cancion12.mp3",
        img: "imagenes/imagen 12.jpg",
        singer: "Despues de la playa"
    },
    {
        name: "Bad Bunny",
        path: "musica/cancion13.mp3",
        img: "imagenes/imagen 13.jpg",
        singer: "La romana"
    },
    {
        name: "Bad Bunny",
        path: "musica/cancion14.mp3",
        img: "imagenes/imagen 12.jpg",
        singer: "Tití me pregunto "
    },
    {
        name: "Bad Bunny",
        path: "musica/cancion15.mp3",
        img: "imagenes/imagen 14.jpg",
        singer: "Si estuviesemos juntos"
    },
];

function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    tittle.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer
    track.load();

    timer = setInterval(range_slider , 1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
   
}
load_track(index_no);


function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

function justplay(){
    if(playing_song == false){
        playsong();
    }else{
        pausesong();
    }
}

function reset_slider(){
    slider.value = 0;
}

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

function next_song(){
    if (index_no  < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}
function previus_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function autoplay_switch(){
    if (autoplay==1){
        autoplay=0;
        autoplay.style.background = "rgba(255, 255, 255, 0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
    }
}

function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    if (track.ended){
        play.innerHTML = '<i classs="fa fa-play"></i>';
        if (autoplay == 1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}