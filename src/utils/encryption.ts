const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "your-fallback-encryption-key";

export const encryptToken = (token: string): string => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: number) => ("0" + Number(n).toString(16)).substr(-2);
  // Sửa hàm applySaltToChar để xử lý mảng số đúng cách
  const applySaltToChar = (chars: number[]) =>
    chars.map((code) =>
      textToChars(ENCRYPTION_KEY).reduce((a, b) => a ^ b, code)
    );

  return token
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .flat() // Làm phẳng mảng kết quả
    .map(byteHex)
    .join("");
};

export const decryptToken = (encoded: string): string => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code: number) =>
    textToChars(ENCRYPTION_KEY).reduce((a, b) => a ^ b, code);

  return encoded
    .match(/.{1,2}/g)!
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

/**
 * Hàm mã hóa đối tượng thành chuỗi an toàn cho URL
 * @param obj - Đối tượng cần mã hóa
 * @param privateKey - Khóa riêng tư để mã hóa
 * @returns Chuỗi đã mã hóa an toàn cho URL
 */
export function encryptObject(obj: any) {
  try {
    // Bước 1: Chuyển đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(obj);

    // Bước 2: Mã hóa dữ liệu với khóa riêng tư
    const encryptedData = xorEncrypt(
      jsonString,
      `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`
    );

    // Bước 3: Mã hóa base64 cho kết quả
    const base64Data = btoa(unescape(encodeURIComponent(encryptedData)));

    // Bước 4: Làm cho kết quả an toàn cho URL
    const urlSafeData = makeBase64UrlSafe(base64Data);

    return urlSafeData;
  } catch (error) {
    console.error("Lỗi khi mã hóa đối tượng:", error);
    throw new Error("Không thể mã hóa đối tượng");
  }
}

/**
 * Hàm giải mã chuỗi thành đối tượng
 * @param encryptedStr - Chuỗi đã mã hóa
 * @param privateKey - Khóa riêng tư để giải mã
 * @returns Đối tượng đã giải mã
 */
export function decryptObject(encryptedStr: string) {
  try {
    // Bước 1: Chuyển từ dạng URL safe base64 về base64 thông thường
    const base64Data = revertUrlSafeBase64(encryptedStr);

    // Bước 2: Giải mã base64
    const binaryData = decodeURIComponent(escape(atob(base64Data)));

    // Bước 3: Giải mã với khóa riêng tư
    const jsonString = xorEncrypt(
      binaryData,
      `${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`
    );

    // Bước 4: Chuyển chuỗi JSON thành đối tượng
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Lỗi khi giải mã chuỗi:", error);
    throw new Error("Không thể giải mã chuỗi");
  }
}

/**
 * Hàm mã hóa XOR với khóa
 * @param text - Chuỗi cần mã hóa/giải mã
 * @param key - Khóa để mã hóa/giải mã
 * @returns Chuỗi đã mã hóa/giải mã
 */
function xorEncrypt(text: string, key: string): string {
  let result = "";

  // Đảm bảo khóa đủ dài bằng cách lặp lại nó nếu cần
  let fullKey = "";
  while (fullKey.length < text.length) {
    fullKey += key;
  }
  fullKey = fullKey.slice(0, text.length);

  // XOR từng ký tự
  for (let i = 0; i < text.length; i++) {
    // Chuyển đổi thành mã Unicode và thực hiện XOR
    const charCode =
      text.charCodeAt(i) ^ fullKey.charCodeAt(i % fullKey.length);
    result += String.fromCharCode(charCode);
  }

  return result;
}

/**
 * Làm cho chuỗi base64 an toàn cho URL
 * @param base64 - Chuỗi base64 cần chuyển đổi
 * @returns Chuỗi base64 an toàn cho URL
 */
function makeBase64UrlSafe(base64: string): string {
  // Thay thế các ký tự không an toàn cho URL
  return base64
    .replace(/\+/g, "-") // Thay "+" thành "-"
    .replace(/\//g, "_") // Thay "/" thành "_"
    .replace(/=/g, "~"); // Thay "=" thành "~"
}

/**
 * Chuyển đổi từ chuỗi base64 an toàn cho URL về chuỗi base64 thông thường
 * @param urlSafeBase64 - Chuỗi base64 an toàn cho URL
 * @returns Chuỗi base64 thông thường
 */
function revertUrlSafeBase64(urlSafeBase64: string): string {
  // Đảo ngược các thay thế ký tự URL safe
  let base64 = urlSafeBase64
    .replace(/-/g, "+") // Thay "-" về "+"
    .replace(/_/g, "/") // Thay "_" về "/"
    .replace(/~/g, "="); // Thay "~" về "="

  // Đảm bảo độ dài chuỗi base64 là bội số của 4
  while (base64.length % 4 !== 0) {
    base64 += "=";
  }

  return base64;
}
