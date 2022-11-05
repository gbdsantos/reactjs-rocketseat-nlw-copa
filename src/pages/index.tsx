// interface HomeProps {
//   count: number;
// }

import Image from "next/image";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import usersAvatarExampleImg from "../assets/users-avatar-example.png";
import logoImg from "../assets/logo.svg";

import iconCheckImg from "../assets/icon-check.svg";

export default function Home() {
  return (
    <div>
      <main>
        <Image alt="NLW Copa" src={logoImg} />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image alt="" src={usersAvatarExampleImg} />

          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form action="">
          <input required placeholder="Qual nome do seu time?" type="text" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas
        </p>

        <div>
          <div>
            <Image alt="" src={iconCheckImg} />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image alt="" src={iconCheckImg} />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
        quality={100}
        src={appPreviewImg}
      />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3333/pools/count");
//   const data = await response.json();

//   return {
//     props: {
//       count: data.count,
//     },
//   };
// };
