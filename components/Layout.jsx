import { Navbar } from "."

export default function Layout ({ children  }){
    return(
        <>
            <header>
                <Navbar />
            </header>
            
            <main>
                { children  }
            </main>
        </>
    )
}