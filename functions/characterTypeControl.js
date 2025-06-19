export function checkCharacterTypes(password) {
    let missingTypes = [];

    if (!/[A-Z]/.test(password)) missingTypes.push("uppercase letter");
    if (!/[a-z]/.test(password)) missingTypes.push("lowercase letter");
    if (!/[0-9]/.test(password)) missingTypes.push("digit");
    if (!/[!@#$%^&*()_\-+=]/.test(password)) missingTypes.push("special character");

    if (missingTypes.length === 0) {
        return {
            success: true,
            message: "✅ Password contains all required character types."
        };
    } else {
        return {
            success: false,
            message: `❗ Password is missing: ${missingTypes.join(", ")}.`
        };
    }
}
