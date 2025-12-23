# Textlint 校正ルール

このリポジトリでは、Zennの記事品質を保つためにtextlintを導入している。

## 導入ルールセット

| ルールセット | 用途 |
|-------------|------|
| `textlint-rule-preset-ja-technical-writing` | 技術文書向けの厳格なルール |
| `textlint-rule-preset-japanese` | 日本語の基本的な校正ルール |
| `textlint-rule-spellcheck-tech-word` | 技術用語のスペルチェック |
| `textlint-rule-preset-ja-spacing` | 全角・半角スペースの統一（認知的流暢性の向上） |

## 主要な校正ルール

### 文体

- である調を強制:「である」調のみ使用可能である
- 文末の統一: 文末は句点（）。で終わる

### 文章構造

- 文の長さ: 1文は最大120文字まで
- 助詞の重複: 同じ助詞を1文内で複数回使用できない

### 技術用語

技術用語のスペルを自動チェックする。

- `Javascript` → `JavaScript`
- `Typescript` → `TypeScript`
- `NodeJS` → `Node.js`

### 記号

- 感嘆符・疑問符: 半角の `!` と `?` は許可（GraphQLなどで使用）
- 全角の感嘆符: 全角の `!` と `?` は使用禁止

## ルールのカスタマイズ

`.textlintrc.json` を編集することで、ルールを調整できる。

### 文の長さ制限を変更

```json
{
  "rules": {
    "preset-ja-technical-writing": {
      "sentence-length": {
        "max": 150
      }
    }
  }
}
```

### 特定のルールを無効化

```json
{
  "rules": {
    "preset-ja-technical-writing": {
      "no-exclamation-question-mark": false
    }
  }
}
```

### 特定のファイルを除外

`.textlintignore` ファイルを作成する。

```
# node_modules は自動的に除外される
**/draft/**
```

## 参考リンク

- [textlint 公式ドキュメント](https://textlint.github.io/)
- [textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)
