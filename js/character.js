// 天使キャラデータ読み込み
const loadEngel = () => {
    document.querySelector("#charaName").textContent = "天使(主人公)";

    document.querySelector("#charaDesc").innerText =
        `下界に落とされた天使（？）
    天使が使える機能のほとんどが停止しており
    言葉を発することもできない。
    落下のショックで記憶もなく、上司の言いなり`;

    document.querySelector(".linesRight").textContent = "「 ・・・。」";
    document.querySelector(".linesLeft").textContent = "「 （話が長いな・・・聞こえなかったフリしよ） 」";
    document.querySelector("#charaImg").src = 'images/character/engel.png'

    window.scroll({ top: 0, behavior: "smooth", });
}

// ドローンキャラデータ読み込み
const loadDrone = () => {
    document.querySelector("#charaName").textContent = "チャッピー";

    document.querySelector("#charaDesc").innerText =
        `天界から派遣されたサポートAI
    喋れない天使の代わりに、人間と意思疎通を
    はかってくれるが、かなり不遜。
    本名：ブルグマンシア`;

    document.querySelector(".linesRight").textContent = "『見返りもなく願いを叶えてもらえると思うなよ』";
    document.querySelector(".linesLeft").textContent = "『さっさと食いモンをよこせ！と天使が言っています』";
    document.querySelector("#charaImg").src = 'images/character/drone.png'

    window.scroll({ top: 0, behavior: "smooth", });
}

// 老人キャラデータ読み込み
const loadOldman = () => {
    document.querySelector("#charaName").textContent = "村長";

    document.querySelector("#charaDesc").innerText =
        `天使を保護した人。
    厳格な性格で、曲がったことが大嫌い。
    なったつもりはないが周りが村長と呼んでくる。
    天界と何やら確執があるようだが・・・？`;

    document.querySelector(".linesRight").textContent = "「別の村では昔、長老と呼ばれていました。四十代なのに」";
    document.querySelector(".linesLeft").textContent = "「今は村長と呼ばれます。最近引っ越してきたのに」";
    document.querySelector("#charaImg").src = 'images/character/oldman.png'

    window.scroll({ top: 0, behavior: "smooth", });
}

// 娘キャラデータ読み込み
const loadGirl = () => {
    document.querySelector("#charaName").textContent = "エンジニア";

    document.querySelector("#charaDesc").innerText =
        `村長の娘。
    建築、電気工学、プログラミングに長け
    街の困り事を一手に引き受けている。
    天使を機械扱いし、分解したがっている。`;

    document.querySelector(".linesRight").textContent = "「外骨格パーツが足りないの？」";
    document.querySelector(".linesLeft").textContent = "「あんたを分解させてくれたらきっと手に入るよ！」";
    document.querySelector("#charaImg").src = 'images/character/girl.png'

    window.scroll({ top: 0, behavior: "smooth", });
}

// ページ遷移時にURLに特定の変数が存在するかチェックして、対応する機能を実行
if (location.search == "?engel") {
    loadEngel();
} else if (location.search == "?drone") {
    loadDrone();
} else if (location.search == "?oldman") {
    loadOldman();
} else if (location.search == "?girl") {
    loadGirl();
} else {
    console.log("エラー");
};