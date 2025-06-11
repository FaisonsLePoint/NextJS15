import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
    return (
        <div>
            <h2>Public Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
            <Image
                src="https://lh4.googleusercontent.com/proxy/3cwEa1tlRZmKgs8VKv-rigjumIkygTYjOAVOEUtnXYYmJLra3lmfM9ohRf_DQpTjbZlT5tUZkKrgHdJUJIs1RpxIWTO1QLG2Y61iJ8l_MZGmLUM"
                alt="Oups Erreur 404"
                width={512}
                height={341}
            />
        </div>
    );
}