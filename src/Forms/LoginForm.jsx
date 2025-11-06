function LoginForm() {
    let login = "Login"
    function handleLogin () {

    }
    return ( 
        <div>
            <form onSubmit={handleLogin}> 
                <input type="text"/>
                <input type="password"/>
                <input type="submit" value={login} />
            </form>
        </div>
     );
}

export default LoginForm;