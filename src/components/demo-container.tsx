export default function DemoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center">
      <main className="flex min-h-screen w-full max-w-7xl items-center justify-center py-32 px-16 bg-neutral-50 dark:bg-neutral-900">
        {children}
      </main>
    </div>
  );
}
