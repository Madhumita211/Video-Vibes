// // 
// import React from "react";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h1 className="text-2xl font-semibold mb-4">Welcome to Video Vibes</h1>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
//             type="submit"
//           >
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-black p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Login to YouTube</h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="youremail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
