'use client'
import MainButton from '@/components/MainButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

export default function Register () {
  const router = useRouter()
  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log('hello World')
    router.push('/dashboard')
  }
  return (
    <div className="w-screen h-screen grid place-content-center text-black bg-super-light">
      <div className="w-80 lg:w-96 h-full lg:h-auto bg-white p-5 lg:p-10 shadow-lg">
        <h1 className="text-center text-lg font-semibold">New to matchalink?</h1>
        <p className="text-center text-xs mb-5">Let&apos;s create an account</p>
        <form onSubmit={onSubmitForm} className="w-full flex flex-col gap-3">
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
          <MainButton type="submit" >Sign Up</MainButton>
          <p className="text-xs text-center">Or</p>
          <button className="w-full rounded-md p-2 flex items-center justify-center gap-2 border border-main-color bg-white">
            <FcGoogle size={30} />
            <p>Sign up with google</p>
          </button>
        </form>
        <div className='flex gap-1 justify-center mt-3'>
          <p>Have an account?</p>
          <Link href="/login" className="text-main-color">Login here</Link>
        </div>
      </div>
    </div>
  )
}