import Footer from "@compopub/Footer";
import Header from "@compopub/Header";

export default function PublicLayout({children}) {
    return (
        <>
            Public layout
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}