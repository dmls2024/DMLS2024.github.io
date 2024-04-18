/*
 * @Author: MEDCON 
 * @Date: 2021-03-15 15:14:37 
 * @Last Modified by: MEDCON美迪康会务通
 * @Last Modified time: 2021-03-16 16:50:38
 */

/*code by 美迪康会务通学术会议服务平台*/
// 编辑内容
$(function (argument) {
    $(".setbg").parent().addClass("pr");
    $(".setbg").parent().hover(function () {
        $(this).find(".setbg").show();
    }, function () {
        $(this).find(".setbg").hide();
    });
});
// 导航数量自适应宽度
// function navautow() {
// 	var num = $(".nav li h3").length;
// 	$(".nav li").width(1100 / num);
// };
// $(function() {
// 	navautow();
// });
// $(window).resize(function() {
// 	navautow();
// });
//sIDDBPHcZUn75XeBQepNPuzSR2VMsK3XiQ4tFJsuun0wqtx8aC3cS8KfF7FE1Iy_xyDslZb2NrQCA9LL6qMbxXQ_d_d
$(function () {
    // 导航添加焦点
    $('.nav li a').each(function () {
        if ($($(this))[0].href == String(window.location)) {
            $(this).parents('li').addClass('current');
        }
    });
    // 二级菜单
    // jQuery(".nav").slide({
    //     type: "menu", // 效果类型，针对菜单/导航而引入的参数（默认slide）
    //     titCell: "li", //鼠标触发对象
    //     targetCell: ".sub", //titCell里面包含的要显示/消失的对象
    //     effect: "slideDown", //targetCell下拉效果
    //     delayTime: 300, //效果时间
    //     triggerTime: 0, //鼠标延迟触发时间（默认150）
    //     titOnClassName: "current",
    //     returnDefault: true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）

    // }); //有兼容问题
    
        $('.nav li').on('mouseover',function () {
            $(this).find('.sub').show(30);
          }).on('mouseleave',function () {
            $(this).find('.sub').hide(30);
          })
    /*导航分配空间*/
    function navWEqually(){
        $('.nav li a').css('padding', '0')
        $('.nav .date').css('padding', '0');
        var liWsum = 0;
        var navW = $('.nav ul').width();
        var pd, lilen = $('.nav li').length;
        var WData = new Array();//对象数组  
        $('.nav li').eq(lilen - 1).addClass('last');
        $('.nav li').each(function () {
            liWsum += $(this).width();
            WData.push($(this).width());
        })
        pd = parseInt((navW - liWsum) / lilen / 2)-0.5;
       
        $('.nav li a').css('padding', '0 ' + pd + 'px')
        $('.nav .date').css('padding', '0 ' + pd + 'px');
         /*二级导航最小宽*/
        WData.sort(function (value1, value2) {//数组排序
            return value1 - value2;
        });
        $('.nav .sub').css('min-width', WData[WData.length - 1])
    }
    navWEqually();
    // // 等高
    if ($(".js-dg01").height() < $(".js-dg1").height()-100) {
        $(".js-dg01").css('minHeight',($(".js-dg1").height()-100) +'px')
    } else {
        $(".js-dg1 .ibox:last .c").css('minHeight',$(".js-dg01").height()+100-$(".js-dg1").height()+$(".js-dg1 .ibox:last .c").height()+'px')
    }

    // 二级页等高
    if ($(".subContent .fl").height() < $(".subContent .fr").height()) {
        $(".subContent .fl").css('minHeight',$(".subContent .fr").height())
    }

    
});

// 等高
window.onload=function () {
	var mh=0;
	var mh2=0;
	$(".js-dg2").each(function () {
		if($(this).height()>mh2){
			mh2=$(this).height()
		}
	});
	$(".js-dg2").height(mh2);
	if($(".js-dg01").height()>($(".js-dg02").height()+$(".js-dg03").height()-90)){
		$(".js-dg03").height($(".js-dg01").height()-$(".js-dg02").height()-90)
	}else{
		$(".js-dg01").height($(".js-dg02").height()+$(".js-dg03").height()+90)
	}

}