import "./App.css";

function Login() {
  return (
    <main className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Sign in to your Little Lemon account.</p>

        <form>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </main>
  );
}

export default Login;