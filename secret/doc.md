

ローカルシード Lseed
Lsecret
ローカル自動生成SALT Lsalt
ユーザー鍵 Upriv, Upub
サーバーシード Sseed
ベース公開鍵 Sbasepub
サーバー鍵(公開鍵) Spriv(Spath), Spub(Spath)
サーバー側暗号鍵 SSEkey
ハッシュ用共通SALT Hsalt


青字: 本質的には不要だが利便性のために使う

暗号化したいデータ: PTdata (Plain Text)

【ローカル環境】
LseedをPBKDF2にかけ、Lsecretを導出する。
Lsaltを乱数より生成する


サーバーより公開鍵とSpathのペアを手に入れる
{Spub, path}


ED1(encrypted data) = {
    aes256(PTdata, Lsalt + Lsecret),
    encrypt(Lsalt, Spub),
    Spath,
    PBKDF2(Lsecret + Hsalt + Spub)
}

PBKDF2(Lsecret + Hsalt + Lsalt) => aes256(Lsecret, Lsalt)なデータをローカルに保存する。

【サーバー環境】
ED1をSSEkeyを利用しつつDynamoDBに保存する。

【データ取得A: 認証を介したデータ取得】
認証は別で実施されている。通信は暗号化されている(https)

ED2 = {
    aes256(PTdata, Lsalt + Lsecret),
    Lsalt,
    PBKDF2(Lsecret + Hsalt + Lsalt)
}
をサーバーから取得する

Lseedをユーザーに入力してもらうことで、計算によってPTdataを求められる。(もし PBKDF2(Lsecret + Hsalt + Ssalt)に対応するキャッシュがローカルにある場合、そこからLseedを求めることができる)

【データ取得B: APIキーなどによる認証されていない環境】
APIキーに対応する公開鍵(Upub)を事前に登録しておく。(※複数登録できるようにする)

サーバーに希望するUpub情報(↑での事前登録が必要)などを送る

ED3 = {
    aes256(PTdata, Lsalt + Lsecret),
    enc(Lsalt, Upub)
}
をサーバーから取得する

UprivによってLsaltを計算できる。Lseedをユーザーに入力してもらうことで、計算によってPTdataを求められる。



