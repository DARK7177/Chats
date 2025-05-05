import { useEffect } from "react";
import { createSessionId } from "../utils/cryptoUtils";
import { registerUser } from "../services/api";

const SessionInit = () => {
    useEffect(() => {
        const init = async () => {
            const { sessionId, privateKey } = await createSessionId();

            localStorage.setItem('sessionId', sessionId);
            localStorage.setItem('privateKey', privateKey);

            await registerUser(sessionId);
        }

        const alreadyExists = localStorage.getItem('sessionId');
        if (!alreadyExists) init();
    }, [])

    return null
}

export default SessionInit;