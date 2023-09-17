import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Complete all tickets in 24 hours Challenge</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
    </main>
  )
}
