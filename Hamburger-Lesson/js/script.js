
$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle(300); // フェードインの速度を300ミリ秒に設定

    // さらに大きくスケールするエフェクトを追加
    $(this).animate({ scale: 1.2 }, 200).animate({ scale: 1 }, 200); // 縮小・拡大アニメーション

    event.preventDefault();
  });
});