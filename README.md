
# 🔐 Anonymous Encrypted Chat (Early Stage)

A privacy-focused messaging app in progress — inspired by [Session](https://getsession.org) — that uses anonymous cryptographic identities instead of traditional logins. This project is built using the MERN stack and leverages `libsodium-wrappers` for client-side key generation.

---

## ✅ Features (Completed So Far)

- [x] Generate Curve25519 keypair using `libsodium-wrappers` in React
- [x] Store the public key (Session ID) and private key in `localStorage`
- [x] Send Session ID to backend for user registration
- [x] Save session ID in MongoDB with timestamp

---

## 🧠 Project Structure

```
anonymous-chat-app/
├── client/
│   ├── src/
│   │   ├── components/Auth/SessionInit.jsx      # Key generation + registration
│   │   ├── utils/cryptoUtils.js                 # Libsodium wrapper logic
│   │   ├── services/api.js                      # API call to backend
│   │   └── App.jsx                              # Mounted SessionInit
│   └── package.json
│
├── server/
│   ├── models/User.js                           # MongoDB user schema
│   ├── routes/userRoutes.js                     # /register route
│   ├── controllers/userController.js            # User registration logic
│   └── index.js                                 # Express server setup
│
└── README.md
```

---

## 🛠️ Installation

### Backend

```bash
cd server
npm install
npm run start  # Starts Express server on port 5000
```

### Frontend

```bash
cd client
npm install
npm run start  # Starts React app on port 3000
```

---

## 🔐 API Endpoint

### `POST /api/users/register`

Registers a new user based on their generated Session ID (public key).

**Payload:**
```json
{
  "sessionId": "base64-encoded-public-key"
}
```

---

## 🧪 Tech Stack

- **Frontend:** React + libsodium-wrappers
- **Backend:** Express + MongoDB
- **Encryption:** Curve25519 keypairs

---

## 📌 Notes

- This is an early-stage project scaffold.
- No authentication, encryption of messages, or chat features are implemented yet.
- Only session key generation and registration are complete.

---

## 📄 License

MIT

---

## ✍️ Author

**Your Name**  
GitHub: https://github.com/DARK7177
