import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser( data.email, data.password )
            .then( result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                .then( () => {
                    navigate('/');
                })
                .catch( err => console.error(err))
            })
            .catch( err => {
                console.error( err )
                setSignUpError(err.message)
            })
    }

    return (
        <div className='flex justify-center items-center w-96 mx-auto'>
            <div className='w-96 p-5'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full " placeholder="Enter Name" />
                        

                    </div>
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

                    { signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p className='text-center mt-2'>Already Have an Account, Please <Link className='text-primary' to="/login">Login</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;