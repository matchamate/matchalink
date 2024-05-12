export default function MainButton ({children, onClick, type}) {
  const defaultFunction = () => {
    console.log('error')
  }
  return (
    <button
      type={type ? type : 'button'}
      onClick={() => onClick ? onClick() : defaultFunction()}
      className="w-full p-3 bg-main-color rounded-md text-white"
    >
      {children}
    </button>
  )
}