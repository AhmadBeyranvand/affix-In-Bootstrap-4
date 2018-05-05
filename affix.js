/************************************
 * Code writed by: Ahmad Beyranvand *
 *      Twitter: @AhmadBeyranvand   *
 ***********************************/

function affixBs4(affixVal, tagIDName, classesToAdd, classesToRemove){
    $(document).ready(function(){
        var pageWidth = $(window).width();
        var tagID=$("#"+tagIDName);
        $(window).on('scroll', function(){
            var affixVal=200;
            var scroll=$(window).scrollTop();
            if(scroll>affixVal){
                classesToAdd.forEach(function(item){
                    tagID.addClass(item);
                });
                classesToRemove.forEach(function(item){
                    tagID.removeClass(item);
                });
            }
            else if(scroll>=0 || scroll<=affixVal){
                classesToAdd.forEach(function(item){
                    tagID.removeClass(item);
                });
                classesToRemove.forEach(function(item){
                    tagID.addClass(item);
                });
            }
        });
    });
}