# docker react 開発環境

## ビルド
```angular2html
docker-compose build
```

## テンプレート作成
```angular2html
docker-compose run --rm react sh -c "npm install -g create-react-app && create-react-app {アプリ名}"
```

## 起動
```angular2html
docker-composed up
```