export const getAllUsers = (req, res) => {
    console.log('Hello from the back')
    return res.status(200).json({
        data: {
            user: {
                name: 'John Doe'
            }
        }
    })
}

/* export const createUser = (req, res) => {
    try {
        errorValidation = validateUserData(req.body)
        if (errorValidation) throw new Error(errorValidation)

        errorService =

        console.log(req.body)
        console.log('Se ejecuta el metodo POST')
        return res.status(200).json({
            message: 'John Doe'
        })
    } catch (error) {
        return res.status(402).json({
            message: 'Datos insuficientes'
        })
    }
} */
