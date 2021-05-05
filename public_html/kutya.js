var kutyakTomb= [ {
        nev:"Molly",
        kor: 5,
        fajta:"Német Juhász"
    },
    {
        nev:"Roki",
        kor: 2,
        fajta:"Német Juhász"
    },
    {
        nev:"Morzsa",
        kor: 3,
        fajta:"Husky"
    }
            
    
];

var irany = true;


$(function() {
    tablazatKiir();
    $("article th").click(rendezes);
});

function tablazatKiir(){
   $("article").empty();
   
   $("article").append("<table>");
   $("article table").append("<tr><th>Név</th><th>Kor</th><th>Fajta</th></tr>");
   
    for (var i = 0; i < kutyakTomb.length; i++) {
        //$("article table").append("<tr><th>"+kutyak[i].nev+"</th><th>"+kutyak[i].kor+"</th><th>"+kutyak[i].fajta+"</th></tr>");
     $("article table").append("<tr>");
     for(var item in kutyakTomb[i]){
            $("article table tr").eq(i + 1).append("<td>" + kutyakTomb[i][item] + "</td>");
        }
    }
    $("article th").click(rendezes);
}

function rendezes(){
    if (irany) {
        kutyakTomb.sort(function (a,b){
       return Number(a.nev>b.nev)-0.5; 
    });
    }
    else{
       kutyakTomb.sort(function (a,b){
       return Number(a.nev<b.nev)-0.5; 
    });     
    }
    irany=true;
   
    tablazatKiir();
}

