import Image from "next/image";

export default function Home() {
  return (
     
        <div className="container">
          <h1>
            Bem-vindo a biblioteca do IFPB!
          </h1>
          <Image
          src="/logoif.png"
          alt="logo IFPB"
          width={200}
          height={300}
          />
        </div>
     

  );
}
