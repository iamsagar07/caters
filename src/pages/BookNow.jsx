import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { submitBooking } from '../store/reducers/bookingReducer';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  date: z.string().refine((date) => new Date(date) > new Date(), {
    message: 'Date must be in the future',
  }),
  guests: z.number().min(10, 'Minimum 10 guests required').max(500, 'Maximum 500 guests allowed'),
  eventType: z.string().min(1, 'Please select an event type'),
  message: z.string().optional(),
});

function BookNow() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.booking);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data) => {
    dispatch(submitBooking(data));
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Book Your Event</h1>
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary focus:ring-primary"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 ">{errors.name.message}</p>
              )}
            </div>
 <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
              <input
                type="tel"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event Date</label>
              <input
                type="date"
                {...register('date')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
              )}
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Number of Guests</label>
              <input
                type="number"
                {...register('guests', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {errors.guests && (
                <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>
              )}
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event Type</label>
              <select
                {...register('eventType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && (
                <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
              )}
            </div>
             </div>
             <div>
            <label className="block text-sm font-medium text-gray-700">Additional Message</label>
            <textarea
              {...register('message')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
            {/* Add similar dark mode classes to other form elements */}
            
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default BookNow;