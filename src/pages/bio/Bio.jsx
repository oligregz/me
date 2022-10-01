import React from 'react';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navBar/NavBar';
import './style.css';

function Bio() {
  return (
    <div className='bioPage'>
      <NavBar />
      <h2>Um pouco de mim</h2>
      <div className="myBio">
        <p>
          <strong>SOBRE</strong> a minha pessoa, então ... Começando pelo meu nome,
          me chamo Gregory Oliveira, venho seguindo com muita intensidade
          e curiosidade nessa vida, trajetória essa que perdura por 22 anos
          e contando, sou natural do interior da Bahia, onde o sol não toca,
          ele abraça. <br />
          Atualmente sou pessoa estudante da Trybe prestes a me formar, com todos os
          conteúdos, mais de 40 projetos e carga horaria de 1500 horas batidas, posso não só dizer,
          mais também no código provar que sou um <strong>Desenvolvedor FullStack</strong>.
          Desde a minha infância, eu já era um aficionado em tecnologia, sempre me vislumbrei
          trabalhando na área. Lembro de sempre consertar meus brinquedos ou da vida a um novo
          com os restos de carrinho de controle remoto e o mais legal, era que tinha a minha identidade ali. <br />
          Com passar do tempo fui amadurecendo e encontrei no código a oportunidade de por o sonho de criança em prova e viver dele através do código, isso se deu em uma sala de aula na UFRB(Universidade Federal do Recôncavo da Bahia) a poucos anos atrás, estudando processamento e dados com Python.
          A fatídica pandemia chegou e como tudo atrasou, decidi que era hora de realinhar as coisas e fazer o que de fato queria, então fui pesquisar e encontrei a Trybe com a oportunidade que casou perfeitamente com as minhas necessidades de querer  trabalhar com tecnologia e me tornar um desenvolvedor, e bom, o resto... você pode falar comigo, será um prazer partilhar não só minha trajetória mais também conhecimentos, dúvidas, resenhas emuito mais.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Bio;
