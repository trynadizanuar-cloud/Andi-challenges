interface ValidateReturn {
    valid: boolean;
    email: string;
    checks: {
        hasAt: boolean;
        hasDot: boolean;
        validLength: boolean;
        noSpaces: boolean;
    };
}

type ValidateFunction = (email: string) => ValidateReturn;

const validateEmail: ValidateFunction = (email: string): ValidateReturn => {
    // 1️⃣ Bersihkan spasi
    let cleanedEmail = email.trim();

    // 2️⃣ Multiple string validations
    let hasAt = cleanedEmail.includes("@");
    let hasDot = cleanedEmail.includes(".");
    let validLength = cleanedEmail.length >= 5;
    let noSpaces = cleanedEmail.indexOf(" ") === -1;

    // 3️⃣ Status valid keseluruhan
    let valid = hasAt && hasDot && validLength && noSpaces;

    // 4️⃣ Return hasil
    return {
        valid,
        email: cleanedEmail,
        checks: {
            hasAt,
            hasDot,
            validLength,
            noSpaces,
        }
    };
};

// ✅ Driver code
console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));

export { };
