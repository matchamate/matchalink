import MainButton from "./MainButton";

export default function RegisterModal () {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 grid place-content-center z-50">
      <div className="w-80 lg:w-96 h-full lg:h-auto bg-white p-5 lg:p-10 shadow-lg">
        <h1 className="text-center text-2xl mb-5 font-semibold">Register</h1>
        <form className="w-full flex flex-col gap-3">
          <div>
            <label>Username</label><br />
            <input type="text" placeholder="Username" className="border border-main-color rounded-sm w-full p-2" />
          </div>
          <div>
            <label>Email</label><br />
            <input type="email" placeholder="Email" className="border border-main-color rounded-sm w-full p-2" />
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" placeholder="Password" className="border border-main-color rounded-sm w-full p-2" />
          </div>
          <MainButton>Sign Up</MainButton>
          <p className="text-xs text-center">Or sign up with</p>
        </form>
      </div>
    </div>
  )
}