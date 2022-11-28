import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname

    const handleLogin = data => {
        console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully')
            navigate(from, {replace: true});
        })
        .catch( err => {
            console.error( err )
            setLoginError(err.message)
        })
    }

    return (
        <div className='flex justify-center items-center w-96 mx-auto'>
            <div className='w-96 p-5'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full " placeholder="Enter Email" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password Address is required" })} className="input input-bordered w-full " placeholder="Enter Password" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text font-semibold">Forget Password?</span>
                        </label>
                    </div>



                    {/* <p>{data}</p> */}
                    <input className='btn btn-outline w-full mt-5' value="Login" type="submit" />
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError} </p>
                        }
                    </div>
                </form>
                <p className='text-center mt-2'>If You Are New User, Please <Link className='text-primary' to="/signup">Register</Link></p>

            <div className="divider">OR</div>

            <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>

        </div>
    );
};

export default Login;