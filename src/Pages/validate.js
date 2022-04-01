// Main Const
const validate = (data) => {
    //  Error Sets
    const errors = {};

    // Name Error Set
    if ((data.name.length === 0)) {
        errors.name = "Name required *";
    } else if (data.name[0].length < 4) {
        errors.name = "Name is to short *"
    } else {
        errors.name = true
    }

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

    // Confrim Password Error Set
    if ((data.confrimPassword.length === 0)) {
        errors.confrimPassword = "Confrim Password required *"
    } else if ((data.confrimPassword[0].length < 4)) {
        errors.confrimPassword = "Confrim Password is to short *"
    } else {
        if (errors.password && data.password[0] === data.confrimPassword[0]) {
            errors.confrimPassword = true;
            errors.finalPassword = true;
        }
        else {
            errors.confrimPassword = "Confrim Password does not match *"
        }
    }

    // Checker Error Set
    if (!(Boolean(data.checker))) {
        errors.checker = "Accepting the terms required *";
    } else {
        errors.checker = true;
    }
    // ----Return Errors
    return errors;
}

// Exporting just the function **
export { validate };