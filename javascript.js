$(function(){
    
    var $firstTab = $('#first_tab'),
        $secondTab = $('#second_tab'),
        $thirdTab = $('#third_tab'),
        $tab1 = $('#tabs-1'),
        $tab2 = $('#tabs-2'),
        $tab3 = $('#tabs-3'),
    //------------------------------
        $helpText1 = $("#help_text1"),
        $helpText2 = $("#help_text2"),
        $helpText3 = $("#help_text3"),
        $helpButton = $("#help-button"),
        $firstFild = $("#first-fild"),
        $secondFild = $("#second-fild"),
        $thirdFild = $("#third-fild");
        
    
    $firstTab.click(function(){
        $firstTab.css("background", "#aefdae"),
        $secondTab.css("background", "#68ff68"),
        $thirdTab.css("background", "#68ff68"),
        $tab1.show(),
        $tab2.hide(),
        $tab3.hide();
    });
    
    $secondTab.click(function(){
        $firstTab.css("background", "#68ff68"),
        $secondTab.css("background", "#aefdae"),
        $thirdTab.css("background", "#68ff68"),
        $tab1.hide(),
        $tab2.show(),
        $tab3.hide();
    });
    
    $thirdTab.click(function(){
        $firstTab.css("background", "#68ff68"),
        $secondTab.css("background", "#68ff68"),
        $thirdTab.css("background", "#aefdae"),
        $tab1.hide(),
        $tab2.hide(),
        $tab3.show();
    });
    
    //---------------------------------------
    
    $helpButton.click(function(){
        $helpText1.show(500),
        $helpText2.show(500),
        $helpText3.show(500);
    });
    
    
    
    
    $firstFild.hover(function(){
        $helpText1.fadeToggle(500);
    });
    
    $secondFild.hover(function(){
        $helpText2.fadeToggle(500);
    });
    
    $thirdFild.hover(function(){
        $helpText3.fadeToggle(500);
    });

    
    
     $firstFild.mouseout(function(){
            $helpText1.hide();
        });
    $secondFild.mouseout(function(){
            $helpText2.hide();
        });
    $thirdFild.mouseout(function(){
           $helpText3.hide();
        });

});


















