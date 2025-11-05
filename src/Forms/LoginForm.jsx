function LoginForm() {
    let login = "Login"
    return ( 
        <div>
            <form> 
                <input type="text"/>
                <input type="password"/>
                <input type="submit" value={login} />
            </form>
        </div>
     );
}

export default LoginForm;