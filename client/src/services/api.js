export const registerUser = async (sessionId) => {
    return fetch('/api/users/register', {
        method: "POST",
        headers: { 'Context-Type': 'application/json' },
        body: JSON.stringify({ sessionId })
    })
}