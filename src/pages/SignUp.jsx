import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault(); // Prevents page reload
       // console.log('sign up coming ...')
       const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
     //  console.log(email, password);
       createUser(email, password)
       .then(result => {
       // console.log(result.user)
        // creation time
        const createdAt = result.user.metadata.creationTime;        
        const newUser = {name, email, createdAt}
        // save new user information to database
        fetch('https://coffee-store-server-wine-pi.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
       })
       .catch(error => {
        console.log('Error:', error)
       })
    }
    return (
        <div className="w-11/12 mx-auto">
            <div className="hero bg-base-200 min-h-screen">

                <div className="flex justify-center items-center">


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-2xl  font-gray p-5">Sign Up now!</h1>
                        <form onSubmit={handleSignUp} action="">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name="name" className="input bg-green-100" placeholder="Your name" />
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input bg-green-100" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input bg-green-100" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Sign up</button>
                                </fieldset>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;