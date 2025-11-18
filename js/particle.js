let particleSystem = null;
let stage = null;


window.addEventListener("load", function () {
    // Stageオブジェクトを作成します。表示リストのルートになります。
    stage = new createjs.Stage("myCanvas");

    // パーティクルシステム作成します。
    particleSystem = new particlejs.ParticleSystem();

    // パーティクルシステムの描画コンテナーを表示リストに登録します。
    stage.addChild(particleSystem.container);

    // Particle Developから保存したパラメーターを反映します。
    particleSystem.importFromJson(
        {
            "bgColor": "#00000",
            "width": 2000,
            "height": 2000,
            "emitFrequency": 29,
            "startX": 519,
            "startXVariance": 2000,
            "startY": 528,
            "startYVariance": 2000,
            "initialDirection": 0,
            "initialDirectionVariance": 200.5,
            "initialSpeed": 0.5,
            "initialSpeedVariance": 0,
            "friction": 0.001,
            "accelerationSpeed": 0,
            "accelerationDirection": 0,
            "startScale": 0,
            "startScaleVariance": 0.2,
            "finishScale": 0.05,
            "finishScaleVariance": 0.05,
            "lifeSpan": 500,
            "lifeSpanVariance": 0,
            "startAlpha": "0.51",
            "startAlphaVariance": "1",
            "finishAlpha": "0",
            "finishAlphaVariance": "0",
            "shapeIdList": [
                "triangle",
                "circle"
            ],
            "startColor": {
                "hue": "0",
                "hueVariance": "0",
                "saturation": "0",
                "saturationVariance": 0,
                "luminance": "100",
                "luminanceVariance": "47"
            },
            "blendMode": true,
            "alphaCurveType": "0",
            "VERSION": "1.0.0"
        }
    );

    // フレームレートの設定
    createjs.Ticker.framerate = 60;
    // requestAnimationFrameに従った呼び出し
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    // 定期的に呼ばれる関数を登録
    createjs.Ticker.addEventListener("tick", handleTick);
});

function handleTick() {
    // パーティクルの発生・更新
    particleSystem.update();

    // 描画を更新する
    stage.update();
}