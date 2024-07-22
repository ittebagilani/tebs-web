export default function Footer() {
  return (
    <footer className="footer bg-black  text-white items-center p-4 pt-10 pb-[100px]">
      <aside className="grid-flow-col px-10 flex flex-col">
        <h1 className="text-4xl font-black">tw.</h1>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
      </aside>
      {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        
      </nav> */}
    </footer>
  );
}
