import React, { useState } from "react";
import { UserCircle2, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

function LoginForm({ isDark }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Username or Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserCircle2 size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                  : "bg-gray-50 border-gray-300 focus:border-blue-500"
              } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
              placeholder="Enter username or email"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={20} className="text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full pl-10 pr-12 py-2 rounded-lg border ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                  : "bg-gray-50 border-gray-300 focus:border-blue-500"
              } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff
                  size={20}
                  className="text-gray-400 hover:text-gray-600"
                />
              ) : (
                <Eye size={20} className="text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium"
        >
          <span>Sign in</span>
          <ArrowRight size={20} />
        </button>
    </form>
  );
}

export default LoginForm;
