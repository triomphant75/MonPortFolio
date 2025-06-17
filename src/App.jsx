import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  User,
  ChevronRight,
  Menu,
  X,
  Star,
  Calendar,
  Award,
  Eye,
  Play,
  ChevronLeft,
  ChevronUp
} from 'lucide-react';

// Composant Header avec navigation sticky
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Formation', href: '#education' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Triomphant NZIKOU
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

// Composant Hero avec animations impressionnantes
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Photo de profil */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
              {/* Remplacez ceci par votre image */}
              <img 
                src="/images/profile.jpg"  // Chemin vers votre image
                alt="Triomphant NZIKOU"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Triomphant
            </span>
            <br />
            <span className="text-gray-800">Aldi NZIKOU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Étudiant Master 1 MIAGE | Futur Business Analyst
            <br />
            <span className="text-blue-600 font-semibold">
              Transformation digitale & Optimisation des processus métier
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg"
            >
              Me contacter <ChevronRight size={20} />
            </motion.a>
            
            <motion.a
              href="/cv/Cv-Triomphant-NZIKOU.pdf" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Download size={20} /> Télécharger CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Composant About
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Passionné par la transformation digitale et l'optimisation des processus métier, 
                je suis étudiant en Master 1 MIAGE avec une solide expérience en développement web 
                et en gestion de projet Agile.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mon objectif est de devenir Business Analyst et de mettre mes compétences techniques 
                et analytiques au service de l'innovation et de l'efficacité organisationnelle.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-sm font-medium">Laxou, Nancy</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <GraduationCap size={16} className="text-green-600" />
                  <span className="text-sm font-medium">Master 1 MIAGE</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Centres d'intérêt</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      ⚽
                    </div>
                    <span className="text-sm font-medium">Football</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      📚
                    </div>
                    <span className="text-sm font-medium">Mangas</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      🎬
                    </div>
                    <span className="text-sm font-medium">Montage vidéo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Composant Formation
const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const formations = [
    {
      title: "Master 1 MIAGE",
      subtitle: "Méthodes d'informatiques appliquées à la gestion des entreprises",
      school: "Institut des Sciences du Digital Management et Cognition (IDMC), Nancy",
      period: "Septembre 2024 - Présent",
      status: "En cours",
      icon: <GraduationCap className="text-blue-600" size={24} />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Licence 3 MIASHS",
      subtitle: "Mathématiques et informatiques appliquées aux sciences humaines",
      school: "Institut des Sciences du Digital Management et Cognition (IDMC), Nancy",
      period: "Septembre 2023 - Juin 2024",
      status: "Diplômé",
      icon: <Award className="text-green-600" size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Licence GLRS",
      subtitle: "Génie Logiciel et Réseaux de Systèmes",
      school: "Institut Supérieur de Management, Dakar",
      period: "Octobre 2020 - Juin 2023",
      status: "Diplômé",
      icon: <Award className="text-green-600" size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Baccalauréat SES",
      subtitle: "Sciences Économiques et Sociales",
      school: "Lycée Henry Sylvoz, Moanda",
      period: "Septembre 2017 - Juin 2020",
      status: "Diplômé",
      icon: <User className="text-purple-600" size={24} />,
      color: "from-blue-500 to-purple-500"
    }
    
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Formation
          </h2>

          <div className="space-y-8">
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < formations.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                )}
                
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                  <div className="flex items-start gap-6">
                    <div className={`bg-gradient-to-r ${formation.color} p-3 rounded-full text-white`}>
                      {formation.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{formation.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          formation.status === 'En cours' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {formation.status}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">{formation.subtitle}</p>
                      <p className="text-blue-600 font-semibold mb-2">{formation.school}</p>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span>{formation.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      title: "Développeur web stagiaire",
      company: "Association Sainte-Agnès, Grenoble",
      period: "Avril 2024 - Juin 2024",
      tasks: [
        "Développement d'une application web en Symfony et intégration des données via SQL",
        "Rédaction des spécifications fonctionnelles et formations des utilisateurs",
        "Développement d'un trombinoscope interne sur SharePoint"
      ],
      icon: <Code className="text-blue-600" size={24} />
    },
    {
      title: "Développeur full stack stagiaire",
      company: "Institut Supérieur de Management, Dakar",
      period: "Juillet 2022 - Septembre 2022",
      tasks: [
        "Développement et maintenance d'un site web en PHP",
        "Résolution d'incidents de production",
        "Tests et validations des nouvelles fonctionnalités"
      ],
      icon: <Database className="text-purple-600" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expériences professionnelles
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gray-100 p-3 rounded-full">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-500 mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <ChevronRight size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Composant Modal pour les détails des projets
const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Carousel d'images */}
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Indicateurs */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Description détaillée */}
            <div>
              <h3 className="text-lg font-bold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{project.detailedDescription}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold mb-3">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Compétences développées */}
            <div>
              <h3 className="text-lg font-bold mb-3">Compétences développées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-500" />
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vidéo du projet */}
            {project.video && (
              <div>
                <h3 className="text-lg font-bold mb-3">Démonstration vidéo</h3>
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster={project.images[0]}
                  >
                    <source src={project.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
                Voir le code
              </motion.a>
              
              {project.liveDemo && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Démo live
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Composant Projects mis à jour
const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Système de gestion d'un Club nautique",
      description: "Application complète développée en Symfony pour la gestion des membres, embarcations et réservations d'un club nautique.",
      detailedDescription: "Application web complète développée en Symfony permettant la gestion intégrale d'un club nautique. Le système comprend la gestion des membres, des embarcations, des réservations, et des paiements. Interface administrative pour les gestionnaires et interface utilisateur pour les membres du club.",
      tech: ["Symfony", "PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      skills: ["Architecture MVC", "Gestion de base de données", "Authentification utilisateur", "CRUD complet", "Interface responsive"],
      github: "https://github.com/triomphant75/Gestion_Club_Nautique",
      images: [
        "/images/projects/gestion_club-nautique1.jpeg",
        "/images/projects/gestion_club-nautique2.jpeg",
        "/images/projects/gestion_club-nautique3.jpg"
      ],
      video: "/videos/Gestion club nautique.mp4",
      image: "/images/projects/gestion_club-nautique1.jpeg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Visionneuse Web de données de santé",
      description: "Application Python sur système Ubuntu pour visualiser et analyser des données de santé avec interface web intuitive.",
      detailedDescription: "Application Python développée sur Ubuntu permettant la visualisation et l'analyse de données de santé. Interface web intuitive pour l'upload de fichiers, traitement des données médicales, génération de graphiques et rapports statistiques.",
      tech: ["Python", "Flask", "Ubuntu", "JavaScript", "Chart.js", "Bootstrap"],
      skills: ["Traitement de données", "Visualisation", "Threading", "Sécurité des données", "Interface utilisateur"],
      github: "https://github.com/triomphant75/visualisation_donnee_De_Sante-Ubuntu-",
      images: [
        "/images/projects/visionneuse-sante.jpeg",
      ],
      image: "/images/projects/visionneuse-sante.jpeg",

  
    },
    {
      title: "Système de gestion d'une Bibliothèque",
      description: "Solution complète en PHP pour la gestion des livres, emprunts et utilisateurs d'une bibliothèque municipale.",
      detailedDescription: "Système complet de gestion de bibliothèque développé en PHP. Permet la gestion du catalogue de livres, des emprunts, des retours, des réservations et des utilisateurs. Interface d'administration pour les bibliothécaires et espace personnel pour les usagers.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "HTML/CSS"],
      skills: ["Programmation orientée objet", "Base de données relationnelle", "Gestion des sessions", "Interface responsive", "Système de recherche"],
      github: "https://github.com/triomphant75/Gestion_festival_2024",
      images: [
        "/images/projects/festiLivre1.jpeg",
        "/images/projects/festiLivre2.jpeg",
        "/images/projects/festiLivre3.jpeg",
        "/images/projects/festiLivre4.jpeg",
        "/images/projects/festiLivre5.jpeg"

      ],
      video: "/videos/FestiLivre.mp4",
      image: "/images/projects/festiLivre1.jpeg",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tri-ACT - Application de gestion de tri d'actualité",
      description: "Application web en Flask pour la gestion et le tri d'actualités avec interface utilisateur intuitive.",
      detailedDescription: "Application web développée avec Flask pour la gestion et le tri d'actualités. Interface utilisateur intuitive permettant de filtrer et d'organiser les actualités par catégories, dates et mots-clés.",
      tech: ["Flask", "CSS", "JavaScript", "HTML", "Bootstrap", "MongoDB (NoSQL)"],
      skills: ["Développement web", "Gestion de contenu", "Interface utilisateur", "XML"],
      github: "https://github.com/triomphant75/TRI-ACT",
      images: [
        "/images/projects/Tri-Act1.png",
        "/images/projects/Tri-Act2.png"
      ],
      video: "/videos/Tric-Act.mp4",
      image: "/images/projects/Tri-Act1.png",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "GiveToGether - Application de dons",
      description: "Application desktop Java pour la gestion des dons avec interface JavaFX.",
      detailedDescription: "Application desktop Java avec interface JavaFX pour la gestion des dons. Fonctionnalités de gestion des dons, gestion des utilisateurs.",
      tech: ["Java", "JavaFX", "PostgreSQL", "JDBC"],
      skills: ["Programmation Java", "Interface graphique", "Base de données", "Architecture logicielle"],
      github: "#",
      images: [
        "/images/projects/GiveTogether1.png",
        "/images/projects/GiveTogether2.png"
      ],
      video: "/videos/GiveTogether.mp4",
      image: "/images/projects/GiveTogether1.png",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Pizz'App - Application de commande de pizzas",
      description: "Application Java de Simulation de commande de pizzas.",
      detailedDescription: "Application Java développée avec JavaFX pour la gestion des commandes de pizzas. Fonctionnalités de gestion des commandes.",
      tech: ["Java", "JavaFX", "Maven", "Mosquitto"],
      skills: ["Développement logiciel", "Gestion de contenu", "Interface utilisateur", "MQTT", "Mosquitto"],
      github: "https://github.com/triomphant75/Projet_Lets-make-pizza",
      images: [
        "/images/projects/pizzaApp1.png",
        "/images/projects/pizzaApp2.png",
        "/images/projects/pizzaApp3.png",
        "/images/projects/pizzaApp4.png"
      ],
      video: "/videos/PizzApp.mp4",
      image: "/images/projects/pizzaApp1.png",
      color: "from-teal-500 to-green-500"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projets & Réalisations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      <Eye size={16} />
                      Voir les détails
                    </motion.button>
                    
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bouton Voir plus/moins */}
          {projects.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-shadow"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={20} />
                    Voir moins
                  </>
                ) : (
                  <>
                    <Eye size={20} />
                    Voir tous les projets ({projects.length})
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

// Composant Skills
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      title: "Technologies Web",
      skills: ["HTML/CSS", "JavaScript", "PHP", "Symfony", "Bootstrap"],
      color: "from-blue-500 to-cyan-500",
      icon: "💻"
    },
    {
      title: "Bases de données",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "SQL Server", "Oracle"],
      color: "from-green-500 to-emerald-500",
      icon: "🗄️"
    },
    {
      title: "Langages",
      skills: ["Python", "Java", "PHP", "JavaScript"],
      color: "from-purple-500 to-pink-500",
      icon: "🔤"
    },
    {
      title: "Outils & Gestion",
      skills: ["Git", "JIRA", "Trello", "SharePoint", "WordPress"],
      color: "from-orange-500 to-red-500",
      icon: "🛠️"
    },
    {
      title: "Business Analysis",
      skills: ["UML", "Spécifications fonctionnelles", "Analyse métier", "Power BI"],
      color: "from-indigo-500 to-blue-500",
      icon: "📊"
    },
    {
      title: "Soft Skills",
      skills: ["Autonomie", "Communication", "Travail d'équipe", "Rigueur"],
      color: "from-teal-500 to-green-500",
      icon: "🤝"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Compétences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-xl mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center gap-2"
                    >
                      <Star size={12} className="text-yellow-500" />
                      <span className="text-gray-600">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Composant Contact
const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Contactez-moi
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Je recherche une alternance en tant que Business Analyst dès septembre 2025.
            <br />
            N'hésitez pas à me contacter pour discuter d'opportunités !
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="mailto:triomphantaldi@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all"
            >
              <Mail size={32} className="mx-auto mb-4 text-blue-300" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-blue-200">triomphantaldi@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+33745291838"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone size={32} className="mx-auto mb-4 text-green-300" />
              <h3 className="font-bold mb-2">Téléphone</h3>
              <p className="text-green-200">+33 7 45 29 18 38</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            >
              <MapPin size={32} className="mx-auto mb-4 text-purple-300" />
              <h3 className="font-bold mb-2">Localisation</h3>
              <p className="text-purple-200">Nancy, Grand Est</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/triomphant75"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/triomphant-aldi-nzikou-3307aa2b3/"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="bg-white/20 p-4 rounded-full hover:bg-white/30 transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Composant principal App
const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;