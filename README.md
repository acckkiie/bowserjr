# BowserJR

## 概要

BowserJRは、Zenn CLIを使用して記事や本を管理するためのリポジトリである。

## ドキュメント

- [📝 Textlint 校正ルール](adr/textlint.md)
- [🔄 ワークフロー](adr/workflow.md)
- [📘 How to use zenn-cli](https://zenn.dev/zenn/articles/zenn-cli-guide)

## zenn-cli 実行コマンド一覧

| コマンド | 実行結果 |
|---------|---------|
| `npx zenn new:article` | 新しい記事用のマークダウンファイルを `articles` ディレクトリに作成する（ランダムな slug で生成） |
| `npx zenn new:book` | 新しい本の雛形を `books` ディレクトリに作成する（ランダムな slug で生成） |
| `npx zenn new:book --slug ここにスラッグ` | 指定した slug で新しい本の雛形を作成する |
| `npx zenn preview` | ローカルサーバーを起動してブラウザでプレビューする（デフォルトは `localhost:8000`） |

### 記事・本の公開方法

記事や本を公開するには以下の手順を実行する。

1. マークダウンファイルの Front Matter で `published: true` に設定
2. GitHub リポジトリにコミット & プッシュ
3. Zenn が自動的に同期してデプロイを実行

デプロイ履歴は [ダッシュボード](https://zenn.dev/dashboard/deploys) から確認できる。

## Textlint 実行コマンド一覧

| コマンド | 実行結果 |
|---------|---------|
| `npm run lint:text` | すべての Markdown ファイルの文章校正をチェックする |
| `npm run lint:text:fix` | 自動修正可能なエラーを修正する |

### トラブルシューティング

コミットがブロックされた場合は、まず `npm run lint:text` でエラーを確認し、`npm run lint:text:fix` で自動修正を試す。
