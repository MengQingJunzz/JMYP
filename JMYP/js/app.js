/**
 * Created by Administrator on 2017/7/13.
 */
// angular.module("exampleApp")
    // .controller("JYMCrl",function ($http,$scope) {
    //     $http({
    //         method:"GET",
    //         url:'json/goodslist.json'
    //     }).then(function successCallback(response) {
    //         $scope.item_list=response.data.item_list
    //     },function errorCallback(response) {
    //
    //     });
    //
    //
    //     $http({
    //         method:"GET",
    //         url:'json/goodslist2.json'
    //     }).then(function successCallback(response) {
    //         $scope.nav=response.data.nav
    //     },function errorCallback(response) {
    //
    //     });
    // })

    $(function () {
        $.ajax({
            url:'json/goodslist.json',
            method:'get',
            dataType:'json',
            success:function (data) {
                // console.log(data.item_list);
                $.each(data.item_list,function (i,value) {
                    var $elem;
                    var $img=$('<img>');
                    var $product_img=$("<div class='product-img'></div>")
                    var srcUrl="";
                    function f(s) {
                        for(var i in s){
                            if(typeof s[i]=="object"){
                                f(s[i])
                            }else {
                                if (i == "800"){
                                    // console.log(s[i])
                                    srcUrl=s[i]
                                }
                            }

                        }
                    }
                    f(data.item_list[i].image_url_set);
                    // console.log(srcUrl);
                    $img.attr("src",srcUrl);
                    $product_img.append($img);
                    $(".del-item").append($product_img);
                    switch (value.type){
                        case "jumei_pop":
                            $elem=$(template('goodsTemp1',value));
                            break;
                        case  "global_deal":
                            $elem=$(template('goodsTemp1',value));
                            break;
                        case  "jmstore":
                            $elem=$(template('goodsTemp2',value));
                            break;
                    }

                    // if(value.type=="jumei_pop" ){
                    //     $elem=$(template('goodsTemp1',value));
                    // }
                    // else if (value.type == "global_deal") {
                    //     $elem=$(template('goodsTemp1',value));
                    // }
                    // else {
                    //     $elem=$(template('goodsTemp2',value));
                    // }
                    $(".online_wrap").append($elem);
                });

            }
        })


        $.ajax({
            url:'json/goodslist2.json',
            method:'get',
            dataType:'json',
            success:function(data){
                $.each(data.item_list,function(i,value){
                    var $elem;
                    var $img=$('<img>');
                    var $product_img=$("<div class='product-img'></div>")
                    var srcUrl="";
                    function f(s){
                        for(var i in s){
                            if(typeof s[i]=="object"){
                                f(s[i])
                            }
                            else{
                                if(i=="800"){
                                    srcUrl=s[i];
                                }
                            }
                        }
                    }
                    f(data.item_list[i].image_url_set);
                    $img.attr("src",srcUrl);
                    $product_img.append($img);
                    $(".del-item").append($product_img);
                    switch (value.type){
                        case "jumei_pop":
                            $elem=$(template('goodsTemp3',value));
                            break;
                        case  "global_deal":
                            $elem=$(template('goodsTemp3',value));
                            break;
                        case  "jmstore":
                            $elem=$(template('goodsTemp4',value));
                            break;
                    }
                    $(".pre_wrap").append($elem);
                })

            }
        })


    });

