import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";



const SignIn = () => {
    //collect the signInUser from the AuthContext
    const {signInUser} = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            alert('Login successfully!')
            //update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = { email, lastSignInTime }

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/type'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('signin updated in DB', data)
            })
           

        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="w-11/12 mx-auto">
            <div className="hero bg-base-200 min-h-screen">

                <div className="flex justify-center items-center">


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-2xl  font-gray p-5">Login now!</h1>
                        <form onSubmit={handleSignIn}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input bg-green-100" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input bg-green-100" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button 
                                        className="btn btn-neutral mt-4">Login</button>
                                        <p>Add New coffee drinker: <Link to ='/signup'>Sign Up</Link></p>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;