import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log("Login with Google");
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col py-10">
      <div className="flex flex-col items-center h-full justify-center py-10">
        <p className="text-3xl text-primary mb-3">Welcome Back !</p>
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full p-6 bg-gray-50 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
              <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                Sign in to your account
              </h1>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M19.6 10.23c0-.64-.06-1.25-.16-1.83H10v3.46h5.5a4.71 4.71 0 0 1-2.04 3.1v2.58h3.3c1.93-1.78 3.04-4.41 3.04-7.31z" fill="#4285F4"/>
                    <path d="M13.46 14.96a5.3 5.3 0 0 1-3.46 1.24c-2.65 0-4.89-1.79-5.69-4.19H1v2.65a9.93 9.93 0 0 0 5.46 3.09v-2.58z" fill="#34A853"/>
                    <path d="M3.92 10c-.12-.37-.19-.76-.19-1.17 0-.41.07-.8.19-1.17V5.01H1A9.93 9.93 0 0 0 .04 10c0 1.6.38 3.11 1.04 4.45l2.84-2.45z" fill="#FBBC05"/>
                    <path d="M10 3.95c1.45 0 2.75.5 3.78 1.49l2.84-2.45C14.89 1.58 12.65 0 10 0 6.54 0 3.56 2.13 2.3 5.01l2.84 2.45A5.77 5.77 0 0 1 10 3.95z" fill="#EA4335"/>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{' '}
                  <a
                    href="/register"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Sign up here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
