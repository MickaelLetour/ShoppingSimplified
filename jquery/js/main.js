$(function(){
    let title = $("#titre1");
    let elmt = $(".elmtLi");
    title.html("coucou");
    elmt.html("allo");

    title.css({color:"Red", border: "1px solid black", backgroundColor: "blue"});
    elmt.html("<a id='lien' href=''>Lien</a>");

    console.log(elmt);

    let liste = $("ul");
    let element = $("<li class='monNouveauLi'>Salut</li>");

    element.appendTo(liste);
    element.hide();
    element.fadeIn(5000);

    let button = $("<button id='btn'>click moi</button>");
    let body = $("body");

    button.appendTo(body);

    let but = $("#btn");

    $(but).click(function(){
        $(but).text('Paf!!!');
        $.get("data.php", function(response){
            title.text(response);
        })
    })



})

