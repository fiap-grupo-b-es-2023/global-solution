import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const About = () => {

    return (
        <>
            <div className="flex items-center flex-col p-20">
                <p className="text-xl p-6">
                    O problema de poluição nos mares brasileiros é um desafio ambiental grave e crescente. De acordo com um estudo da Oceana, 
                    o Brasil é responsável por pelo menos 325 mil toneladas de lixo plástico que são levadas ao mar todos os anos. Isso ocorre 
                    porque o país produz uma quantidade significativa de plástico, cerca de sete milhões de toneladas por ano, tornando-o o 
                    maior produtor da América Latina. Desse total, três milhões de toneladas são de plásticos de uso único, que são descartados 
                    após serem utilizados. Infelizmente, grande parte desses resíduos não é reciclada e acaba se acumulando em aterros e lixões 
                    a céu aberto. Além disso, a indústria brasileira produz cerca de 500 bilhões de itens plásticos descartáveis por ano, o que 
                    equivale a 15 mil itens por segundo.
                </p>
                <div className="flex items-center justify-center w-9/12 h-96">
                    <Doughnut data={data}/>
                    <Doughnut data={data}/>
                    <Doughnut data={data}/>
                </div>
                <p className="text-xl p-6">
                    Essa quantidade massiva de lixo plástico tem um impacto devastador sobre a vida marinha. O lixo plástico pode levar anos para 
                    se decompor e, durante esse tempo, pode causar danos irreparáveis à vida marinha. Desde zooplâncton a mamíferos e aves marinhas, 
                    muitas espécies estão sendo afetadas pela poluição plástica. Além disso, muitas dessas espécies já estão ameaçadas de extinção.
                    É urgente que sejam tomadas medidas para reduzir a produção de plástico e aumentar a reciclagem. Além disso, é fundamental educar 
                    a população sobre a importância de reduzir o uso de plásticos descartáveis e descartar os resíduos de forma adequada. O governo 
                    e a sociedade civil precisam trabalhar juntos para encontrar soluções para esse problema ambiental grave.
                </p>
                <div className="flex items-center justify-center w-9/12 h-96">
                    <Doughnut data={data}/>
                    <Doughnut data={data}/>
                    <Doughnut data={data}/>
                </div>
                <p className="text-xl p-6">É importante lembrar que a poluição dos mares brasileiros não é apenas um problema ambiental, mas também uma ameaça à economia e à saúde pública. A poluição marinha pode afetar a indústria pesqueira, o turismo e a saúde humana. Portanto, é fundamental que sejam tomadas medidas urgentes para reduzir a poluição plástica nos mares brasileiros.</p>
            </div>
        </>
    );
};

export default About;
