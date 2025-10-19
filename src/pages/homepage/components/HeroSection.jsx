import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const codeSnippets = [
    {
      language: 'Laravel',
      code: `// Laravel Eloquent with Spatie
use Spatie\\Permission\\Models\\Role;
use App\\Repositories\\UserRepository;

class UserController extends Controller
{
    public function __construct(
        private UserRepository $userRepo
    ) {}
    
    public function store(Request $request)
    {
        $user = $this->userRepo->create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        
        $user->assignRole('developer');
        return response()->json($user);
    }
}`,
      color: 'text-red-400'
    },
    {
      language: 'Vue 3',
      code: `// Vue 3 Composition API
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
const users = ref([])
const searchQuery = ref('')

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.name.toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  )
})

onMounted(async () => {
  users.value = await userStore.fetchUsers()
})
</script>`,
      color: 'text-green-400'
    },
    {
      language: 'React',
      code: `// React Hooks & Context
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserDashboard = () => {
  const { user, updateUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  
  const handleUpdate = async (data) => {
    setLoading(true);
    try {
      await updateUser(data);
      toast.success('Profile updated!');
    } catch (error) {
      toast.error('Update failed');
    } finally {
      setLoading(false);
    }
  };
  
  return <ProfileForm onSubmit={handleUpdate} />;
};`,
      color: 'text-blue-400'
    }
  ];

  const techStack = [
    { name: 'Laravel', icon: 'Code2', level: 95, color: 'bg-red-500' },
    { name: 'Vue.js', icon: 'Layers', level: 90, color: 'bg-green-500' },
    { name: 'React', icon: 'Atom', level: 50, color: 'bg-blue-500' },
    { name: 'PHP', icon: 'FileCode', level: 95, color: 'bg-purple-500' },
    { name: 'JavaScript', icon: 'Zap', level: 90, color: 'bg-yellow-500' },
    { name: 'Database', icon: 'Database', level: 88, color: 'bg-orange-500' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-accent/5"></div>

      {/* Floating Code Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [-20, -100, -20],
              x: [0, 50, 0]
            }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          >
            <Icon name="Code" size={24 + i * 4} className="text-brand-primary" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 px-4 sm:px-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-trust-builder rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-hierarchy-secondary">
                Available for Full‑Stack Projects
              </span>
            </motion.div>

            {/* Heading & Subheading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-hierarchy-primary leading-tight"
              >
                Full‑Stack
                <span className="block text-brand-primary">Developer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-hierarchy-secondary leading-relaxed max-w-lg"
              >
                Architecting scalable web solutions with Laravel ecosystem and modern JavaScript frameworks.
                Transforming business requirements into technical excellence.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion-accent">3+</div>
                <div className="text-sm text-hierarchy-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust-builder">10+</div>
                <div className="text-sm text-hierarchy-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary">100%</div>
                <div className="text-sm text-hierarchy-secondary">Support Client</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-conversion-accent text-conversion-accent hover:bg-conversion-accent hover:text-white conversion-glow"
                >
                  Start Project
                </Button>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-6 text-sm text-hierarchy-secondary"
            >
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>GMT+7 Timezone</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content — Code Display & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-4 sm:px-0"
          >
            {/* Code Editor Window */}
            <div className="glass-card rounded-xl overflow-hidden shadow-glassmorphic w-full">
              <div className="flex items-center justify-between px-4 py-3 border-b border-glass">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-jetbrains-mono text-hierarchy-secondary ml-4">
                    {codeSnippets[currentCodeIndex].language}.
                    {codeSnippets[currentCodeIndex].language === 'Laravel' ? 'php'
                      : codeSnippets[currentCodeIndex].language === 'Vue 3' ? 'vue'
                      : 'jsx'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Code2" size={16} className="text-hierarchy-secondary" />
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm min-h-[300px] sm:min-h-[400px]">
                <motion.pre
                  key={currentCodeIndex}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className={`font-jetbrains-mono text-sm leading-relaxed ${codeSnippets[currentCodeIndex].color} overflow-hidden`}
                >
                  {codeSnippets[currentCodeIndex].code}
                </motion.pre>
              </div>
            </div>

            {/* Tech Stack Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass-card p-3 rounded-lg hover:shadow-glassmorphic transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name={tech.icon} size={16} className="text-hierarchy-primary group-hover:text-brand-primary transition-colors" />
                    <span className="text-sm font-medium text-hierarchy-primary">{tech.name}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                      className={`h-1.5 rounded-full ${tech.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-hierarchy-secondary"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;