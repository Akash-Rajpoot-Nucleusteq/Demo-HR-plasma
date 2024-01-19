class InputValidator {
    static isValidEmail(input) {
        input = input.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input === '') {
            return "Field should not be empty."
        } else if (!emailRegex.test(input)) {
            return "Invalid email format."
        } else {
            return ''
        }
    }

    static isValidPassword(input) {
        input = input.trim();
        if (input === '') {
            return "Field should not be empty."
        } else {
            return ''
        }
    }

    static isEmpty(input) {
        console.log(input);
        input = input.trim();
        if (input === '') {
            return 'Field should not be empty.'
        } else {
            return ''
        }
    }
    static isNull(input) {
        if (input === null) {
            return 'Field should not be null.'
        } else {
            return ''
        }
    }

    static isObjectEmpty(obj) {
        for (const key in obj) {
            if (obj[key] === null || obj[key] === '') {
                return true; // Found a null or empty string value
            }
        }
        return false; // No null or empty string values found
    };
}

export default InputValidator;