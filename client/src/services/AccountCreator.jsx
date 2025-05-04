import sodium from 'libsodium-wrappers'

async function generateKeyPair() {
    await sodium.ready;

    const keypair = sodium.crypto_box_keypair();
    console.log('Public Key:', sodium.to_base64(keypair.publicKey));
    console.log('Private Key', sodium.to_base64(keypair.privateKey));
}