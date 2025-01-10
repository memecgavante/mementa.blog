import type { MetaFunction } from "@remix-run/node";
import '~/styles/bookcover.css'

export const meta: MetaFunction = () => {
  return [
    { title: "mementa.blog" },
    { name: "Mementa.blog", content: "Welcome to my place on the internet" },
  ];
};

export default function Index() {
  return (
    <div>
        <div className="bg"></div>
        <div className="flex h-screen items-center justify-center content">
        <div className="flex flex-col items-center body">
            <header className="">
                <a href='about'
                     target="_blank"
                     rel="noreferrer">
                      
                
                    <h1 className="title">
                        Mementa
                    </h1>
                </a>
            <p className="subtitle">.blog</p>

            </header>
            <nav className="nav">
            <ul className="navlist">
                {resources.map(({ href, text }) => (
                     <a
                     href={href}
                     target="_blank"
                     rel="noreferrer"
                     key={href}
                     >
                        <li  className="navlistitem">
                        
                            {text}
                        </li>
                    </a>
                ))}
            </ul>
            </nav>
        </div>
        </div>
    </div>
  );
}

const resources = [
  {
    href: "coding",
    text: "Coding",
  },
  {
    href: "album",
    text: "Album",
  
  },
  {
    href: "poetry",
    text: "Poetry",
    
  },
  {
    href: "writing",
    text: "Creative Writing",
    
  },
  {
    href: "crafting",
    text: "Crafting",
    
  },
];
