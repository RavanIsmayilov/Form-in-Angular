export const validate = (name: string, value: string): string => {
    let error = "";

    switch(name) {
        case "firstname":
            if (!value.trim()) {
                error = "Please enter your firstname";
            }
            break;
        case "surname":
            if (!value.trim()) {
                error = "Please enter your surname";
            }
            break;
        case "email":
            if (!value.trim()) {
                error = "Please enter your email";
            } else if (!isValidEmail(value)) {
                error = "Please enter a valid email address";
            }
            break;
        // Add more validation cases for other fields as needed
        default:
            break;
    }   
    return error;
};

const isValidEmail = (email: string): boolean => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
