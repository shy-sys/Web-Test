'use strict';

{
/*=================================================
ハンバーガ―メニュー
===================================================*/
// 変数宣言
 // ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector('.hamburger-menu');

// ハンバーガーメニューがクリックされた時に表示されるメニュー画面
const navi = document.getElementById('hamburger-navigation');

 // ハンバーガーメニュー内の各セクションの要素
const humburgerMenuSections = document.querySelectorAll('.humburger-menu-section');

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('active');
    navi.classList.toggle('active');
    // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
    // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行う
});

// ハンバーガーメニュー内の各セクションをクリックした際、開いていたハンバーガーメニューを閉じる(remove)
humburgerMenuSections.forEach((humburgerMenuSection) => {
    humburgerMenuSection.addEventListener('click', function () {
        hamburgerMenu.classList.remove('active');
        navi.classList.remove('active');
    });
});
}