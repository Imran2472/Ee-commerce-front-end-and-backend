import React, { useContext, useState } from 'react'
const btn = "sign up"
import { Link } from 'react-router-dom'
import AppContext from '../../../context/AppContext'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const {RegisterUser} = useContext(AppContext)
    const [FormData, setFormData] = useState({
      fullname: "",
      email: "",
      password: ""
    })
    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({...FormData, [name]:value })
    }
    const {fullname, email, password} = FormData
    const handleSubmit = async(e) => {
      e.preventDefault();
      const result = await RegisterUser(fullname, email, password)
      if(result.success){
        navigate('/login')
      }
    }
    return (
      <>
        <div className="signup w-[100%] py-[5rem] flex items-center justify-center px-[1rem]">
        <div className="w-[400px] overflow-y-hidden p-[2rem] border-[1px] border-slate-200 shadow-light-shadow rounded-3xl max-[454px]:w-[100%] max-[454px]:p-[1rem] relative">
        {/* onSubmit={handleSubmit(onSubmit)} */}
            <form  method="dialog" onSubmit={handleSubmit}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
              <h3 className="font-bold text-2xl text-center">sign up Form</h3>
                <div className="inputs-fields flex flex-col gap-3 p-0">
                  <div className="name flex flex-col">
                  <label htmlFor="name" className='text-sm font-medium text-white-light py-2'>Name</label>
                  <input type="text" id="name" placeholder='Enter Your Name' className='text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0'
                  name="fullname"
                  value={FormData.fullname}
                  onChange={handleChange}
                  required={true}
                   />
                  </div>
                  <div className="email flex flex-col">
                  <label htmlFor="Email" className='text-sm font-medium text-white-light py-2'>Email</label>
                  <input type="email" id="Email" placeholder='Enter Your Email' className='text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0'
                  name="email"
                  value={FormData.email}
                  onChange={handleChange}
                  required={true}
                   />
                 
                  </div>
                  <div className="password flex flex-col">
                    <label htmlFor="password" className='text-sm font-medium text-white-light py-2'>password</label>
                    <input type="password"  id="password" placeholder='Enter Your password'  className='text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0'
                    name="password"
                      value={FormData.password}
                      onChange={handleChange}
                      required={true}
                    />

                  </div>
                  <div className="button text-right">
                    <input type="submit" className='bg-primary hover:bg-pink-ho text-base px-[20px] py-[7px] capitalize cursor-pointer text-white rounded-lg hover:bg-black' value={btn}/>
                  </div>
                      <div className="info text-center text-sm font-medium text-white-light">already have an account? <Link to="/login" className='text-blue-500 hover:underline cursor-pointer'  
                      >log in</Link>
                      </div>
                </div>
                
            </form>
          </div>
        </div>
      </>
    )
  }

export default Register

