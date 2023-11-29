
import {useForm} from 'react-hook-form';


function Register(){

     const {register,handleSubmit,formState:{errors}}=useForm();
    //  console.log(errors);

    return(
        <div>
        <div className="register-sec">
            <div className="register-contaner">
                <div className="regiter-head">
                    <h1>Register</h1>
                </div>
                <hr/>
                <form onSubmit={handleSubmit((e)=>{
                    console.log(e)
                })}>
                    <div className="input-content">
                            {errors.firstname && <span>{errors.firstname.message}</span>}
                        <input type="text" {...register("firstname",{required:"First Name is Required"})} placeholder="First Name" />
                            {errors.lastname && <span>{errors.lastname.message}</span>}       
                        <input type="text" {...register("lastname",{required:"Last Name is Required"})} placeholder="Last Name" /><br/>
                            {errors.email && <span>{errors.email.message}</span>} 
                        <input type="email" {...register("email",{required:"Email is Required"})} placeholder="Enter Your Email" />
                            {errors.password && <span>{errors.password.message}</span>}
                        <input type="password" {...register("password",{required:"Password is Required"})} placeholder="Password" /><br/>
                            {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>} 
                        <input type="password" {...register("confirmpassword",{required:"Confirm Password is Required"})} placeholder="Confirm Password" />
                            {errors.phone && <span>{errors.phone.message}</span>} 
                        <input type="number" {...register("phone",{required:"Phone Number is Required"})} placeholder="Phone Number" />
                             
                    </div>
                    <div className="register-psw">
                        <p>Forget <a href="#">Password?</a></p>
                        <p>Not a Member? <a href="#">Sigin Up</a></p>
                    </div>
                    <div className="register-btn">
                            <button>Sign Up</button>
                        </div>
                </form>
            </div>
        </div>
     </div>
    )
    
}
export default Register;