$(document).ready(function(){
    counter = 2; // for product 2
    
    $(".next").click(function(){
        if(counter == 1)
        {
            $(".product1").fadeOut(500);
            $(".product2").fadeIn(500);
            $(".h1").animate({top:"-30%"});
            $(".h2").animate({top:"50%"});
            counter = 2;
        }
        else if(counter == 2)
        {
            $(".product2").fadeOut(500);
            $(".product3").fadeIn(500);
            $(".h2").animate({top:"-30%"});
            $(".h3").animate({top:"50%"});
            counter = 3;
        }
    });
    
    $(".pre").click(function(){
        if(counter == 2)
        {
            $(".product2").fadeOut(500);
            $(".product1").fadeIn(500);
            $(".h1").animate({top:"50%"});
            $(".h2").animate({top:"130%"});
            counter = 1;
        }
        else if(counter == 3)
        {
            $(".product3").fadeOut(500);
            $(".product2").fadeIn(500);
            $(".h2").animate({top:"50%"});
            $(".h3").animate({top:"130%"});
            counter = 2;
        }
    });
    $(".product2 .c1").click(function(){
        $(".product2 .c2").css("box-shadow","none");
        $(".product2 .c3").css("box-shadow","none");
        $(".product2 .c1").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
        $(".h2").animate({opacity:0},function(){
                $(".h2").attr("src","H2.png");
        });
        $(".h2").animate({opacity:1});
    });
    
    $(".product2 .c2").click(function(){
        $(".product2 .c1").css("box-shadow","none");
        $(".product2 .c3").css("box-shadow","none");
        $(".product2 .c2").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
        $(".h2").animate({opacity:0},function(){
                $(".h2").attr("src","H2_2.png");
        });
        $(".h2").animate({opacity:1});
    });
    $(".product2 .c3").click(function(){
        $(".product2 .c1").css("box-shadow","none");
        $(".product2 .c2").css("box-shadow","none");
        $(".product2 .c3").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
        $(".h2").animate({opacity:0},function(){
                $(".h2").attr("src","H2_3.png");
        });
        $(".h2").animate({opacity:1});
    });
    
});


