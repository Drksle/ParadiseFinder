// Telebirr signing utilities

// Fields not participating in signature
const excludeFields = [
  "sign",
  "sign_type",
  "header",
  "refund_info",
  "openType",
  "raw_request",
  "biz_content",
];

/**
 * Sign a request object for Telebirr API
 */
export function signRequestObject(
  requestObject: Record<string, any>,
  privateKey: string,
) {
  let fields: string[] = [];
  let fieldMap: Record<string, any> = {};

  for (let key in requestObject) {
    if (excludeFields.indexOf(key) >= 0) {
      continue;
    }
    fields.push(key);
    fieldMap[key] = requestObject[key];
  }

  // The fields in "biz_content" must participate in signature
  if (requestObject.biz_content) {
    let biz = requestObject.biz_content;
    for (let key in biz) {
      if (excludeFields.indexOf(key) >= 0) {
        continue;
      }
      fields.push(key);
      fieldMap[key] = biz[key];
    }
  }

  // Sort by ASCII
  fields.sort();

  let signStrList: string[] = [];
  for (let i = 0; i < fields.length; i++) {
    let key = fields[i];
    signStrList.push(key + "=" + fieldMap[key]);
  }

  let signOriginStr = signStrList.join("&");
  console.log("signOriginStr", signOriginStr);

  // In a browser environment, we'd use a library like jsrsasign
  // For this demo, we'll return a placeholder
  return signString(signOriginStr, privateKey);
}

/**
 * Sign a string with RSA private key
 */
export function signString(text: string, privateKey: string) {
  // In a real implementation, we would use a crypto library
  // For demo purposes, we'll return a placeholder signature
  console.log("Signing text:", text);
  return (
    "SIMULATED_SIGNATURE_" +
    Buffer.from(text).toString("base64").substring(0, 20)
  );
}

/**
 * Create a timestamp (seconds since epoch)
 */
export function createTimeStamp() {
  return Math.round(Date.now() / 1000).toString();
}

/**
 * Create a 32-length random string for nonce
 */
export function createNonceStr() {
  const chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let str = "";
  for (let i = 0; i < 32; i++) {
    let index = Math.floor(Math.random() * chars.length);
    str += chars[index];
  }

  return str;
}
