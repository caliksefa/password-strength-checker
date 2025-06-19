# 🔐 Password Strength Checker

A modular Node.js CLI project for evaluating password strength by checking both the length and the character variety (uppercase, lowercase, digit, special character). Built step-by-step for learning, practicing, and clean code architecture.

---

## 📦 Project Structure

```
password_strength_checker/
├── functions/
│   ├── getPassword.js
│   ├── passwordLengthControl.js
│   └── characterTypeControl.js
├── prompt/
│   └── prompt.js
├── main.js
└── package.json
```

---

## 🚀 Features

- ✅ Checks if password length is between 8-16 characters
- ✅ Validates presence of:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Digits (0–9)
  - Special characters (!@#$%^&* etc.)
- 🔁 Loops until a valid password is provided
- 💬 Provides clear feedback using emoji-enhanced messages
- 📦 Fully modular structure (each function in its own file)

---

## ⚙️ Installation

> Make sure [Node.js](https://nodejs.org/) is installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/caliksefa/password_strength_checker.git
```

2. Navigate into the project directory:

```bash
cd password_strength_checker
```

3. Install the required dependency:

```bash
npm install prompt-sync
```

---

## ▶️ Usage

To run the application:

```bash
node main.js
```

Then follow the prompts in the terminal to enter a password. The app will guide you step-by-step.

---

## 🧪 Example Output

### ✅ Strong Password:

```
🔐 Please enter your password: password1324-
🔍 Checking password length...
✅ Password length is within acceptable range.

🔍 Checking password character types...
✅ Password contains all required character types.

🎉 Congratulations! Your password is strong and accepted.
```

### ❌ Weak Password:

```
🔐 Please enter your password: password1324
🔍 Checking password length...
✅ Password length is within acceptable range.

🔍 Checking password character types...
❗ Password is missing: special character.

❗ Please try again.
```

---

## 🧠 Educational Goals

This project is part of a progressive learning path focusing on:

- JavaScript fundamentals
- Modular coding practices
- User input handling in CLI
- Error handling and UX in console apps

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to fork, modify, or build upon it for educational purposes.

---

## ❤️ Author

Made with love by [Your Name](https://github.com/caliksefa)
