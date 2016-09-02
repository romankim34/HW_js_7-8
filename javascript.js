$(function(){
    
// область присвоения -------------
    // табы -----------------------
    
    var $firstTab = $('#first_tab'),
        $secondTab = $('#second_tab'),
        $thirdTab = $('#third_tab'),
        $tab1 = $('#tabs-1'),
        $tab2 = $('#tabs-2'),
        $tab3 = $('#tabs-3'),
        
    // формы ---------------------
        
        $helpText1 = $("#help_text1"),
        $helpText2 = $("#help_text2"),
        $helpText3 = $("#help_text3"),
        $helpButton = $("#help-button"),
        $firstFild = $("#first-fild"),
        $secondFild = $("#second-fild"),
        $thirdFild = $("#third-fild");

// работа табов -----------------------
    
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
    
    
// работа формы -----------------------------------    
// при наведении курсора --------------------------
    
    $firstFild.hover(function(){
        $helpText1.show(500);
        $helpText2.hide(500);
        $helpText3.hide(500);
    });
    
    $secondFild.hover(function(){
        $helpText1.hide(500);
        $helpText2.show(500);
        $helpText3.hide(500);
    });
    
    $thirdFild.hover(function(){
        $helpText1.hide(500);
        $helpText2.hide(500);
        $helpText3.show(500);
    });

// при выходе курсора ------------------------------
    
    $firstFild.mouseleave(function(){
        $helpText1.hide(500);
    });
    
    $secondFild.mouseleave(function(){
        $helpText2.hide(500);
    });
    
    $thirdFild.mouseleave(function(){
        $helpText3.hide(500);
    });
    
// при появлении фокуса -----------------------------
    
    $firstFild.focusin(function(){
        $helpText1.show(500);
        $helpText2.hide(500);
        $helpText3.hide(500);
    });
    
    $secondFild.focusin(function(){
        $helpText1.hide(500);
        $helpText2.show(500);
        $helpText3.hide(500);
    });
    
    $thirdFild.focusin(function(){
        $helpText1.hide(500);
        $helpText2.hide(500);
        $helpText3.show(500);
    });
    
// кнопка помощи -----------------------------------
    
    $helpButton.click(function(){
        $helpText1.show(500),
        $helpText2.show(500),
        $helpText3.show(500);
    });

});


















