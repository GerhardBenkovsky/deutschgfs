$(document).ready(function(){
    createNavBar();
    createFooter();
});

// Creates Navigation Bar and Footer     WIN

function createNavBar() {
    $("head > title").text("Deutsch Selbsthilfegruppe")

    $("body").prepend($("<nav></nav>"));
    $("nav").append($("<ul class='nav-ul'></ul>"));

    for(let i = 0; i<4; i++) {
        $(".nav-ul").append($("<li class='nav-li-"+ i + "'></li>"));
        switch(i){
            case 0:
                $(".nav-li-" + i).append($("<a></a>").text("Home").attr("href","/"));
                break;
            case 1:
                $(".nav-li-" + i).append($("<a></a>").text("Google").attr("href","https://www.google.com/"));
                break;
            case 2:
                $(".nav-li-" + i).append($("<a></a>").text("GMail").attr("href","https://googlemail.com"));
                break;
            case 3:
                $(".nav-li-" + i).append($("<a></a>").text("Youtube").attr("href","https://www.youtube.com/"));
        }
    }

    $("body").append("<main></main>");
}

function createFooter() {
    $("body").append("<footer></footer>");
    $("footer").append("<p>This is the footer</p>");
}

//loads page

async function contentLoader() {

    const url = "https://cdn.glitch.com/8666f727-4d97-4364-8002-348218a7d5ee%2Fdata-test.JSON?v=v";
    const reponse = await fetch(url);
    const data = await reponse.json();


    const load = sessionStorage.getItem("pick");



    for (let i = 0; i < data.length ; i++) {
        
        if (data[i].id === load) {
            $("main").append("<div class ='" + load + "'></div");
            
            $("." + load).prepend("<h2></h2>");
            $("." + load + "> h2").text(data[i].title);

            $("." + load).append("<p></p>");
            $("." + load + " > p").text(data[i].content);
        }
    }
}
