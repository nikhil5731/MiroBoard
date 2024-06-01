import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // Home
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        This is a screen for authenticated users only
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
