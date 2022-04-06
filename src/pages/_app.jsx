//Componentes adicionas aqui ficaram visiveis a todas as paginas
//O controle de rotas tambem será manipulado por aqui

import '../../styles/globals.css';
import Header from '../../components/Header';       //Componente criado
import Footer from '../../components/Footer';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Elian | dev</title> {/* Assim todas as páginas terão o mesmo titulo */}
    </Head>

    <Header />

    <Component {...pageProps} /> {/* Componentes que serão renderizados conforme solicitados */}

    <Footer />
    </>
  );
}

export default MyApp
