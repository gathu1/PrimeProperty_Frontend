import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from './config';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login/`, { email, password });
      console.log('Login response:', response.data);
  
      if (response.status === 200 && response.data.access) {
        // Assuming response includes role information
        const { access: token, role } = response.data;

        // Store token and role in localStorage
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userRole', role);

        setEmail('');
        setPassword('');

        // Redirect based on role
        const dashboardPath = role === 'admin' ? '/' : '/';
        navigate(dashboardPath);
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src="/static/assets/photo-1586023492125-27b2c045efd7.avif" alt="" className="w-full h-64 md:h-screen object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <section className="bg-gray-50 dark:bg-gray-900 w-full h-screen px-4 sm:px-6 lg:px-8 pt-40">
            <div className="flex flex-col items-center justify-center py-8 md:py-16 lg:py-24">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Log in
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg border black text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Log in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an account here</a>
                    </p>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Reset password? <a href="reset" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Reset password here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Signin;
