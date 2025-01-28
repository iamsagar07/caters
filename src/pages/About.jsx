import { motion } from 'framer-motion';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Crafting Culinary Excellence Since 1995</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Our Kitchen"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-600">
            Founded in 1995, Gourmet Catering has been delivering exceptional culinary experiences
            to our clients for over 25 years. What started as a small family business has grown
            into one of the most trusted catering services in the region.
          </p>
          <p className="text-gray-600">
            Our commitment to quality, attention to detail, and passion for food has earned us
            a reputation for excellence in the catering industry.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gray-50 rounded-lg"
          >
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '10,000+', label: 'Events Catered' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default About;