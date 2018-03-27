$(function () {
  // 头部菜单按钮
  $("header .menu a").on("click", function () {
    $(this).css("backgroundColor", "rgba(255, 255, 255, 0.3)");
    $(this).parent().siblings().find("a").css("backgroundColor", "transparent");
  })

  // 中左部搜索
  $(".middleLeft .submit").on("click", function () {
    var strJSON = {};
    $.each($('.middleLeft .content').serializeArray(), function () {
      strJSON[this.name] = this.value;
    });
    // 取得表达信息并打印
    console.log(JSON.stringify(strJSON));
  })

  // 中左部订阅
  $(".middleLeft .icon-jiantoushang").hide();
  // 箭头下
  $(".middleLeft .icon-jiantouxia").on("click", function () {
    $(this).parent().height(105);
    $(".middleLeft .icon-jiantouxia").hide();
    $(".middleLeft .icon-jiantoushang").show();
  })

  // 箭头上
  $(".middleLeft .icon-jiantoushang").on("click", function () {
    $(this).parent().height(46);
    $(".middleLeft .icon-jiantoushang").hide();
    $(".middleLeft .icon-jiantouxia").show();
  })

  // 推荐预定时间
  $(function () {
    var dateStr = "";
    var date = new Date();
    var dateSeven = new Date(new Date() - (-5 * 24 * 60 * 60 * 1000));
    var mon = date.getMonth() + 1;
    var monSeven = dateSeven.getMonth() + 1;
    var day = date.getDate();
    var daySeven = dateSeven.getDate();
    var week = weekNumToStr(date.getDay());
    var weekSeven = weekNumToStr(dateSeven.getDay());

    dateStr = mon + "月" + day + "日 星期" + week + " 至 " + monSeven + "月" + daySeven + "日 星期" +
      weekSeven + " 推荐预定:";
    $(".middleRight .time").text(dateStr);
  }());

  function weekNumToStr(week) {
    switch (week) {
      case 0:
        return "日";
        break;
      case 1:
        return "一";
        break;
      case 2:
        return "二";
        break;
      case 3:
        return "三";
        break;
      case 4:
        return "四";
        break;
      case 5:
        return "五";
        break;
      case 6:
        return "六";
        break;
    }
  }




})