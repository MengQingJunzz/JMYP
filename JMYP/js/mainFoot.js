/**
 * Created by Administrator on 2017/7/12.
 */
function loadFoot(index){
    $.ajax({
        url:"mainFoot.html",
        method:"get",
        dataType:'html',
        success: function (html) {
            var $div = $(html);
            console.log($div)
            $div.find('a').eq(index).addClass('remind');
            $('body').append($div);
        },
        error:function(XMLHttpRequest, textStatus,errorThrown ){

        }
    });
}