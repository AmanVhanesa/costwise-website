import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChartBarIcon, 
  LightBulbIcon, 
  WalletIcon, 
  ShieldCheckIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles

const features = [
  {
    icon: ChartBarIcon,
    title: 'Track Expenses',
    description: 'Easily log and categorize your daily expenses with our intuitive interface.'
  },
  {
    icon: LightBulbIcon,
    title: 'Smart Insights',
    description: 'Get AI-powered insights to understand your spending patterns and save more.'
  },
  {
    icon: WalletIcon,
    title: 'Set Budgets',
    description: 'Create and manage budgets for different categories to stay on track.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Fast',
    description: 'Your data is encrypted and synced securely across all your devices.'
  }
];

const benefits = [
  'Free to use with premium features',
  'No ads or hidden charges',
  'Regular updates and new features',
  '24/7 customer support',
  'Data backup and sync',
  'Offline mode available'
];

// App screenshot image sources (local paths - make sure these files exist in public/screenshots)
const appScreenshots = [
  './screenshots/screenshot1.png',
  './screenshots/screenshot2.png',
  './screenshots/screenshot3.png',
  './screenshots/screenshot4.png',
  './screenshots/screenshot5.png',
  './screenshots/screenshot6.png',
  './screenshots/screenshot7.png',
  './screenshots/screenshot8.png',
  './screenshots/screenshot9.png',
  './screenshots/screenshot10.png',
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.img
              src="./logo.png"
              alt="Costwise Logo"
              className="mx-auto mb-8 h-16 rounded-lg shadow-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-primary-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Costwise
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-primary-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Track. Save. Grow.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.evotechinnovations.costwise&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DevicePhoneMobileIcon className="w-5 h-5" />
                Download on Play Store
              </motion.a>
              <motion.div
                className="btn-primary inline-flex items-center gap-2 bg-primary-800 cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <DeviceTabletIcon className="w-5 h-5" />
                iOS Coming Soon
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powerful Features
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 text-primary-600 mb-4 transform group-hover:scale-110 transition-transform duration-300 hover:rotate-360"
                >
                  <feature.icon className="w-full h-full" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{feature.title}</h3>
                <p className="text-primary-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="section-padding bg-primary-100 overflow-hidden">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            App Preview
          </motion.h2>
          <div className="max-w-xs mx-auto">
            <Carousel 
              showArrows={true} 
              showThumbs={false} 
              infiniteLoop={true} 
              autoPlay={true} 
              interval={3000} 
              showStatus={false}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              {appScreenshots.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`App Screenshot ${index + 1}`} className="w-full h-auto object-contain" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why Costwise Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Costwise?
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm group"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-6 h-6 text-primary-600 flex-shrink-0 hover:rotate-360"
                  >
                    <CheckCircleIcon className="w-full h-full" />
                  </motion.div>
                  <span className="text-lg text-primary-900">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <motion.img
                src="./logo.png"
                alt="Costwise Logo"
                className="h-12 mb-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-primary-200">© 2025 All rights reserved</p>
            </div>
            <motion.a
              href="mailto:evotechnologiesinnovation@gmail.com"
              className="text-primary-200 hover:text-white transition-colors inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <EnvelopeIcon className="w-5 h-5" />
              evotechnologiesinnovation@gmail.com
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
