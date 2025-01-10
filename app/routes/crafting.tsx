import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mementa.blog / Crafting " },
    { name: "Crafting section", content: "Welcome to my crafting blog!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
      
        crafting
      </div>
    </div>
  );
}

