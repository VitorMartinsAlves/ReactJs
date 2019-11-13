import React from 'react';
// import './App.css';
import Footer from '../../Componentes/Footer/Footer';

import Header from '../../Componentes/Header/Header';

function Home() {
  return (
    <div className="Home">
        <Header/>
            <main>
                <div className="conteudo">
                    <div>
                    </div>
                    <section className="txt">
                        <h1>VINGADORES</h1>
                        <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar. Você também pode digitar uma palavra-chave para pesquisar online o vídeo mais adequado ao seu documento. Para dar ao documento uma aparência profissional, o Word fornece designs de cabeçalho, rodapé, folha de rosto e caixa de texto que se complementam entre si. Por exemplo, você pode adicionar uma folha de rosto, um cabeçalho e uma barra lateral correspondentes. Clique em Inserir e escolha os elementos desejados nas diferentes galerias. Temas e estilos também ajudam a manter seu documento coordenado.</p>
                    </section>
                </div>
                <div className="imgv">
                </div>
            </main>
            <Footer />
    </div>
  );
}

export default Home;
