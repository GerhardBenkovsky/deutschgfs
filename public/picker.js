$(document).ready(function(){
    createSelector();
});
async function createSelector() {

    const url = "https://cdn.glitch.com/88ee8401-866c-4005-b70e-7fed0d9b68ba%2Fdata-test.JSON?v=1572291112969";
    const reponse = await fetch(url);
    const data = await reponse.json();

    $("main").append("<section class='lessonSelector'></section>");
    $(".lessonSelector").append("<h2></h2>");
    $(".lessonSelector > h2").text("Pick your lesson: ");
    $(".lessonSelector").append("<div></div>");

    for (let i = 0; i < data.length ; i++) {
        $(".lessonSelector > div").append("<a href='"+data[i].id+"'>" + data[i].title +"</a>");
    }
}

// End -----------------

function btnLoader() {
    let loaded = true;
    $("#activator").click(function () {
        if (loaded === true){
            location.href = $("#Selector option:selected").text();
        }
    });
}