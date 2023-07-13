import { Auth } from 'aws-amplify'

const Register = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        // console.log(e.target)

        try {
            const { user } = await Auth.signUp({
                username: data.email,
                password: data.password,
                attributes: {
                    email: data.email,
                    phone_number: '+5491133334444'
                }
            })
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" name="email"/>
                <input type="password" placeholder="Password" name= "password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
