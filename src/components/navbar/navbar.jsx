import NavbarAnimated from "@/components/navbar/navbar-animated";



export default function Navbar() {
    return <nav className="fixed w-full flex items-center justify-between p-10 py-2 z-50">
        <div>
            <img src="/ritu-logo-full-white.png" alt="RITU logo" className="h-[80px]"/>
            RITU
        </div>

        <NavbarAnimated/>
        {/*<div className="nav-bar-glass rounded-2xl flex items-center justify-between px-7 py-2 h-fit gap-8">*/}
        {/*    <Link href="/public" className={navCSS.navbar_item}>*/}
        {/*        Home*/}
        {/*    </Link>*/}
        {/*    <Link href="/public" className={navCSS.navbar_item}>*/}
        {/*        Events*/}
        {/*    </Link>*/}
        {/*    <Link href="/public" className={navCSS.navbar_item}>*/}
        {/*        Culturals*/}
        {/*    </Link>*/}
        {/*    <Link href="/public" className={navCSS.navbar_item}>*/}
        {/*        Accommodation*/}
        {/*    </Link>*/}
        {/*    <Link href="/public" className={navCSS.navbar_item}>*/}
        {/*        Gallery*/}
        {/*    </Link>*/}
        {/*    <Link href="/public" className={navCSS.navbar_item}>*/}
        {/*        Contact*/}
        {/*    </Link>*/}

        {/*    <button className="text-white">*/}
        {/*        <Grip />*/}
        {/*    </button>*/}
        {/*</div>*/}
    </nav>
}