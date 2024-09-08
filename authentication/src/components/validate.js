export const validate = (data, type) => {
    const errors = {}
    // email:
    if (!data.email) {
        errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Invalid email"
    } else {
        delete errors.email
    }
    // password:
    if (!data.password.trim()) {
        errors.password = "Password is required"
    } else if (data.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
    } else {
        delete errors.password
    }

    if (type == "signup") {
        // name:
        if (!data.name.trim()) {
            errors.name = "Name is required"
        } else {
            delete errors.name
        }
        // confirm:
        if (!data.confirm) {
            errors.confirm = "Confirm is required"
        } else if (data.confirm !== data.password) {
            errors.confirm = "Password do not match"
        }
        // accept:
        if (!data.is_checked) {
            errors.is_checked = "Accept our regulations"
        } else {
            delete errors.is_checked
        }
    }
    return errors
}
