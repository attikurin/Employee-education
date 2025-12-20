// ========================================
// ナビゲーションメニューのトグル
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // メニュー項目クリック時にメニューを閉じる（モバイル）
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});

// ========================================
// スムーズスクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// スクロールアニメーション
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素を監視
document.querySelectorAll('.intro-card, .point-card, .stage-model').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// タブ切り替え機能（ビジネスマナーセクション用）
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // すべてのボタンとコンテンツから activeクラスを削除
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // クリックされたボタンと対応するコンテンツに activeクラスを追加
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// ========================================
// ページトップへ戻るボタン
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ========================================
// メールタブ切り替え（ビジネス文書ページ）
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const emailTabs = document.querySelectorAll('.email-tab');
    const emailTabContents = document.querySelectorAll('.email-tab-content');

    emailTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // すべてのタブとコンテンツから active クラスを削除
            emailTabs.forEach(t => t.classList.remove('active'));
            emailTabContents.forEach(content => content.classList.remove('active'));

            // クリックされたタブと対応するコンテンツに active クラスを追加
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// ========================================
// 印刷時の処理
// ========================================
window.addEventListener('beforeprint', function() {
    // 印刷前に全セクションを展開
    document.querySelectorAll('.section').forEach(section => {
        section.style.pageBreakInside = 'avoid';
    });
});

console.log('社員教育総合ガイド 2025 - JavaScript loaded successfully');
