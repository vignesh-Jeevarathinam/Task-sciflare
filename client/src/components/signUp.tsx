import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';

interface FormData {
    username: string;
    email: string;
    phoneNumber: string;
    jobRole: string;
    dob: string;
    password: string,
}

const Signup: React.FC = () => {
    const URL = "http://localhost:8000/api";
    const navigate = useNavigate()

    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        phoneNumber: '',
        jobRole: '',
        dob: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const headers = {
            Authorization: "Bearer sciflare",
            "Content-Type": "application/json",
        };

        axios.post(`${URL}/auth/signup`, formData, { headers })
            .then((response) => {
                console.log("ree", response);

                toast(`${response.data.message}`, {
                    type: "success",
                });
                navigate("/");
            })
            .catch((error) => {
                toast(`${error.message}`, { type: "error" });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-400">
            <form className="w-1/6 p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Signup</h2>

                <div className=" p-3">
                    <label htmlFor="username" className="block text-gray-600">Username</label>
                    <input type="text" placeholder='Enter your Name' name="userName" className="form-input p-2 block w-full border border-gray-700" onChange={handleChange} required />
                </div>

                <div className=" p-3">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input type="email" placeholder='Enter your Email' name="email" className="form-input p-2 block w-full border border-gray-700" onChange={handleChange} required />
                </div>

                <div className=" p-3">
                    <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
                    <input type="tel" placeholder='Enter your Number' name="phone_number" className="form-input p-2 block w-full border border-gray-700" onChange={handleChange} pattern="[0-9]*" required />
                </div>

                <div className=" p-3">
                    <label htmlFor="jobRole" className="block text-gray-600">Job Role</label>
                    <input type="text" placeholder='Enter your role' name="role" className="form-input p-2 block w-full border border-gray-700" onChange={handleChange} required />
                </div>

                <div className=" p-3">
                    <label htmlFor="dob" className="block text-gray-600">Date of Birth</label>
                    <input type="date" name="dob" className="form-input p-2 block w-full border border-gray-700" onChange={handleChange} required />
                </div>

                <div className=" p-3">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <input type="password" placeholder='Enter your Password' name="password" className="form-input p-2 block w-full border border-gray-700" onChange={handleChange} required />
                </div>

                <p className='flex items-center justify-center'>Already a member? <Link className=' text-blue-400' to='/'>Sign in</Link></p>


                <div className="flex items-center justify-center p-3">
                    <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
