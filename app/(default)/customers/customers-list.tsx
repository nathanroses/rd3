'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomerImg01 from '@/public/images/new-06.svg'
import CustomerBg01 from '@/public/images/customer-bg-01.png'
import CustomerImg02 from '@/public/images/new-01.svg'
import CustomerBg02 from '@/public/images/customer-bg-02.png'
import CustomerImg03 from '@/public/images/new-05.svg'
import CustomerBg03 from '@/public/images/customer-bg-03.png'
import CustomerImg04 from '@/public/images/new-04.svg'
import CustomerBg04 from '@/public/images/customer-bg-04.png'
import CustomerImg05 from '@/public/images/new-07.svg'
import CustomerBg05 from '@/public/images/customer-bg-05.png'
import CustomerImg06 from '@/public/images/customer-bg-01.png'
import CustomerBg06 from '@/public/images/customer-bg-06.png'
import CustomerImg07 from '@/public/images/customer-bg-01.png'
import CustomerBg07 from '@/public/images/customer-bg-07.png'
import CustomerImg08 from '@/public/images/customer-bg-01.png'
import CustomerBg08 from '@/public/images/customer-bg-08.png'
import CustomerImg09 from '@/public/images/customer-bg-01.png'
import CustomerBg09 from '@/public/images/customer-bg-09.png'
import CustomerImg10 from '@/public/images/customer-bg-01.png'
import CustomerBg10 from '@/public/images/customer-bg-10.png'
import CustomerAvatar01 from '@/public/images/new-05.svg'
import CustomerAvatar02 from '@/public/images/new-08.svg'
import Particles from '@/components/particles'

interface Customer {
  id: number;
  name: string;
  position: { x: number; y: number; z: number };
  img: any;
  bg: any;
  link: string;
  testimonial: string;
  person: string;
  color: string;
}

interface Position3D {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  brightness: number;
}

export default function CustomersShowcase() {
  // State for the interactive globe experience
  const [activeCustomer, setActiveCustomer] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 });
  const [showingTestimonial, setShowingTestimonial] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 });
  const [touchMoved, setTouchMoved] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define array of actual customers we have
 const featuredCustomers: Customer[] = [
    {
      id: 0,
      name: 'Carolina Boat Company',
      position: { x: -20, y: 10, z: 15 },
      img: CustomerImg01,
      bg: CustomerBg01,
      link: '/customers/single-post',
      testimonial: 'We took our business to the next level by implementing cutting-edge technology. Building better solutions for tomorrow.',
      person: 'Mike',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 1,
      name: 'Eco Shield',
      position: { x: 25, y: -15, z: 5 },
      img: CustomerImg02,
      bg: CustomerBg02,
      link: '/customers/single-post',
      testimonial: 'We transformed our recruitment process into a competitive advantage. We now attract the best talent in the industry.',
      person: 'Zach',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 2,
      name: 'Palm Berries',
      position: { x: 5, y: 30, z: -10 },
      img: CustomerImg03,
      bg: CustomerBg03,
      link: '/customers/single-post',
      testimonial: 'We gained incredible insights into our supply chain data, enabling smarter decision-making.',
      person: 'Noor',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 3,
      name: 'Tice Services',
      position: { x: -30, y: -10, z: 20 },
      img: CustomerImg04,
      bg: CustomerBg04,
      link: '/customers/single-post',
      testimonial: 'Integrating AI analytics into our operations was a game-changer. We can now predict, adapt, and optimize like never before.',
      person: 'Tice',
      color: 'from-orange-500 to-amber-400'
    },
    {
      id: 4,
      name: 'Tools United',
      position: { x: 15, y: -20, z: 10 },
      img: CustomerImg05,
      bg: CustomerBg05,
      link: '/customers/single-post',
      testimonial: 'We revolutionized our tool management system, bringing unprecedented efficiency to our daily operations.',
      person: 'Ghetz',
      color: 'from-indigo-600 to-indigo-400'
    }
  ];
  // Define the placeholder future customers
  const futureCustomers = [
    { id: 4, img: CustomerImg05, bg: CustomerBg05, position: { x: 35, y: 5, z: -20 } },
    { id: 5, img: CustomerImg06, bg: CustomerBg06, position: { x: -15, y: -35, z: 10 } },
    { id: 6, img: CustomerImg07, bg: CustomerBg07, position: { x: 40, y: 25, z: 5 } },
    { id: 7, img: CustomerImg08, bg: CustomerBg08, position: { x: -40, y: 15, z: -5 } },
    { id: 8, img: CustomerImg09, bg: CustomerBg09, position: { x: 10, y: -25, z: -30 } },
    { id: 9, img: CustomerImg10, bg: CustomerBg10, position: { x: -5, y: 40, z: 20 } }
  ];

  // Auto-rotation effect
  useEffect(() => {
    let rotationInterval: NodeJS.Timeout | null = null;
    
    if (autoRotate && !interacting) {
      rotationInterval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x + 0.2,
          y: prev.y + 0.1
        }));
      }, 50);
    }
    
    return () => {
      if (rotationInterval) clearInterval(rotationInterval);
    };
  }, [autoRotate, interacting]);

  // Handle auto-rotation and customer cycling
  useEffect(() => {
    let customerInterval: NodeJS.Timeout | null = null;
    let testimonialTimeout: NodeJS.Timeout | null = null;
    
    if (!interacting && autoRotate) {
      customerInterval = setInterval(() => {
        setActiveCustomer(prev => (prev + 1) % featuredCustomers.length);
        setShowingTestimonial(true);
        
        // Hide testimonial after a delay
        testimonialTimeout = setTimeout(() => {
          setShowingTestimonial(false);
        }, 7000);
      }, 10000);
    }
    
    return () => {
      if (customerInterval) clearInterval(customerInterval);
      if (testimonialTimeout) clearTimeout(testimonialTimeout);
    };
  }, [interacting, autoRotate, featuredCustomers.length]);

  // Handle mouse movement for interactive rotation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interacting || !globeRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height } = globeRef.current.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;
    
    setRotation({
      x: deltaY * 30,
      y: -deltaX * 30
    });
  };
  
  // Handle touch start for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!globeRef.current) return;
    
    const touch = e.touches[0];
    setLastTouch({ x: touch.clientX, y: touch.clientY });
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setTouchMoved(false);
    setInteracting(true);
    setAutoRotate(false);
  };
  
  // Handle touch movement for mobile - improved for better sensitivity
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!interacting || !globeRef.current) return;
    
    const touch = e.touches[0];
    const { clientX, clientY } = touch;
    
    // Calculate delta from last position
    const deltaX = clientX - lastTouch.x;
    const deltaY = clientY - lastTouch.y;
    
    // Detect if touch has moved significantly
    const distanceMoved = Math.sqrt(
      Math.pow(clientX - touchStartPos.x, 2) + 
      Math.pow(clientY - touchStartPos.y, 2)
    );
    
    if (distanceMoved > 10) {
      setTouchMoved(true);
    }
    
    // Update last touch position
    setLastTouch({ x: clientX, y: clientY });
    
    // Apply rotation with improved sensitivity for mobile
    setRotation(prev => ({
      x: prev.x + deltaY * 0.3,
      y: prev.y - deltaX * 0.3
    }));
  };

  // Handle touch end with click detection
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setInteracting(false);
    setTimeout(() => setAutoRotate(true), 2000);
  };

  // Handle customer selection on touch
  const handleCustomerTouch = (customerId: number, e: React.MouseEvent | React.TouchEvent) => {
    // Prevent default behavior
    e.preventDefault();
    e.stopPropagation();
    
    // Only trigger if this wasn't a drag operation (for mobile)
    if (e.type === 'touchend' && touchMoved) {
      return;
    }
    
    setActiveCustomer(customerId);
    setShowingTestimonial(true);
    setTimeout(() => setShowingTestimonial(false), 7000);
  };

  // Calculate 3D position with rotation for each customer point
  const calculate3DPosition = (position: { x: number; y: number; z: number }, size = 1.2): Position3D => {
    // Convert to radians
    const radX = (rotation.x * Math.PI) / 180;
    const radY = (rotation.y * Math.PI) / 180;
    
    // 3D rotation matrix calculations (simplified)
    const cosX = Math.cos(radX);
    const sinX = Math.sin(radX);
    const cosY = Math.cos(radY);
    const sinY = Math.sin(radY);
    
    // Rotate position
    const rotatedX = position.x * cosY - position.z * sinY;
    const rotatedZ = position.z * cosY + position.x * sinY;
    const rotatedY = position.y * cosX + rotatedZ * sinX;
    const finalZ = rotatedZ * cosX - position.y * sinX;
    
    // Adjust scale for mobile - increased base size
    const mobileScaleFactor = isMobile ? 0.8 : 1;
    
    // Calculate scale based on z-position (depth) - increased size factor
    const scale = size * (1 + finalZ / 100) * mobileScaleFactor;
    
    // Calculate opacity based on z-position
    const opacity = Math.min(1, Math.max(0.2, (finalZ + 50) / 100));
    
    // Calculate brightness based on z-position
    const brightness = Math.min(100, Math.max(30, (finalZ + 50) / 100 * 100));
    
    return {
      x: rotatedX,
      y: rotatedY,
      z: finalZ,
      scale,
      opacity,
      brightness
    };
  };

  // Show active customer detail - optimized for mobile
const showCustomerDetail = (customer: Customer | undefined) => {
  if (!customer) return null;
  
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 z-50 pointer-events-none">
      <div className={`bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-slate-700/50 transform transition-all duration-500 max-w-xl mx-auto ${showingTestimonial ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className={`bg-gradient-to-br ${customer.color} rounded-xl p-px overflow-hidden flex-shrink-0 shadow-lg mx-auto md:mx-0`}>
            <div className="bg-slate-900 p-3 rounded-xl">
              <Image 
                src={customer.img} 
                alt={customer.name} 
                width={isMobile ? 70 : 90} 
                height={isMobile ? 70 : 90} 
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-2">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/90 via-slate-100 to-slate-200/90">
                {customer.name}
              </h3>
              <Link 
                href={customer.link}
                onClick={(e) => e.stopPropagation()}
                className="text-xs bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 mt-2 md:mt-0 rounded-full transition-colors duration-150"
              >
                View Case Study
              </Link>
            </div>
            
            <p className="text-slate-300 mb-3 text-sm md:text-base">{customer.testimonial}</p>
            
            <div className="text-sm text-slate-400">
              — {customer.person}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  return (
    <div className="relative w-full h-[400px] md:h-[600px] max-w-6xl mx-auto overflow-hidden mb-10 md:mb-20">
      {/* Interactive customer showcase */}
      <div 
        ref={globeRef}
        className="absolute inset-0 w-full h-full cursor-move"
        onMouseDown={() => {
          setInteracting(true);
          setAutoRotate(false);
        }}
        onMouseUp={() => {
          setInteracting(false);
          setTimeout(() => setAutoRotate(true), 2000);
        }}
        onMouseLeave={() => {
          if (interacting) {
            setInteracting(false);
            setTimeout(() => setAutoRotate(true), 2000);
          }
        }}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Enhanced background effects - larger blobs */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2 w-40 md:w-64 h-40 md:h-64 rounded-full bg-blue-500/15 blur-3xl animate-pulse duration-7000"></div>
        <div className="absolute left-2/3 top-2/3 -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 rounded-full bg-orange-500/10 blur-3xl animate-pulse duration-5000"></div>
        
        {/* Particles for cosmic effect - slightly increased quantity */}
        <Particles className="absolute inset-0" quantity={isMobile ? 30 : 60} />
        
        {/* Future customer points - reduced on mobile */}
        {(!isMobile || futureCustomers.length < 4) && futureCustomers.map((customer) => {
          const pos = calculate3DPosition(customer.position, 0.8);
          
          // Only render if in front of the "camera" for performance
          if (pos.z < -10) return null;
          
          return (
            <div
              key={customer.id}
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
              style={{
                left: `calc(50% + ${pos.x * (isMobile ? 2.5 : 4)}px)`,
                top: `calc(50% + ${pos.y * (isMobile ? 2 : 3)}px)`,
                zIndex: Math.round(pos.z),
                opacity: pos.opacity * 0.6, // Increased opacity
                filter: `brightness(${pos.brightness}%)`,
              }}
            >
              <div className="w-3 h-3 md:w-4 md:h-4 bg-slate-500/40 rounded-full backdrop-blur-sm border border-slate-400/30 animate-pulse"></div>
            </div>
          );
        })}
        
        {/* Featured customer points - Larger size and improved interaction */}
        {featuredCustomers.map((customer) => {
          const pos = calculate3DPosition(customer.position);
          const isActive = activeCustomer === customer.id;
          
          // Skip rendering if behind the camera for performance
          if (pos.z < -15) return null;
          
          // Increased node size
          const nodeSize = isMobile ? 20 : 28;
          const glowSize = isMobile ? 40 : 64;
          
          return (
            <div
              key={customer.id}
              className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isActive ? 'z-20' : ''}`}
              style={{
                left: `calc(50% + ${pos.x * (isMobile ? 3 : 5)}px)`,
                top: `calc(50% + ${pos.y * (isMobile ? 2.5 : 4)}px)`,
                zIndex: Math.round(pos.z) + (isActive ? 10 : 0),
                opacity: pos.opacity,
                filter: `brightness(${pos.brightness}%)`,
                transform: `translate(-50%, -50%) scale(${isActive ? pos.scale * 1.2 : pos.scale})`
              }}
            >
              {/* Enhanced glow effect for active node */}
              {isActive && (
                <div 
                  className="absolute rounded-full animate-pulse-slow"
                  style={{
                    width: `${glowSize}px`,
                    height: `${glowSize}px`,
                    background: `radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)`,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
              )}
              <div 
                className={`relative group ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                onClick={(e) => handleCustomerTouch(customer.id, e)}
                onTouchEnd={(e) => handleCustomerTouch(customer.id, e)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-lg rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Larger customer node with improved visual appearance */}
                <div 
                  className={`p-1 rounded-full backdrop-blur bg-gradient-to-r ${customer.color} shadow-lg overflow-hidden transition-all duration-500 ${isActive ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                  style={{width: `${nodeSize}px`, height: `${nodeSize}px`}}
                >
                  <div className="w-full h-full rounded-full bg-slate-900/80 flex items-center justify-center p-2">
                    <Image 
                      src={customer.img} 
                      alt={customer.name} 
                      width={nodeSize - 4} 
                      height={nodeSize - 4} 
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Customer name tooltip - improved visibility */}
                <div 
                  className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap text-xs font-medium text-white bg-slate-900/90 px-2 py-1 rounded backdrop-blur-sm border border-slate-700/50 transition-all duration-300 ${isActive || interacting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {customer.name}
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Connection lines - enhanced with color gradients */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.15)" />
            </linearGradient>
            <linearGradient id="ticeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249, 115, 22, 0.15)" />
              <stop offset="50%" stopColor="rgba(249, 115, 22, 0.3)" />
              <stop offset="100%" stopColor="rgba(249, 115, 22, 0.15)" />
            </linearGradient>
          </defs>
          
          {featuredCustomers.map((customer, index) => {
            const pos1 = calculate3DPosition(customer.position);
            const nextIndex = (index + 1) % featuredCustomers.length;
            const pos2 = calculate3DPosition(featuredCustomers[nextIndex].position);
            
            // Only render if both points are in front
            if (pos1.z > -10 && pos2.z > -10) {
              const opacity = Math.min(pos1.opacity, pos2.opacity) * 0.7;
              // Use Tice gradient for connections to/from Tice Services
              const useOrangeGradient = customer.name === 'Tice Services' || featuredCustomers[nextIndex].name === 'Tice Services';
              const gradientId = useOrangeGradient ? 'ticeGradient' : 'lineGradient';
              
              return (
                <line
                  key={`line-${index}`}
                  x1={`calc(50% + ${pos1.x * (isMobile ? 3 : 5)}px)`}
                  y1={`calc(50% + ${pos1.y * (isMobile ? 2.5 : 4)}px)`}
                  x2={`calc(50% + ${pos2.x * (isMobile ? 3 : 5)}px)`}
                  y2={`calc(50% + ${pos2.y * (isMobile ? 2.5 : 4)}px)`}
                  stroke={`url(#${gradientId})`}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity={opacity}
                  className="animate-pulse"
                />
              );
            }
            return null;
          })}
        </svg>
        
        {/* Instructions overlay - mobile optimized */}
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-900/70 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm text-slate-300 pointer-events-none transition-opacity duration-500 opacity-70 border border-slate-700/30 ${isMobile ? 'w-72 text-center' : ''}`}>
          {isMobile
            ? (interacting ? '↔️ Drag to explore our customer network' : '👆 Tap any customer to view their story')
            : (interacting ? '🔄 Drag to explore our customer universe' : '🖱️ Click on any customer to see their story')}
        </div>
      </div>
      {/* Active customer detail */}
      {showCustomerDetail(featuredCustomers[activeCustomer])}
      
      {/* Control panel - enhanced UI */}
      <div className="absolute bottom-4 right-4 z-30">
        <div className="bg-slate-900/80 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-slate-700/40 flex space-x-2">
          <button 
            className={`p-2 rounded-full ${autoRotate ? 'text-purple-400 bg-purple-900/20' : 'text-slate-400'} hover:text-white transition-colors`}
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Disable auto-rotation" : "Enable auto-rotation"}
            aria-label={autoRotate ? "Disable auto-rotation" : "Enable auto-rotation"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 16h5v5"></path>
            </svg>
          </button>
          
          <button 
            className="p-2 rounded-full text-slate-400 hover:text-white transition-colors"
            onClick={() => {
              const newIndex = (activeCustomer - 1 + featuredCustomers.length) % featuredCustomers.length;
              setActiveCustomer(newIndex);
              setShowingTestimonial(true);
              setTimeout(() => setShowingTestimonial(false), 7000);
            }}
            title="Previous customer"
            aria-label="Previous customer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          
          <button 
            className="p-2 rounded-full text-slate-400 hover:text-white transition-colors"
            onClick={() => {
              const newIndex = (activeCustomer + 1) % featuredCustomers.length;
              setActiveCustomer(newIndex);
              setShowingTestimonial(true);
              setTimeout(() => setShowingTestimonial(false), 7000);
            }}
            title="Next customer"
            aria-label="Next customer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
