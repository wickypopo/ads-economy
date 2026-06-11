export default function PageLayout({ children }) {
  return (
    <main className="p-4 flex flex-col items-center overflow-hidden">
      {children}
    </main>
  );
}
