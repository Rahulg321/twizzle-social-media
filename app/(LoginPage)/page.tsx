import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <h1>Welcome to twizzle social media</h1>
      <p>your doorstep to the world</p>
      <p>please login to continue</p>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </>
  );
}
