export function isLengthEnough(password) {
    if (password.length >= 8 && password.length <= 16) {
        return {
            success: true,
            message: "✅ Password length is within acceptable range."
        };
    } else {
        return {
            success: false,
            message: "❌ Your password must be between 8 and 16 characters long."
        };
    }
}
