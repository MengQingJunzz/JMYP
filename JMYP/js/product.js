/**
 * Created by Administrator on 2017/7/15.
 */

    $.ajax({
        url:'json/product1.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data.data,function (i, value) {
                var $elem;
                $elem=$(template("productTemp1",value))
                $('.moudule-container').append($elem)
            })
        }
    });
    $.ajax({
        url:'json/product2.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data.data,function (i, value) {
                var $div=$('<div class="moudule-container" id="coutuan_baby" ></div>');
                var $elem;
                $elem=$(template("productTemp1",value));
                $div.append($elem)
                $div.appendTo($('.tabcon-ptop'));
            })
        }

    });

    loadFoot(1);
