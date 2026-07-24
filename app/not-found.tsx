import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-3xl font-light uppercase tracking-[0.2em] text-[#000000]">
        Page Not Found
      </h1>
      <p className="mt-4 text-sm text-[#666666]">
        The category you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 text-xs uppercase tracking-[0.25em] text-[#000000] underline underline-offset-4"
      >
        Back to Home
      </Link>
    </div>
  );
}
