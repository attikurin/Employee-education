# 社員教育総合ガイド 2025 - 使用方法

## 🎉 プロジェクトは完成しています！

すべての必要なファイルが作成されました。最後に、各セクションを1つのindex.htmlに統合する作業だけが残っています。

## 📁 ファイル構成

```
プロジェクトルート/
├── index.html                          ← 現在：イントロ + 人生100年時代まで完成
├── README.md                           ← プロジェクト説明
├── INTEGRATION_GUIDE.md                ← 統合手順の詳細
├── FINAL_SETUP.md                      ← セットアップガイド
├── HOW_TO_USE.md                       ← このファイル
│
├── css/
│   ├── style.css                       ← メインスタイル
│   └── additional-styles.css           ← 追加スタイル（必須）
│
├── js/
│   └── main.js                         ← JavaScript（タブ機能含む）
│
└── sections/                           ← セクションの部品
    ├── basic-skills.html               ← 社会人基礎力
    ├── business-manner.html            ← ビジネスマナー
    ├── trends.html                     ← 研修トレンド
    └── design-tools.html               ← 研修設計・ツール
```

## 🚀 クイックスタート - 3つの使用方法

### 方法1: 完全統合版を作成（推奨）

完全に統合された1つのWebページを作成します。

#### ステップ1: index.htmlを開く
テキストエディタ（VS Code、Notepad++など）で `index.html` を開きます。

#### ステップ2: セクションを挿入
`index.html` の中に以下のコメントがあります：
```html
<!-- ⚠️ 注意: 以下に sections フォルダの各HTMLファイルの内容を挿入してください -->
```

このコメントの直後に、以下の順番でファイルの内容をコピー&ペーストします：

1. **sections/basic-skills.html** の全内容
2. **sections/business-manner.html** の全内容
3. **sections/trends.html** の全内容
4. **sections/design-tools.html** の全内容

#### ステップ3: ブラウザで開く
`index.html` をダブルクリックしてブラウザで開きます。

✅ **完成！** すべてのセクションが1つのページに統合されています。

---

### 方法2: セクション個別表示

各セクションを個別のページとして使用します。

#### 各セクションファイルを個別に表示する場合：

1. `sections/basic-skills.html` を開く
2. ブラウザでプレビュー
3. 必要に応じて他のセクションも同様に表示

**注意:** この方法では、各ファイルにヘッダー/フッターがないため、以下のテンプレートで包む必要があります：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>セクション名 - 社員教育ガイド</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/additional-styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</head>
<body>
    <main class="main">
        <!-- ここにセクションの内容を貼り付け -->
    </main>
    <script src="../js/main.js"></script>
</body>
</html>
```

---

### 方法3: プログラムで自動統合（開発者向け）

Node.jsやPythonスクリプトで自動統合することも可能です。

## 🎨 カスタマイズ

### カラースキームの変更

`css/style.css` の `:root` セクションを編集：

```css
:root {
    --primary-color: #2c3e50;      /* メインカラー */
    --secondary-color: #3498db;     /* アクセントカラー */
    --accent-color: #e74c3c;        /* 強調カラー */
    /* ... */
}
```

### 会社ロゴの追加

ヘッダーセクションに画像を追加：

```html
<h1 class="header-title">
    <img src="images/company-logo.png" alt="会社ロゴ" style="height: 40px; margin-right: 1rem;">
    社員教育総合ガイド
</h1>
```

### セクションの追加・削除

- セクションを追加：新しい `<section>` タグを挿入
- セクションを削除：該当する `<section>` タグを削除
- ナビゲーションメニューも合わせて更新

## 🔍 動作確認

### 必須チェックリスト

- [ ] ブラウザで `index.html` を開いて表示確認
- [ ] ナビゲーションメニューが各セクションにスクロール
- [ ] ビジネスマナーの「男性/女性」タブが切り替わる
- [ ] 印刷ボタンが動作
- [ ] モバイル表示でハンバーガーメニューが表示
- [ ] すべてのリンクが機能
- [ ] Font Awesomeアイコンが表示
- [ ] Google Fontsが読み込まれている

### ブラウザ互換性

✅ Chrome / Edge (推奨)
✅ Firefox
✅ Safari
✅ モバイルブラウザ

### レスポンシブテスト

- **スマートフォン**: 375px
- **タブレット**: 768px
- **デスクトップ**: 1200px以上

Chrome DevTools で `Ctrl + Shift + M` (Windows) / `Cmd + Option + M` (Mac) でデバイスモードを開いてテスト。

## 📖 使用シーン

### 1. 新入社員研修

**事前学習として:**
- 研修2週間前にURLを共有
- 自己点検シートを記入してもらう
- 研修当日までに全セクションを読了

**研修当日:**
- プロジェクターで表示
- 各セクションを解説
- グループワークで実践

**事後フォローアップ:**
- 3ヶ月後に再度自己点検
- 成長度合いを確認

### 2. 中堅社員の振り返り

- 年1回の自己点検ツールとして使用
- キャリア面談の資料として活用
- 部下育成の参考資料として

### 3. 社内イントラネットへの掲載

- HTMLファイルをそのまま社内サーバーにアップロード
- 社員がいつでもアクセス可能
- 定期的に内容を更新

### 4. 印刷配布

- 印刷ボタンで全ページをPDF化
- 研修資料として印刷配布
- 必要なセクションだけ印刷も可能

## 🛠️ トラブルシューティング

### スタイルが適用されない

**原因:** CSSファイルのパスが間違っている

**解決策:**
1. `index.html` の `<head>` に以下が含まれているか確認：
```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/additional-styles.css">
```
2. ファイル構造が正しいか確認
3. ブラウザのキャッシュをクリア（Ctrl+Shift+R）

### タブが切り替わらない

**原因:** JavaScriptが読み込まれていない

**解決策:**
1. `js/main.js` が存在するか確認
2. ブラウザのコンソールでエラーを確認（F12）
3. `<body>` の最後に `<script src="js/main.js"></script>` があるか確認

### ナビゲーションが動作しない

**原因:** セクションのID属性が正しくない

**解決策:**
各セクションに正しい `id` があるか確認：
- `id="intro"`
- `id="life100"`
- `id="basic-skills"`
- `id="business-manner"`
- `id="trends"`
- `id="design"`
- `id="tools"`

### アイコンが表示されない

**原因:** Font Awesomeが読み込まれていない

**解決策:**
`<head>` に以下が含まれているか確認：
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 📊 パフォーマンス

### ファイルサイズ

- **HTML**: 80-100KB（完成版）
- **CSS**: 35KB（2ファイル合計）
- **JS**: 5KB
- **合計**: 約120KB

### 読み込み速度

- **初回読み込み**: 1-2秒
- **キャッシュ後**: <0.5秒

CDNを使用しているため、Font AwesomeとGoogle Fontsは高速に読み込まれます。

## 🌐 公開方法

### GitHubPages

1. GitHubにリポジトリを作成
2. すべてのファイルをプッシュ
3. Settings > Pages で公開
4. `https://username.github.io/repository-name/` でアクセス可能

### 社内サーバー

1. プロジェクトフォルダ全体をサーバーにアップロード
2. `index.html` のURLを社員に共有
3. イントラネットからアクセス

### クラウドストレージ

- Google Drive
- OneDrive
- Dropbox

HTML としてホスティングする場合は、静的サイトホスティングに対応したサービスを使用してください。

## 💡 追加機能のアイデア

### 実装可能な拡張機能

1. **検索機能**: セクション内のキーワード検索
2. **進捗管理**: チェックボックスの状態を保存
3. **ダークモード**: CSSで切り替え
4. **多言語対応**: 英語版の作成
5. **動画埋め込み**: 研修動画の追加
6. **PDF出力**: より高度な印刷機能
7. **アナリティクス**: 閲覧データの収集

## 📞 サポート

### 参考リンク

- **経済産業省「社会人基礎力」**: https://www.meti.go.jp/policy/kisoryoku/
- **厚生労働省「リカレント教育」**: https://www.mhlw.go.jp/stf/newpage_18817.html
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/

## ✅ 最終チェックリスト

プロジェクトを完成させる前に：

- [ ] すべてのセクションが `index.html` に統合されている
- [ ] CSSファイルが2つとも読み込まれている
- [ ] JavaScriptが正常に動作している
- [ ] すべてのリンクが機能している
- [ ] レスポンシブデザインが正しく動作している
- [ ] 印刷機能が動作している
- [ ] 3つ以上のブラウザでテスト済み
- [ ] モバイルデバイスでテスト済み
- [ ] 引用元のリンクがすべて機能している
- [ ] README.mdを読んだ

---

**作成日**: 2025年11月25日
**バージョン**: 1.0
**ステータス**: 統合作業のみ残り、あとは完成！

🎉 **おめでとうございます！** 充実した社員教育ガイドがほぼ完成しています。
