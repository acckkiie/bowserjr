# Markdownlint 構文ルール

このリポジトリでは、Markdown の構文とスタイルの一貫性を保つために markdownlint を導入している。

## 主要なチェック項目

### 構文チェック

- **見出しの階層**: h1 → h3 のような階層のスキップを検出
- **リストのインデント**: 不適切なインデントを検出
- **空行**: 見出しの前後の空行をチェック

### スタイルチェック

- **リンクの記法**: `[text](url)` vs `[text][ref]` の統一
- **強調の記法**: `*italic*` vs `_italic_` の統一
- **箇条書きマーカー**: `-` vs `*` の統一

## 無効化しているルール

`.markdownlint.json` で以下のルールを無効化している。

- **MD013**: 行の長さ制限（コードブロックなどで超過するため）
- **MD040**: コードブロックの言語指定（省略可能とする）
- **MD041**: ファイル先頭の見出し（柔軟性を持たせるため）
- **MD060**: テーブルのパイプスタイル（compact スタイルを許可）

## ルールのカスタマイズ

`.markdownlint.json` を編集することで、ルールを調整できる。

### 特定のルールを無効化

```json
{
  "default": true,
  "MD001": false
}
```

### HTML タグの許可

```json
{
  "MD033": {
    "allowed_elements": ["br", "details", "summary"]
  }
}
```

## 参考リンク

- [markdownlint 公式ドキュメント](https://github.com/DavidAnson/markdownlint)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
