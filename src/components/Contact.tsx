'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSection } from '@/context/active-section-context'
import { Loader2 } from 'lucide-react'

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  // React Hook Form setup
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.75 });

  useEffect(() => {
    if (inView) {
      setActiveSection('Contact');
    }
  }, [inView, setActiveSection]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    setMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${data.name} on your portfolio`,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setMessage('Thank you for your message! I will get back to you soon.');
        reset(); // Clear form fields on success
      } else {
        setIsSuccess(false);
        setMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setIsSuccess(false);
      console.log("err",error)
      setMessage('An error occurred while sending the message. Please try again.');
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24">
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Name"
              className="form-input"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
              placeholder="Your Email"
              className="form-input"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Your Message"
              rows={5}
              className="form-input"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center p-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Animated Success/Error Message Feedback */}
        <AnimatePresence>
          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-4 text-center font-medium ${
                isSuccess ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}