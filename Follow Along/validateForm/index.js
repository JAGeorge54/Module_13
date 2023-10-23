function SignUp(){
    const [values, handleChange] = useForm({year:'',name:'',email:'',password:'',checkbox:false});
    
    function handle(){
        console.log('values:',values);
    }

    return (
        <>
        <div>Name</div>
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
        <div>Email</div>
        <input type="text" name="email" value={values.email} onChange={handleChange}/>
        <div>Password</div>
        <input type="text" name="password" value={values.password} onChange={handleChange}/>
        <br />
        <button onClick={handle}>Submit</button>    
        </>
    );
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)