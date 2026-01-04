import DemoContainer from "@/components/demo-container";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <DemoContainer>
      <div className="flex items-center justify-center gap-6">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Signup</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </DemoContainer>
  );
}
