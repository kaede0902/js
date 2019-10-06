
class AES256 {
    encrypt(plainText, key){
        const textBytes = aesjs.utils.utf8.toBytes(plainText);

        const aesCtr = new aesjs.ModeOfOperation
                                .ctr(key, new aesjs.Counter(5));

        const encryptedBytes = aesCtr.encrypt(textBytes);

        return aesjs.utils.hex.fromBytes(encryptedBytes);
    }

    decrypt(encryptedText, key){
        const encryptedBytes = aesjs.utils.hex.toBytes(encryptedText);

        const aesCtr = new aesjs.ModeOfOperation
                                .ctr(key, new aesjs.Counter(5));

        const decryptedBytes = aesCtr.decrypt(encryptedBytes);

        return aesjs.utils.utf8.fromBytes(decryptedBytes);
    }
}

const pbkdf2 = require('pbkdf2'),
      crypto = require('crypto'),
      aesjs = require('aes-js'),
      NodeRSA = require('node-rsa'),
      aes256 = new AES256();


// Common data
const Hsalt = 'CommonSaltForHash';

// Server data
const Skey = new NodeRSA({b: 512}),
      Spub = Skey.exportKey('public'),
      Spriv = Skey.exportKey('private'),
      Spath = 'ServerFilePath';


// Plain text data
const PTdata = 'PlainTextData';

// Local data
const Lseed = 'SEED',// User input
      Lsecret = pbkdf2.pbkdf2Sync(
          Lseed,
          Hsalt,
          1,
          32,
          'sha512'),
      Lsalt = crypto.randomBytes(16)
                    .toString('base64')
                    .substring(0, 16);


// Encrypted data
const pubKey = new NodeRSA(Spub),
      ED1 = {
   data: aes256.encrypt(
       PTdata,
       Buffer.from(Lsalt.concat(Lsecret))
             .slice(0, 32)),
    salt: pubKey.encrypt(Lsalt, 'base64'),
    path: Spath,
    key: pbkdf2.pbkdf2Sync(
        Hsalt.concat(Lsecret, Spub),
        Lsalt,
        1,
        32,
        'sha512'),
};

console.log('ED1:', ED1, '\n');


// Decrypted data
const privKey = new NodeRSA(Spriv),
      salt = privKey.decrypt(ED1.salt, 'utf8'),
      secret = pbkdf2.pbkdf2Sync(
          Lseed,
          Hsalt,
          1,
          32,
          'sha512'),
      data = aes256.decrypt(
          ED1.data,
          Buffer.from(salt.concat(secret))
                .slice(0, 32));

console.log('PTdata:', data);
