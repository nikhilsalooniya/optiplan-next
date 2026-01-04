export default function DemoContainer({children}: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center py-32 px-16">
      {children}
    </main>
  );
}
