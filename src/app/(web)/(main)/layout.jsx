import Footer from "@/components/home/footer";
import Navbar from "@/components/navbar/navbar";

export default function Layout({children}) {
    return <main className="overflow-x-visible overflow-y-auto">
        <Navbar/>
        {children}
        <Footer/>
    </main>
}