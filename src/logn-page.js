import {useForm} from 'react-hook-form'
function Lognpage(){
    const {register,handleSubmit,formState:{errors}} =useForm()
    console.log(errors);
    return(
        <div className="lodn-sec">
            <div className="logn-contaner">
                <div className="lodn-card">
                    <div className="logn-hed">
                        <div className="logn-item">
                            <h1>LOGIN</h1>
                        </div>
                    </div>
                <form onSubmit={handleSubmit((e)=>{
                    console.log(e);
                })}>        
                    <input type="email" {...register("email",{required:"Email is Required"})} placeholder="Enter Your Email or user name" /><br/>

                    {errors.email && <span>{errors.email.message}</span>}
                    <input type="password" {...register("psw",{required:"Password is Required"})} placeholder="Enter Your Password" /><br/>
                    {errors.psw && <span>{errors.psw.message}</span>}
                    <p>Forget <a href="#">Password?</a></p>
                    <div className="login-btn">
                         <button>Login In</button>
                    </div>
                    <p>Not a Member? <a href="#">Sigin Up</a></p>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Lognpage ;