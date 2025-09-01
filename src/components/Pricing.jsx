import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: 'Starter',
      price: '$299',
      features: [
        'Responsive Design',
        'Up to 3 Pages',
        'Basic Contact Form',
        'SEO Optimization',
        '1 Revision',
      ],
    },
    {
      name: 'Professional',
      price: '$599',
      features: [
        'Everything in Starter',
        'Up to 7 Pages',
        'Dynamic Components',
        'API Integration',
        '3 Revisions',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      price: '$999',
      features: [
        'Everything in Professional',
        'Admin Dashboard',
        'User Authentication',
        'Database (MongoDB)',
        'Unlimited Revisions',
      ],
    },
  ];

  
  const handleChoosePlan = (pkgName) => {
    
    navigate('/contact', { state: { selectedPlan: pkgName } });
  };

  return (
    <section className="bg-black text-white py-20 px-6" id="pricing">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Choose a package that suits your project best
        </motion.p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-orange-500/20 hover:scale-[1.02] transition duration-300"
            >
              {pkg.mostPopular && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm select-none">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-orange-500 mb-2">{pkg.name}</h3>
              <p className="text-3xl text-white font-semibold mb-6">{pkg.price}</p>
              <ul className="text-gray-400 text-sm space-y-3 text-left mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleChoosePlan(pkg.name)}
                className="w-full mt-auto py-2 px-4 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white font-medium"
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
