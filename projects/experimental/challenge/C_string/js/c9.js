function validateEmail(email) {
  // 1. Bersihkan spasi di awal & akhir
  let cleanedEmail = email.trim();

  // 2. Validasi dasar menggunakan string methods
  let hasAt = cleanedEmail.includes("@");
  let hasDot = cleanedEmail.includes(".");
  let validLength = cleanedEmail.length >= 5;
  let noSpaces = cleanedEmail.indexOf(" ") === -1;

  // 3. Status valid keseluruhan
  let valid = hasAt && hasDot && validLength && noSpaces;

  // 4. Return hasil
  return {
    valid: valid,
    email: cleanedEmail,
    checks: {
      hasAt: hasAt,
      hasDot: hasDot,
      validLength: validLength,
      noSpaces: noSpaces
    }
  };
}

// driver code
console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("  test@domain.co.id  "));
