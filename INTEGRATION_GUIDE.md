# 統合ガイド - Index.htmlの完成方法

## 概要
セクションごとに分割して作成したHTMLファイルを、index.htmlに統合する方法を説明します。

## ファイル構成
```
/
├── index.html (現在は人生100年時代まで)
├── sections/
│   ├── basic-skills.html (社会人基礎力セクション)
│   ├── business-manner.html (ビジネスマナーセクション)
│   ├── trends.html (2025年研修トレンドセクション)
│   └── design-tools.html (研修設計・実践ツールセクション)
├── css/
│   ├── style.css (メインスタイル)
│   └── additional-styles.css (追加スタイル)
└── js/
    └── main.js
```

## 統合手順

### ステップ1: CSSファイルのリンク追加
index.htmlの`<head>`セクションに、additional-styles.cssのリンクを追加します。

```html
<head>
    ...
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/additional-styles.css">  <!-- 追加 -->
    ...
</head>
```

### ステップ2: セクションの統合
index.htmlの`</section><!-- 人生100年時代セクション終了 -->`の直後、
`<!-- 印刷ボタンコンテナ -->`の前に、以下の順番でセクションを挿入します。

1. **sections/basic-skills.html** の内容をコピー&ペースト
2. **sections/business-manner.html** の内容をコピー&ペースト
3. **sections/trends.html** の内容をコピー&ペースト
4. **sections/design-tools.html** の内容をコピー&ペースト

### ステップ3: JavaScriptの更新
js/main.jsに、タブ切り替え機能を追加します（既に含まれていますが、確認してください）。

## 完成後の構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    ...
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/additional-styles.css">
    ...
</head>
<body>
    <header>...</header>
    
    <main>
        <!-- イントロセクション -->
        <section id="intro">...</section>
        
        <!-- 人生100年時代セクション -->
        <section id="life100">...</section>
        
        <!-- 社会人基礎力セクション -->
        <section id="basic-skills">...</section>
        
        <!-- ビジネスマナーセクション -->
        <section id="business-manner">...</section>
        
        <!-- 研修トレンドセクション -->
        <section id="trends">...</section>
        
        <!-- 研修設計セクション -->
        <section id="design">...</section>
        
        <!-- 実践ツールセクション -->
        <section id="tools">...</section>
        
        <!-- 印刷ボタン -->
        <div class="print-button-container">...</div>
    </main>
    
    <footer>...</footer>
    
    <script src="js/main.js"></script>
</body>
</html>
```

## 確認事項

### 1. CSSの読み込み確認
- ブラウザで開いて、スタイルが正しく適用されているか確認
- 特に社会人基礎力やビジネスマナーのセクションのスタイルを確認

### 2. ナビゲーションの動作確認
- ヘッダーのナビゲーションリンクをクリックして、各セクションにスムーズにスクロールするか確認
- モバイル表示でハンバーガーメニューが正しく動作するか確認

### 3. タブ機能の確認
- ビジネスマナーセクションの「男性」「女性」タブが切り替わるか確認

### 4. 印刷機能の確認
- 印刷ボタンをクリックして、印刷プレビューが正しく表示されるか確認

### 5. レスポンシブデザインの確認
- スマートフォン表示（375px）
- タブレット表示（768px）
- デスクトップ表示（1200px以上）

## トラブルシューティング

### スタイルが適用されない場合
1. CSSファイルのパスが正しいか確認
2. ブラウザのキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）

### ナビゲーションが動作しない場合
1. セクションのid属性が正しく設定されているか確認
2. JavaScriptファイルが読み込まれているか確認（ブラウザのコンソールを確認）

### タブ切り替えが動作しない場合
1. js/main.jsにタブ切り替えのコードが含まれているか確認
2. ボタンのdata-tab属性とコンテンツのid属性が一致しているか確認

## 自動統合スクリプト（オプション）

以下のスクリプトを使用すると、自動的に統合できます：

```bash
# sectionsフォルダの内容をindex.htmlに統合する簡単なスクリプト
# （実際の実装では手動でコピー&ペーストをお勧めします）
```

## 完成後のファイルサイズ目安
- index.html: 約80-100KB
- css/style.css: 約12KB
- css/additional-styles.css: 約22KB
- js/main.js: 約4KB

合計: 約120-140KB（圧縮前）

## 次のステップ
1. すべての統合が完了したら、ブラウザで開いて全体を確認
2. 各セクションの内容が正しく表示されているか確認
3. リンクや引用元のURLが正しく機能しているか確認
4. 最終的にREADME.mdを更新
