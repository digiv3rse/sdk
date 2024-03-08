import { ICipher, IEncryptionProvider } from "../IEncryptionProvider.js";
export declare class WebCryptoEncryptionProvider implements IEncryptionProvider {
    createCipher(): Promise<ICipher>;
    importCipher(key: Uint8Array): Promise<ICipher>;
}
