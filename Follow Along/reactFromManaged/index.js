function SignUp() {
    const [year, setYear ] =  React.useState('Freshman');
    const [name, setName ] =  React.useState('');
    const [email, setEmail ] =  React.useState('');
    const [password, setPassword ] =  React.useState('');
    const [remember, setRemember ] =  React.useState('');

    function handle(){
        console.log('Year:', year);
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remembered:', remember);
    }
    return (
        <>
        <select value={year} onChange={e => setYear(e.target.value)}>
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>
        <div>Name</div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>Email</div>
        <input value={email} onChange={e => setEmail(e.target.value)}/>
        <div>Password</div>
        <input value={password} onChange={e => setPassword(e.target.value)}/>
        <div><input type="checkbox" value={remember} onChange={e => setRemember(e.target.checked)}/>Remember me</div>
        <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)