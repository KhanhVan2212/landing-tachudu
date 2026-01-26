"use client";

import { useState, useEffect } from "react";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [checkingUsers, setCheckingUsers] = useState(true);
  const [debugInfo, setDebugInfo] = useState("");
  const [registrationKey, setRegistrationKey] = useState("");

  useEffect(() => {
    checkIfUsersExist();
  }, []);

  const checkIfUsersExist = async () => {
    try {
      setDebugInfo("Đang kiểm tra Payload API...");

      // Thử API test trước
      const testResponse = await fetch("/api/test-payload");

      if (!testResponse.ok) {
        throw new Error(`API not ready: ${testResponse.status}`);
      }

      const testData = await testResponse.json();
      console.log("Test API result:", testData);
      setDebugInfo(`API OK - Found ${testData.totalUsers} users`);

      if (testData.totalUsers === 0) {
        setIsRegisterMode(true);
      }
    } catch (error) {
      console.error("Error checking users:", error);
      setDebugInfo(
        `Lỗi kết nối API: ${error instanceof Error ? error.message : String(error)}`,
      );
      // Nếu API lỗi, cho phép đăng ký
      setIsRegisterMode(true);
    } finally {
      setCheckingUsers(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success && data.token) {
        localStorage.setItem("payload-token", data.token);
        localStorage.setItem("payload-user", JSON.stringify(data.user));
        onLoginSuccess();
      } else {
        setError(data.error || "Đăng nhập thất bại");
      }
    } catch (err) {
      setError(
        "Có lỗi xảy ra khi đăng nhập: " +
          (err instanceof Error ? err.message : String(err)),
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-registration-secret": registrationKey,
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Tự động đăng nhập sau khi đăng ký
        const loginResponse = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const loginData = await loginResponse.json();

        if (loginData.success && loginData.token) {
          localStorage.setItem("payload-token", loginData.token);
          localStorage.setItem("payload-user", JSON.stringify(loginData.user));
          onLoginSuccess();
        }
      } else {
        setError(data.error || "Đăng ký thất bại");
      }
    } catch (err) {
      setError(
        "Có lỗi xảy ra khi đăng ký: " +
          (err instanceof Error ? err.message : String(err)),
      );
      console.error("Register error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (checkingUsers) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <div className="text-center">
            <div className="mb-2 text-lg">Đang kiểm tra hệ thống...</div>
            {debugInfo && (
              <div className="mt-4 rounded bg-gray-100 p-3 text-sm text-gray-600">
                {debugInfo}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">
          {isRegisterMode ? "Tạo tài khoản Admin đầu tiên" : "Đăng nhập Admin"}
        </h1>

        {isRegisterMode && (
          <div className="mb-4 rounded border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700">
            ℹ️ Chưa có tài khoản nào. Hãy tạo tài khoản admin đầu tiên.
          </div>
        )}

        <form
          onSubmit={isRegisterMode ? handleRegister : handleLogin}
          className="space-y-4"
        >
          {isRegisterMode && (
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Họ tên
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nguyễn Văn A"
              />

              <label
                htmlFor="regKey"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Mã bảo mật (Registration Key)
              </label>
              <input
                id="regKey"
                type="password"
                value={registrationKey}
                onChange={(e) => setRegistrationKey(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập mã bảo mật từ .env"
              />
              <p className="mb-2 mt-1 text-xs text-gray-500">
                * Yêu cầu nhập đúng key từ file .env để đăng ký
              </p>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
            {isRegisterMode && (
              <p className="mt-1 text-xs text-gray-500">Tối thiểu 6 ký tự</p>
            )}
          </div>

          {error && (
            <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? isRegisterMode
                ? "Đang tạo tài khoản..."
                : "Đang đăng nhập..."
              : isRegisterMode
                ? "Tạo tài khoản Admin"
                : "Đăng nhập"}
          </button>
        </form>

        {!isRegisterMode && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsRegisterMode(true)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Chưa có tài khoản? Đăng ký
            </button>
          </div>
        )}

        {isRegisterMode && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsRegisterMode(false)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Đã có tài khoản? Đăng nhập
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
