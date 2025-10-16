const drawerButton = () => {
    const dButton = document.querySelector("#menuButton");
    const dMenu = document.querySelector(".drawerMenu");
    dButton.classList.toggle("active");
    dMenu.classList.toggle("active");

}

// メニューリンクをクリックしたら閉じる処理
document.addEventListener("click", (e) => {
    if (e.target.closest(".drawerMenu a")) {
        console.log("リンククリック検知");
        document.querySelector("#menuButton").classList.remove("active");
        document.querySelector(".drawerMenu").classList.remove("active");
    }
});

// ↓なぜ使えない？？？？
// document.querySelectorAll(".drawerMenu a").forEach((link) => {
//     link.addEventListener("click", () => {
//         console.log("リンククリック検知");
//         document.querySelector("#menuButton").classList.remove("active");
//         document.querySelector(".drawerMenu").classList.remove("active");
//     });
// });