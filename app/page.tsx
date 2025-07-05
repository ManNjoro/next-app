import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import HeavyComponent from "./components/HeavyComponent";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <HeavyComponent />
      <div className="relative h-screen">

      <Image
        src="https://bit.ly/react-cover"
        alt="alx"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={75}
        priority
        />
        </div>
    </main>
  );
}
