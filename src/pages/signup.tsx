export default function SignupPage() {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <label>
          <span>Email</span>
          <input type="email" className="input" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" className="input" />
        </label>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}
