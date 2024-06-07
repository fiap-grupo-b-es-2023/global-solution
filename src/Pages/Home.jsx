import BackgroundVideo from "../components/BackgroundVideo";
import CategoryCard from '../components/CategoryCard';
import { Typography } from "@mui/material";
import beachImg from '../assets/CategoriesImages/beach.png';
import parkImg from '../assets/CategoriesImages/costal_park.png';
import mangroveImg from '../assets/CategoriesImages/mangrove.png';
import reefsImg from '../assets/CategoriesImages/reefs.png';

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="relative h-1/2 -z-10">
                    <BackgroundVideo />
                </div>
                <div className="relative mt-6">
                    <div className="max-w-7xl mx-12  px-12">
                        <Typography variant="h4" className="text-start">Explore por categoria</Typography>
                        <div className="grid lg:grid-cols-4 gap-10 mt-5">
                            <CategoryCard title="Praias Sustentáveis" description="Relaxe em praias ecológicas que promovem a preservação ambiental" image={beachImg} />
                            <CategoryCard title="Reserva de Corais" description="Mergulhe em reservas de corais vibrantes e protegidas." image={reefsImg} />
                            <CategoryCard title="Parques Costeiros" description="Explore parques costeiros com trilhas e vistas deslumbrantes." image={parkImg} />
                            <CategoryCard title="Mangues" description="Descubra a biodiversidade única dos manguezais preservados." image={mangroveImg} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl  mx-12 px-12 mt-6">
                <Typography variant="h4" className="text-start mb-4">Sobre o Projeto</Typography>
                <ul className="text-lg text-left space-y-2">
                    <li><p>Grupo B</p></li>
                    <li><p>André: RM 554224</p></li>
                    <li><p>Alvaro: RM 553751</p></li>
                    <li><p>Christian: RM 553775 </p></li>
                    <li><p>Filipe: RM 552906</p></li>
                    <li><p>Lucas: RM 552973</p></li>
                </ul>
            </div>

            <div className="max-w-7xl mx-12 px-12 mt-6">
                <Typography variant="h4" className="text-start mb-4">Vídeo Pitch</Typography>
                <div className="mt-4">
                    <Typography variant="body1" className="text-left">Link para o vídeo: <a href="#" className="text-blue-500 underline">Em breve</a></Typography>
                </div>
            </div>


            <div className="max-w-7xl mx-12 px-12 mt-6  ">
                <Typography variant="h4" className="text-start mb-4">Descrição do Projeto</Typography>
                <Typography variant="body1" className="mt-4 text-left">
                    O projeto <strong>Pelomar</strong> é uma plataforma de reservas de hotelaria sustentável focada em
                    promover alternativas ecológicas para o mercado de acomodação e hospedagem em áreas costeiras.
                    O Brasil possui mais de <strong>8,5 mil quilômetros de área costeira</strong>, e o turismo
                    irresponsável causa sérios problemas ambientais como poluição dos mares e destruição de habitats
                    naturais.
                    <br/><br/>
                    Nossa plataforma atende empresas de hotelaria e viajantes conscientes, oferecendo somente opções de
                    hospedagem que comprovem sua sustentabilidade.
                    Enquanto concorrentes como <strong>Booking</strong> e <strong>Trivago</strong> não possuem filtros
                    específicos para sustentabilidade, nós garantimos que cada escolha de hospedagem contribua para a
                    preservação das áreas costeiras.
                    <br/><br/>
                    Nosso modelo de receita é simples e eficaz: <strong>cobramos uma taxa por reserva</strong>,
                    permitindo reinvestir na melhoria da plataforma e verificação da sustentabilidade dos
                    empreendimentos listados.
                    <br/><br/>
                    Junte-se a nós nessa jornada para um turismo mais responsável. Reserve sua próxima estadia em "Pelomar" e faça parte da mudança para proteger nossas preciosas áreas costeiras.
                </Typography>
            </div>
        </>
    );
}

export default Home;
