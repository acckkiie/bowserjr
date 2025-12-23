# Markdownlint 構文ルール

このリポジトリでは、Markdown の構文とスタイルの一貫性を保つために markdownlint を導入している。

## 主要なチェック項目

### 構文チェック

- 見出しの階層: h1 → h3 のような階層のスキップを検出
- リストのインデント: 不適切なインデントを検出
- 空行: 見出しの前後の空行をチェック

### スタイルチェック

- リンクの記法: `[text](url)` vs `[text][ref]` の統一
- 箇条書きマーカー: `-` vs `*` の統一

## 無効化しているルール

`.markdownlint-cli2.jsonc` で以下の標準ルールを無効化している。

- MD013: 行の長さ制限（コードブロックなどで超過するため）
- MD040: コードブロックの言語指定（省略可能とする）
- MD041: ファイル先頭の見出し（柔軟性を持たせるため）
- MD060: テーブルのパイプスタイル（compact スタイルを許可）

## カスタムルール

このリポジトリでは、以下のカスタムルールを追加している。

### no-strong

太字の使用を禁止する。

- 理由: 強調は見出しや構造化で表現する
- 違反例: 二重アスタリスク、二重アンダースコア

### no-numbered-headings

見出し内でのナンバリング（例：`## 1. Introduction`）を禁止する。

- 理由: 見出しの順序は文書構造で自明にする
- 違反例: `## 1. 概要`、`### 2.1 詳細`

## ルールのカスタマイズ

`.markdownlint-cli2.jsonc` を編集することで、ルールを調整できる。

### カスタムルールの設定

カスタムルールは `.markdownlint-rules/` ディレクトリに配置し、`.markdownlint-cli2.jsonc` で読み込む。

```jsonc
{
  "config": {
    "default": true,
    "MD013": false
  },
  "customRules": [
    "./.markdownlint-rules/no-strong.js",
    "./.markdownlint-rules/no-numbered-headings.js"
  ]
}
```

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
- [カスタムルールの作成方法](https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md)
