# BowserJR

## 概要

BowserJRは、Zenn CLIを使用して記事や本を管理するためのリポジトリです。

## Zenn CLI

* [📘 How to use](https://zenn.dev/zenn/articles/zenn-cli-guide)

## 実行コマンド一覧

| コマンド | 実行結果 |
|---------|---------|
| `npx zenn init` | Zenn 用のセットアップを行う（`articles`、`books` ディレクトリと設定ファイルを生成） |
| `npx zenn new:article` | 新しい記事用のマークダウンファイルを `articles` ディレクトリに作成する（ランダムな slug で生成） |
| `npx zenn new:article --slug 記事のスラッグ --title タイトル --type idea --emoji ✨` | 指定したオプションで新しい記事を作成する（`type` は `tech` または `idea`） |
| `npx zenn new:book` | 新しい本の雛形を `books` ディレクトリに作成する（ランダムな slug で生成） |
| `npx zenn new:book --slug ここにスラッグ` | 指定した slug で新しい本の雛形を作成する |
| `npx zenn preview` | ローカルサーバーを起動してブラウザでプレビューする（デフォルトは `localhost:8000`） |
| `npx zenn preview --port 3000` | 指定したポート番号でプレビューサーバーを起動する |
| `npx zenn preview --no-watch` | ファイルの監視と自動リロードを無効にしてプレビューする |

## 記事・本の公開方法

記事や本を公開するには以下の手順を実行する。

1. マークダウンファイルの Front Matter で `published: true` に設定
2. GitHub リポジトリにコミット & プッシュ
3. Zenn が自動的に同期してデプロイを実行

デプロイ履歴は [ダッシュボード](https://zenn.dev/dashboard/deploys) から確認できる。
