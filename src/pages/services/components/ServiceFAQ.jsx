import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: `Project timelines vary based on complexity and scope:\n\n• Simple websites: 2-4 weeks\n• Custom web applications: 6-12 weeks\n• Complex enterprise systems: 3-6 months\n• API integrations: 1-3 weeks\n\nI provide detailed timeline estimates after reviewing your specific requirements during the consultation phase.`
    },
    {
      question: "Do you work with existing development teams?",
      answer: `Yes, I frequently collaborate with existing teams in various capacities:\n\n• Technical consultation and code reviews\n• Temporary team augmentation for specific projects\n• Architecture planning and system design\n• Knowledge transfer and team training\n• Legacy system modernization guidance\n\nI adapt to your team's workflow and communication preferences.`
    },
    {
      question: "What technologies do you specialize in?",
      answer: `My core expertise includes:\n\n**Backend:** Laravel 10+, PHP 8.2+, MySQL, PostgreSQL, Redis\n**Frontend:** Vue.js 3, JavaScript ES6+, Tailwind CSS, Inertia.js\n**DevOps:** Docker, AWS, DigitalOcean, CI/CD pipelines\n**Integrations:** Payment gateways, third-party APIs, webhooks\n\nI stay current with the latest versions and best practices in these technologies.`
    },
    {
      question: "How do you handle project communication and updates?",
      answer: `I maintain transparent communication throughout the project:\n\n• Weekly progress reports with screenshots/demos\n• Slack/Discord integration for real-time updates\n• Shared project dashboard with milestone tracking\n• Regular video calls for complex discussions\n• Detailed documentation of all decisions and changes\n\nYou'll always know the current status and next steps.`
    },
    {
      question: "What is included in post-launch support?",
      answer: `Post-launch support varies by package but typically includes:\n\n• Bug fixes and minor adjustments (30-90 days)\n• Performance monitoring and optimization\n• Security updates and patches\n• Documentation and training materials\n• Deployment assistance and server setup\n• Priority support for urgent issues\n\nExtended support packages are available for ongoing maintenance.`
    },
    {
      question: "Can you work with my existing hosting and infrastructure?",
      answer: `Absolutely! I work with various hosting environments:\n\n• Shared hosting (cPanel, Plesk)\n• VPS and dedicated servers\n• Cloud platforms (AWS, DigitalOcean, Linode)\n• Managed hosting (Laravel Forge, Cloudways)\n• Docker containers and Kubernetes\n\nI can also recommend optimal hosting solutions based on your project requirements and budget.`
    },
    {
      question: "How do you ensure code quality and security?",
      answer: `I follow industry best practices for quality and security:\n\n• Code reviews and automated testing\n• OWASP security guidelines implementation\n• Regular dependency updates and vulnerability scans\n• Proper input validation and sanitization\n• Secure authentication and authorization\n• Database security and query optimization\n• Git version control with detailed commit history\n\nAll code comes with comprehensive documentation and follows PSR standards.`
    },
    {
      question: "What are your payment terms and methods?",
      answer: `Payment terms are flexible based on project size:\n\n• Small projects: 50% upfront, 50% on completion\n• Large projects: 30% upfront, 40% at milestone, 30% completion\n• Hourly consultation: Weekly or bi-weekly invoicing\n• Enterprise projects: Custom payment schedule\n\n**Accepted methods:** Bank transfer, PayPal, Stripe, cryptocurrency\n**Currency:** USD (primary), EUR, or local currency as needed`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about my development services and process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-surface/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq?.question}
                </h3>
                <Icon 
                  name={openFAQ === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-muted-foreground flex-shrink-0 transition-transform duration-200"
                />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm happy to discuss your specific project requirements and answer any technical questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:visalnann@email.com"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={16} />
              <span>Email Me</span>
            </a>
            <a 
              href="https://t.me/visalnann"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;