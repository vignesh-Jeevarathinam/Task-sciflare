import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()
    const handleSubmit = useCallback(
        (e: FormEvent<HTMLButtonElement>) => {
            e.preventDefault();
            navigate('/list')
        },
        [name, password],
    );

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            value={name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <Link className='flex items-center justify-center text-blue-400 font-2xl mt-4 w-full' to="/signUp">
                    or sign up
                </Link>
            </div>
        </div>
    );
};

export default Login;
