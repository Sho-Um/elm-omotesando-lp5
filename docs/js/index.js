//SVGアニメーションの描画
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 100,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
}
);

$(window).on('load',function(){
    $("#splash").delay(3200).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(3200).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェードアウト
        stroke.play();//SVGアニメーションの実行
});


$(window).on('load',function(){	
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(50).fadeOut('slow',function(){//ローディングエリア（splashエリア）を0.05秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
	
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる    
});