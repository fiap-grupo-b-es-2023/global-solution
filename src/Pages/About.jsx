import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut, Bar, Pie } from 'react-chartjs-2';

const chartsData = {
    seaPollution1: {
        labels: ['Lixo marítmo de fontes terrestres', 'Lixo marítmo de outras fontes'],
        datasets: [
            {
                label: '%',
                data: [80, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    coastPollution1: {
        labels: ['Áreas impactadas pelo lixo', 'Áreas intactas'],
        datasets: [
            {
                label: '% de áreas costeiras do mundo',
                data: [85, 15],
                backgroundColor: [
                    'rgba(255, 99, 255, 0.2)',
                    'rgba(0, 255, 100, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 255, 1)',
                    'rgba(0, 255, 100, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    //Cerca de 52% da costa brasileira está sob risco “intermediário” ou “mais alto” de dano. Essa faixa deve aumentar para 81% caso os ambientes naturais sejam perdidos
    coastPollution2: {
        labels: ['Sob risco alto de dano', 'Projeção caso os ambientes naturais sejam perdidos'],
        datasets: [
            {
                axis: "y",
                label: '% da costa Brasileira',
                data: [52, 81],
                backgroundColor: [
                    'rgba(180, 180, 180, 0.2)',
                    'rgba(255, 255, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(180, 180, 180, 1)',
                    'rgba(255, 255, 0, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
};

const About = () => {

    return (
        <>
            <div className="flex items-center flex-col p-20">
                <p className="text-xl p-6">
                    O problema de poluição nos mares brasileiros é um desafio ambiental grave e crescente. De acordo com um estudo da Oceana, 
                    o Brasil é responsável por pelo menos <span className="font-black">325 mil toneladas de lixo plástico</span> que são levadas ao mar todos os anos. Isso ocorre 
                    porque o país produz uma quantidade significativa de plástico, cerca de sete milhões de toneladas por ano, tornando-o o 
                    maior produtor da América Latina. Desse total, <span className="font-black">três milhões de toneladas são de plásticos de uso único</span>, que são descartados 
                    após serem utilizados. Infelizmente, grande parte desses resíduos não é reciclada e acaba se acumulando em aterros e lixões 
                    a céu aberto. Porém, o Brasil não é a única vítima de lixo nos mares, visto que mundialmente é observado que cerca de 80% dos
                    lixos marítmos foram originados de fontes terrestres. Publicada na revista científica Conservation Biology, uma pesquisa mapeou 
                    regiões litorâneas ao redor do globo para identificar quais áreas foram muito danificadas e quais permaneceram intactas, e de 
                    acordo com o estudo, cerca de <span className="font-black">85% das áreas costeiras foram impactadas</span> pelo despejo irregular de lixo nos mares.
                </p>
                <div className="flex items-center justify-center w-9/12 h-96">
                    <Doughnut data={chartsData.seaPollution1}/>
                    <Bar data={chartsData.coastPollution1}/>
                </div>
                <p className="text-xl p-6">
                    Essa quantidade massiva de lixo plástico tem um impacto devastador sobre a vida marinha. <span className="font-black">O lixo plástico pode levar anos para 
                    se decompor</span> e, durante esse tempo, pode causar danos irreparáveis à vida marinha. Desde zooplâncton a mamíferos e aves marinhas, 
                    muitas espécies estão sendo afetadas pela poluição plástica. Além disso, muitas dessas espécies já estão ameaçadas de extinção.
                    É urgente que sejam tomadas medidas para reduzir a produção de plástico e aumentar a reciclagem. Além disso, é <span className="font-black">fundamental educar 
                    a população sobre a importância de reduzir o uso de plásticos descartáveis e descartar os resíduos de forma adequada</span>. O governo 
                    e a sociedade civil precisam trabalhar juntos para encontrar soluções para esse problema ambiental grave.
                </p>
                <div className="flex items-center justify-center w-9/12 h-96">
                    <Bar data={chartsData.coastPollution2} options={{indexAxis: 'y'}}/>
                </div>
                <p className="text-xl p-6">
                    É importante lembrar que a poluição dos mares brasileiros e internacionais não é apenas um problema ambiental, mas também uma ameaça à economia e 
                    à saúde pública. A poluição marinha pode afetar a indústria pesqueira, o turismo e a saúde humana. Portanto, é fundamental que 
                    sejam tomadas medidas urgentes para reduzir a poluição nos mares, e o projeto "Pelomar" <span className="font-black">nasceu para tentar atacar esse problema</span>, 
                    promovendo alternativas ecológicas para o mercado de acomodação e hospedagem.
                </p>
                <ul className="text-sm p-8 text-slate-300">
                    <li>Fontes:</li>
                    <li>https://www.unep.org/pt-br/noticias-e-reportagens/reportagem/como-os-paises-estao-virando-mare-da-poluicao-plastica-nos-mares</li>
                    <li>https://revistagalileu.globo.com/Um-So-Planeta/noticia/2022/02/apenas-15-das-areas-costeiras-do-mundo-estao-intactas-diz-estudo.html,</li>
                    <li>https://umsoplaneta.globo.com/energia/noticia/2023/02/09/ecossistemas-costeiros-reduzem-em-25-vezes-risco-que-elevacao-do-mar-traz-ao-brasil.ghtml</li>
                </ul>
            </div>
        </>
    );
};

export default About;
