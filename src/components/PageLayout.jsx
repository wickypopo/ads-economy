export default function PageLayout({ children }) {
  return (
    <main className="p-4 pb-0 flex flex-col items-center overflow-hidden">
      {children}
    </main>
  );
}
