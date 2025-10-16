// ヘッダー読み込み
fetch("header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#header").innerHTML = data);
// フッター読み込み
fetch("footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#footer").innerHTML = data);
// svg読み込み
fetch("svg.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#svg").innerHTML = data);
