// ハンバーガーメニュー
$(".open_btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".open_btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});



// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
    $('.glowAnime').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("glow");

        } else {
            $(this).removeClass("glow");
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    //spanタグを追加する
    var element = $(".glowAnime");
    element.each(function () {
        var text = $(this).text();
        var textbox = "";
        text.split('').forEach(function (t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay: .' + i + 's;">' + t + '</span>';
                } else {
                    var n = i / 10;
                    textbox += '<span style="animation-delay: ' + n + 's;">' + t + '</span>';
                }

            } else {
                textbox += t;
            }
        });
        $(this).html(textbox);
    });

    GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

$(window).on('load', function () {
    // portfolioが終わった後（1.8秒後）にヘッダーを動かす
    setTimeout(function () {
        $('.header_menu li').each(function (i) {
            var self = $(this);
            setTimeout(function () {
                self.addClass('nav_glow');
            }, i * 200);
        });
    }, 1800);
});



// サービスの開閉ボタン
$('.service_front').on('click', function () {
    const $card = $(this).closest('.service_card');
    $card.find('.service_back').addClass('active');
    $card.find('.service_front').addClass('dimmed');
});

$('.service_back').on('click', function () {
    const $card = $(this).closest('.service_card');
    $card.find('.service_back').removeClass('active');
    $card.find('.service_front').removeClass('dimmed');
});




// セクションフェードイン
$(window).on('load scroll', function () {
    $('.fade_in').each(function (i) {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 100) {
            var delay = $(this).data('delay') || 0;
            var self = $(this);
            setTimeout(function () {
                self.addClass('active');
            }, delay);
        }
    });
});