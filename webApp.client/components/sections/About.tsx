import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Wrench, Clock, ThumbsUp } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <main className="container mx-auto px-4 py-8">
        <motion.h2
          className="text-6xl font-roboto font-black mb-8 text-white tracking-tight text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre <span className="text-[#8B0000]">Nós</span>
        </motion.h2>
        <motion.section
          className="bg-[#111] rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="md:flex flex-col md:flex-row">
            <div className="md:w-1/2 order-2 md:order-1 relative aspect-square">
              <Image
                src="/images/about-us-image.png"
                alt="Car Maintenance Setup"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            </div>
            <div className="md:w-1/2 p-6 order-1 md:order-2 bg-[#111111]">
              <p className="text-gray-200 mb-6 leading-relaxed font-open-sans">
                A nossa empresa tem sido líder na reparação de discos de
                embraiagem há mais de 50 anos, e isso não é por acaso. Desde o
                nosso início, comprometemo-nos a oferecer o mais alto padrão de
                qualidade e serviço aos nossos clientes. Utilizando tecnologia
                de ponta e conhecimentos especializados acumulados ao longo de
                décadas, garantimos que cada disco de embraiagem seja reparado
                com precisão e durabilidade.
              </p>
              <p className="text-gray-200 mb-6 leading-relaxed font-open-sans">
                O segredo do nosso sucesso reside na nossa equipe altamente
                qualificada, composta por técnicos experientes que conhecem cada
                detalhe dos discos de embraiagem. Eles não apenas realizam
                reparos meticulosos, mas também oferecem aconselhamento
                personalizado para garantir que cada cliente obtenha a solução
                ideal para suas necessidades.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Wrench className="text-[#8B0000] mr-2" />
                  <span className="font-roboto font-medium">
                    Reparação Exata e Confiável
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-[#8B0000] mr-2" />
                  <span className="font-roboto font-medium">
                    Serviço Rápido
                  </span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="text-[#8B0000] mr-2" />
                  <span className="font-roboto font-medium">
                    Qualidade Máxima
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
};

export default About;
