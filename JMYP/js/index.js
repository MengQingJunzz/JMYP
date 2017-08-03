/**
 * Created by Administrator on 2017/7/7.
 */
  function show() {
    $(".show").show();
    $('.search_page').stop(true).animate({
        left: "15.625%", easing: "easein",
    }, 300, function () {
        // Animation complete.
    });
}

function hide() {
    $(".show").hide();
    // $(".search_page").stopz().animate({
    //     opacity:1,
    //     left:"100%",
    //     speed:"fast"
    // },function () {
    //
    // })
    $('.search_page').css("left","100%");
}


$.ajax({
    url:"json/List.json",
    dataType:'json',
    method:'get',
    success:function (data) {
        $.each(data.data,function (i, value) {
             var $elem;
             console.log(value);
            $elem=$(template("ListTemp",value));
            $('.search-sorts').append($elem);

        })
        $('.search_page .search-sorts .search_sort').on("click",function (e) {
            // console.log(typeof this.getAttribute("data-flags"));
            console.log(this);
            if(this.getAttribute("data-flags")=="true"){
                $(this).children().last().show();
                this.setAttribute("data-flags","false");
                $(this).siblings().children().last().hide();

                // $(this).css("color","#fe4070");
                // $(this).siblings().css("color","#666")
            }
            else{
                $(this).children().last().hide();
                // $(this).css("color","#666")
                this.setAttribute("data-flags","true");

            }
            // console.log($('.search-sorts'))

        })

    }
})

