import { LoginForm } from "@/components/login-form";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <LoginForm className="w-full max-w-sm" error={error} />
    </div>
  );
}
