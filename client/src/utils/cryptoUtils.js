import sodium from 'libsodium-wrappers';

export const createSessionId = async () => {
    await sodium.ready;
    const { publicKey, privateKey } = sodium.crypto_box_keypair();

    return {
        sessionId: sodium.to_base64(publicKey),
        privateKey: sodium.to_base64(privateKey)
    }
}