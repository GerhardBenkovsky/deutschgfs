async function contentLoader(load) {

    const url = "https://cdn.glitch.com/88ee8401-866c-4005-b70e-7fed0d9b68ba%2Fdata-test.JSON?v=1572291112969";
    const reponse = await fetch(url);
    const data = await reponse.json();

    $("head > title").text(load.charAt(0).toUpperCase() + load.substr(1).toLowerCase());

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