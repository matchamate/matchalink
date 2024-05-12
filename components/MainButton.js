export default function MainButton ({children, onClick}) {
  return (
    <button className="p-3 bg-main-color rounded-md text-white">{children}</button>
  )
}