import prompt from "./prompt/prompt.js";
import { getPassword } from "./functions/getPassword.js";
import { isLengthEnough } from "./functions/passwordLengthControl.js";
import { checkCharacterTypes } from "./functions/characterTypeControl.js";

function main() {
    let passwordIsValid = false;

    console.log("🔐 Welcome to Password Strength Checker!\n");

    while (!passwordIsValid) {
        const password = getPassword(prompt);

        console.log("\n🔍 Checking password length...");
        const lengthResult = isLengthEnough(password);
        console.log(lengthResult.message);

        console.log("\n🔍 Checking password character types...");
        const typeResult = checkCharacterTypes(password);
        console.log(typeResult.message);

        if (lengthResult.success && typeResult.success) {
            passwordIsValid = true;
            console.log("\n🎉 Congratulations! Your password is strong and accepted.");
        } else {
            console.log("\n❗ Please try again.\n");
        }
    }
}

main();
