import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Catering Plans</h1>
        <p className="text-xl text-gray-600">Choose the Perfect Package for Your Event</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-center mb-4">{plan.name}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/person</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/book-now"
                className="block text-center bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600">
          All plans include professional staff, setup, and cleanup.
          <br />
          Custom packages available upon request.
        </p>
      </motion.div>
    </div>
  );
}

const plans = [
  {
    name: 'Essential',
    price: 45,
    features: [
      '3-course meal',
      'Basic table settings',
      'Service staff',
      'Setup and cleanup',
      'Standard beverages' ]
  },
  {
    name: 'Premium',
    price: 75,
    features: [
      '4-course meal',
      'Premium table settings',
      'Professional service staff',
      'Setup and cleanup',
      'Premium beverages',
      'Appetizer station',
      'Dessert station'
    ]
  },
  {
    name: 'Luxury',
    price: 95,
    features: [
      '5-course meal',
      'Luxury table settings',
      'Elite service staff',
      'Setup and cleanup',
      'Premium bar service',
      'Multiple food stations',
      'Custom menu planning',
      'Event coordination'
    ]
  }
];

export default Plans;