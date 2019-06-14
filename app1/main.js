
$(document).ready(function(){
    $("gnb a.dp1").click(function(){
        $(".sub").removeClass("on");
        $(this).next(".sub").addClass("on");
        $("#gnb a.ap1").removeClass("on");
        $(this).addClass("on");
    });
});

var wd = parseInt ($(".vs").width());
$(".btn_box li").click(function(){
    var idx = $(this).index();
        $(".img_box").not(":animated").animate({"margin-left":wd*idx*-1+"px"},600);
        $(".btn_box li").removeClass("on");
        $(this).addClass("on");
    });
});
