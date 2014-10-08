$(document).ready(function() {
  // img.width();
  // img.height();

  var temp = "<div class='cell' style='width:{width}px; height:{height}px;'><img src='images/image{index}.png'/></div>";
  var w = 1,
    html = '',
    limitItem = 9;
  for (var i = 0; i < limitItem; ++i) {
    var img = $('<img>');
    x = i + 1;
    img.attr('src', 'images/image' + x + '.png');
    // img.attr('src', 'images/image1.png');
    img.appendTo('#abc');
    width = img.width();
    height = img.height();
    // console.log(width + "*" + height);
    // alert(width);
    // w = 200 + 200 * Math.random() << 0;
    a = temp.replace(/\{height\}/g, height).replace(/\{width\}/g, width).replace("{index}", i + 1);
    html += a;
  }
  $("#abc").hide();

  $("#container").html(html);

  var wall = new freewall("#container");

  wall.reset({
    selector: '.cell',
    animate: true,
    gutterX: 10,
    gutterY: 10,
    onResize: function() {
      wall.fitWidth();
    }
  });

  wall.fitWidth();
  // var images = wall.container.find('.cell');
  // images.find('img').load(function() {
  //   wall.fitWidth();
  // });

  $(window).trigger("resize");

  $("img").click(function() {
    // alert($(this).width() + "*" + $(this).height());
  });
});