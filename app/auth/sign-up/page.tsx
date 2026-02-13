import { SignUpForm } from "@/components/signup-form";

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <SignUpForm className="w-full max-w-sm" error={error} />
    </div>
  );
}
