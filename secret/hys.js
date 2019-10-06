
const crypto = require('crypto');
const pbkdf2 = require('pbkdf2');
const aesjs = require('aes-js');
const NodeRSA = require('node-rsa');

// PBKDF2ç”¨ã®å¤‰æ•°
const pbkdf2Salt = crypto.randomBytes(32);
const pbkdf2Iterations = 10000;
const pbkdf2KeyLen = 32;
const pbkdf2HashFunc =  "sha256";

// æš—å·åŒ–ã®ã‚¿ãƒ¼ã‚²ãƒƒãƒˆ
const target = "Hello, World";
console.log("å¹³æ–‡ï¼š" + target);

// Lsecret
const lSeed = "test";
const lSecret = pbkdf2.pbkdf2Sync(lSeed, pbkdf2Salt, pbkdf2Iterations, pbkdf2KeyLen, pbkdf2HashFunc);

// Lsalt
const lSalt = crypto.randomBytes(32);

// ã‚µãƒ¼ãƒãƒ¼éµãƒšã‚¢
const serverKeys = new NodeRSA({b:512}); //ãƒ‡ãƒ•ã‚©ãƒ«ãƒˆã¯pkcs1_oaep
const sPriv = serverKeys.exportKey();
const sPub = serverKeys.exportKey('pkcs1-public');
const sPrivBuf = serverKeys.exportKey('pkcs1-private-der');
const sPubBuf = serverKeys.exportKey('pkcs1-public-der'); //42ãƒã‚¤ãƒˆé•·

// SPath
const sPath = ""

// ãƒãƒƒã‚·ãƒ¥ç”¨å…±é€šSALT
const hSalt = crypto.randomBytes(32);

// ED1
let ed1 = {"aes256(PTdata, Lsalt + Lsecret)": "", "encrypt(Lsalt, Spub)": "", "Spath": "", "PBKDF2(Lsecret + Hsalt + Spub)": ""}

// aes256(PTdata, Lsalt + Lsecret)
{
  let keyBase = new Array;
  for (var i=0; i<lSalt.length; i++) {
    keyBase[i] = lSalt[i] ^ lSecret[i];
  }
  encryptKey = Buffer.from(keyBase);
  const aesCtr = new aesjs.ModeOfOperation.ctr(encryptKey);
  const textBytes = aesjs.utils.utf8.toBytes(target);
  ed1["aes256(PTdata, Lsalt + Lsecret)"] = aesCtr.encrypt(textBytes);
}

// encrypt(Lsalt, Spub)
ed1["encrypt(Lsalt, Spub)"] = serverKeys.encrypt(lSalt); //Spubã§æš—å·åŒ–

// Spath
ed1["Spath"] = sPath;

// PBKDF2(Lsecret + Hsalt + Spub)
{
  let base = new Array;
  for (var i=0; i<lSalt.length; i++) {
    base[i] = lSalt[i] ^ hSalt[i] ^ sPubBuf[i];
  }
  base = Buffer.from(base);
  ed1["PBKDF2(Lsecret + Hsalt + Spub)"] = pbkdf2.pbkdf2Sync(base, pbkdf2Salt, pbkdf2Iterations, pbkdf2KeyLen, pbkdf2HashFunc);
}

// ED2
let ed2 = {"aes256(PTdata, Lsalt + Lsecret)": "", "Lsalt": "", "PBKDF2(Lsecret + Hsalt + Lsalt)": ""};

// aes256(PTdata, Lsalt + Lsecret)
ed2["aes256(PTdata, Lsalt + Lsecret)"] = ed1["aes256(PTdata, Lsalt + Lsecret)"];

// Lsalt
ed2["Lsalt"] = serverKeys.decrypt(ed1["encrypt(Lsalt, Spub)"]);
if (!ed2["Lsalt"].toString === lSalt.toString) {
  console.log("Lsaltã®å¾©å·åŒ–ã«å¤±æ•—ã—ã¾ã—ãŸ");
  return
}

// PBKDF2(Lsecret + Hsalt + Lsalt)
{
  let base = new Array;
  for (var i=0; i<lSecret.length; i++) {
    base[i] = lSecret[i] ^ hSalt[i] ^ lSalt[i];
  }
  base = Buffer.from(base);
  ed2["PBKDF2(Lsecret + Hsalt + Lsalt)"] = pbkdf2.pbkdf2Sync(base, pbkdf2Salt, pbkdf2Iterations, pbkdf2KeyLen, pbkdf2HashFunc);
}

// Lseedã‚’ãƒ¦ãƒ¼ã‚¶ãƒ¼ã«å…¥åŠ›ã—ã¦ã‚‚ã‚‰ã†ã“ã¨ã§ã€è¨ˆç®—ã«ã‚ˆã£ã¦PTdataã‚’æ±‚ã‚ã‚‰ã‚Œã‚‹
const lSeedInput = "test";
const newLSecret = pbkdf2.pbkdf2Sync(lSeedInput, pbkdf2Salt, pbkdf2Iterations, pbkdf2KeyLen, pbkdf2HashFunc);
let decrypteResult = "";
{
  let keyBase = new Array;
  for (var i=0; i< ed2["Lsalt"].length; i++) {
    keyBase[i] = ed2["Lsalt"][i] ^ newLSecret[i];
  }
  encryptKey = Buffer.from(keyBase);
  const aesCtr = new aesjs.ModeOfOperation.ctr(encryptKey);
  decrypteResult = String.fromCharCode.apply(null, aesCtr.decrypt(ed2["aes256(PTdata, Lsalt + Lsecret)"]));
}

console.log("å¾©å·åŒ–ã•ã‚ŒãŸæ–‡ï¼š" + decrypteResult);

//å¾©å·åŒ–ãƒã‚§ãƒƒã‚¯

if (!decrypteResult === target) {
  console.log("å¾©å·åŒ–ã«å¤±æ•—ã—ã¾ã—ãŸ");
}
