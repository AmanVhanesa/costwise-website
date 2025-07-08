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
import { useEffect } from 'react';
import './fonts.css'; // Import custom fonts

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

// App screenshot image sources (using new names)
const appScreenshots = [
  '/screenshots/img1.png',
  '/screenshots/img2.png',
  '/screenshots/img3.png',
  '/screenshots/img4.png',
  '/screenshots/img5.png',
  '/screenshots/img6.png',
  '/screenshots/img7.png',
  '/screenshots/img8.png',
  '/screenshots/img9.png',
  '/screenshots/img10.png',
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
  useEffect(() => {
    // Check if fonts are loaded
    document.fonts.ready.then(() => {
      console.log('Fonts loaded:', document.fonts.check('12px MazzardSoftM'));
      console.log('Available fonts:', document.fonts);
    });
    
    // Check if images exist
    appScreenshots.forEach((src, index) => {
      console.log(`Testing image ${index + 1}:`, src);
      const img = new Image();
      img.onload = () => console.log(`✅ Image ${index + 1} loaded successfully:`, src);
      img.onerror = () => console.error(`❌ Image ${index + 1} failed to load:`, src);
      img.src = src;
    });
    
    // Test logo
    console.log('Testing logo:', '/logo.png');
    const logoImg = new Image();
    logoImg.onload = () => console.log('✅ Logo loaded successfully:', '/logo.png');
    logoImg.onerror = () => console.error('❌ Logo failed to load:', '/logo.png');
    logoImg.src = '/logo.png';
    
    // Test if we can fetch the assets
    fetch('/screenshots/screenshot1.png')
      .then(response => {
        if (response.ok) {
          console.log('✅ Screenshot 1 is accessible via fetch');
        } else {
          console.error('❌ Screenshot 1 is not accessible via fetch:', response.status);
        }
      })
      .catch(error => {
        console.error('❌ Error fetching screenshot 1:', error);
      });
      
    fetch('/fonts/MazzardSoftM-Regular.otf')
      .then(response => {
        if (response.ok) {
          console.log('✅ Font is accessible via fetch');
        } else {
          console.error('❌ Font is not accessible via fetch:', response.status);
        }
      })
      .catch(error => {
        console.error('❌ Error fetching font:', error);
      });
  }, []);

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
              src="/logo.png"
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
              style={{ fontFamily: 'MazzardSoftM, sans-serif' }}
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
            Control Your Money Like Never Before
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
                <div key={index} className="relative">
                  <img 
                    src={src} 
                    alt={`App Screenshot ${index + 1}`} 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${src}`);
                      e.currentTarget.style.display = 'none';
                      // Show a fallback message
                      const fallback = document.createElement('div');
                      fallback.className = 'flex items-center justify-center h-64 bg-gray-100 text-gray-500';
                      fallback.textContent = `Screenshot ${index + 1} - Image not found`;
                      e.currentTarget.parentNode?.appendChild(fallback);
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image: ${src}`);
                    }}
                  />
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
                src="/logo.png"
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
