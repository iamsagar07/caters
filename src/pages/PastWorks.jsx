import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

function PastWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Past Works</h1>
        <p className="text-xl text-gray-600">Showcasing Our Finest Catering Moments</p>
      </motion.div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {pastWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-gray-600 mb-4">{work.description}</p>
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < work.rating ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
                <span className="ml-2 text-gray-600">({work.reviewCount} reviews)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const pastWorks = [
  {
    id: 1,
    title: "Elegant Wedding Reception",
    description: "A luxurious wedding celebration for 300 guests",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    rating: 5,
    reviewCount: 48
  },
  {
    id: 2,
    title: "Corporate Gala Dinner",
    description: "Annual corporate event with fine dining experience",
    image: "https://images.unsplash.com/photo-1515735543535-12664d2453f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    rating: 5,
    reviewCount: 36
  },
  {
    id: 3,
    title: "Garden Party",
    description: "Outdoor summer celebration with fresh cuisine",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    rating: 4,
    reviewCount: 29
  }
];

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    comment: "The food was absolutely amazing! Every guest at our wedding was impressed with the quality and presentation. The service was impeccable."
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    comment: "Professional team, exceptional food, and great attention to detail. They made our corporate event a huge success."
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    comment: "Beautiful presentation and delicious food. The staff was very accommodating with our dietary requirements."
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    comment: "Outstanding service from start to finish. The menu planning process was smooth, and the execution was flawless."
  }
];

export default PastWorks;