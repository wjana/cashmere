$(function(){
	init();
    $(window).on('resize',function(){//重新加载
        init();
    });
})
function init(){
    var boxWidth=$("li").outerWidth(true);
    // 获取每个小盒子的宽度 包括margin、padding、border
    var cols=parseInt($('row').width()/boxWidth);
    // 获取列数
    var heightArr=[];
    for(var i=0;i<cols;i++){
        heightArr.push(0);
    };

    //遍历每一张图片
    $("li").each(function(index,item) {
        var idx=0;
        var minBoxHeight=heightArr[0];
        // 获取最小高度
        for(var i=0;i<heightArr.length;i++){
            if(heightArr[i]<minBoxHeight){
                minBoxHeight=heightArr[i];
                idx=i;
                // 获取最小高度的索引
            }
        };

        // 设置图片的样式
//      $(item).css({
//          left:boxWidth*idx,
//          top:minBoxHeight
//      });
        heightArr[idx]+=$(item).outerHeight(true);

    });
};
