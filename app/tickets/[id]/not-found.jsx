import Link from "next/link";

export default function NotFound()
{
   return(
    <main className="text-center">
        <h2 className="text-3xl">404</h2>
        <p>Ticket not found</p>
        
            <Link href="/tickets">
            <button className="btn-primary m-5 mx-auto">
                Dashboard
            </button>
            </Link>
    </main>
   )
}