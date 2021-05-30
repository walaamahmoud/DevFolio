
let aboutOffset = $("#about").offset().top;
function navbarScroll()

{
    let wScroll = $(window).scrollTop();
    if(wScroll > aboutOffset - 50 )
    {
        $(".navbar-default").css("backgroundColor", "#fff");
        $(".logo").css("color", "#0078ff");
        $(".nav-link").css("color", "#0078ff");
        $(".nav-link").addClass('changed');
       
    }
    else
    {
        $(".navbar-default").css("backgroundColor", "transparent");
        $(".logo").css("color", "#fff");
        $(".nav-link").css("color", "#fff");
        $(".nav-link").removeClass('changed');
       
       
    }
}
function buttonUpScroll()
{
    $("html,body").animate({scrollTop:0},1000);
}
function sectionScroll()
{
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000);

}




$(window).scroll(navbarScroll);
$("#btnUp").click(buttonUpScroll);
$("a[href^='#']").click(sectionScroll);
