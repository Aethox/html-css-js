import { Auth } from 'aws-amplify'

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)

        try {
            const user = await Auth.signIn(data.email, data.password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" name="email"/>
                <input type="password" placeholder="Password" name= "password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login
