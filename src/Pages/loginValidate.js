const loginValidate = (data) => {
    const errors = {};

    // Email Error Set
    if ((data.email.length === 0)) {
        errors.email = "Email required *";
    } else if (data.email[0].length < 4) {
        errors.email = "Email is to short *";
    } else if (!data.email[0].includes("@") || !data.email[0].includes(".") || data.email[0].includes(" ")) {
        errors.email = "Email is invalid *";
    } else {
        errors.email = true
    }


    // Password Error Set
    if ((data.password.length === 0)) {
        errors.password = "Password required *"
    } else if ((data.password[0].length < 4)) {
        errors.password = "Password is to short *"
    } else {
        errors.password = true
    }


    return errors;
}

export { loginValidate };