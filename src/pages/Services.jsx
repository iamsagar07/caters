import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">Comprehensive Catering Solutions for Every Occasion</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our premium wedding catering services.',
    image: 'https://images.unsplash.com/photo-1464366400722-e91a4a89384b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Customized menu planning',
      'Professional service staff',
      'Complete setup and cleanup',
      'Wedding cake service'
    ]
  },
  {
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with our professional corporate catering.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Breakfast and lunch options',
      'Meeting and conference packages',
      'Corporate party catering',
      'Dietary accommodations'
    ]
  },
  {
    title: 'Private Parties',
    description: 'Create memorable celebrations with our private party catering services.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    features: [
      'Birthday parties',
      'Anniversary celebrations',
      'Holiday gatherings',
      'Custom theme menus'
    ]
  }
];

export default Services;