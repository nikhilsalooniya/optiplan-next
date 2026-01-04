import {cn} from "@/lib/utils";

export default function DemoContainer({ children, className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main className={cn("min-h-screen w-full flex flex-col gap-8 items-center justify-center py-32 px-16", className)} {...props}>
      {children}
    </main>
  );
}
