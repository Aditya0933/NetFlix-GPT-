export const checkValidData = (email, password) => {
    const checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!checkEmail) return "Email is not valid.";
    if (!checkPassword) return "Password is not valid.";

    return null;
}
