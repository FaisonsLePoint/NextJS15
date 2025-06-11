import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h2>Root Not Found</h2>
            <p>Cound not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}