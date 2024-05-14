export default function Layout ({children}) {
  return (
    <main className="w-screen h-screen overflow-y-auto text-black bg-super-light">
      <header className="w-full h-14 px-5 lg:px-10 bg-white fixed flex justify-between items-center shadow-md">
        <button className="text-main-color text-2xl">matchalink</button>
        <button>Hi, Melisa</button>
      </header>
      <div className="p-5 lg:p-10 mt-14">{children}</div>
    </main>
  )
}