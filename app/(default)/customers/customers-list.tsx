'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomerImg01 from '@/public/images/new-04.svg'
import CustomerBg01 from '@/public/images/customer-bg-01.png'
import CustomerImg02 from '@/public/images/new-01.svg'
import CustomerBg02 from '@/public/images/customer-bg-02.png'
import CustomerImg03 from '@/public/images/new-07.svg'
import CustomerBg03 from '@/public/images/customer-bg-03.png'
import CustomerImg04 from '@/public/images/customer-bg-01.png'
import CustomerBg04 from '@/public/images/customer-bg-04.png'
import CustomerImg05 from '@/public/images/customer-bg-01.png'
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
      testimonial: 'We took our business to the next level with Rose Development. Building better technology for tomorrow.',
      person: 'Tim',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 1,
      name: 'Eco Shield',
      position: { x: 25, y: -15, z: 5 },
      img: CustomerImg02,
      bg: CustomerBg02,
      link: '/customers/single-post',
      testimonial: 'We turned our recruitment process into a competitive advantage with Rose Development. We are now able to attract the best talent.',
      person: 'Zach',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 2,
      name: 'Global Tech',
      position: { x: 5, y: 30, z: -10 },
      img: CustomerImg03,
      bg: CustomerBg03,
      link: '/customers/single-post',
      testimonial: 'Rose Development transformed how we analyze our supply chain data. The insights have been incredible.',
      person: 'Sarah',
      color: 'from-purple-600 to-purple-400'
    }
  ];

  // Define the placeholder future customers
  const futureCustomers = [
    { id: 3, img: CustomerImg04, bg: CustomerBg04, position: { x: -30, y: -20, z: -15 } },
    { id: 4, img: CustomerImg05, bg: CustomerBg05, position: { x: 35, y: 5, z: -20 } },
    { id: 5, img: CustomerImg06, bg: CustomerBg06, position: { x: -15, y: -35, z: 10 } },
    { id: 6, img: CustomerImg07, bg: CustomerBg07, position: { x: 40, y: 25, z: 5 } },
    { id: 7, img: CustomerImg08, bg: CustomerBg08, position: { x: -40, y: 15, z: -5 } },
    { id: 8, img: CustomerImg09, bg: CustomerBg09, position: { x: 10, y: -25, z: -30 } },
    { id: 9, img: CustomerImg10, bg: CustomerBg10, position: { x: -5, y: 40, z: 20 } }
  ];

  // Auto-rotation effect - FIXED THE TYPE ERROR HERE
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

  // Handle auto-rotation and customer cycling - FIXED TYPE ERROR HERE TOO
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
  
  // Handle touch movement for mobile
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!interacting || !globeRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const { clientX, clientY } = touch;
    
    // Calculate delta from last position
    const deltaX = clientX - lastTouch.x;
    const deltaY = clientY - lastTouch.y;
    
    // Update last touch position
    setLastTouch({ x: clientX, y: clientY });
    
    // Apply rotation with damping factor
    setRotation(prev => ({
      x: prev.x + deltaY * 0.2,
      y: prev.y - deltaX * 0.2
    }));
  };
  
  // Set initial touch position
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setLastTouch({ x: touch.clientX, y: touch.clientY });
    setInteracting(true);
    setAutoRotate(false);
  };

  // Calculate 3D position with rotation for each customer point
  const calculate3DPosition = (position: { x: number; y: number; z: number }, size = 1): Position3D => {
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
    
    // Adjust scale for mobile
    const mobileScaleFactor = isMobile ? 0.7 : 1;
    
    // Calculate scale based on z-position (depth)
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
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-30">
        <div className={`bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-slate-700/50 transform transition-all duration-500 ${showingTestimonial ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-gradient-to-br rounded-xl p-px overflow-hidden flex-shrink-0 shadow-lg mx-auto md:mx-0">
              <div className="bg-slate-900 p-3 rounded-xl">
                <Image 
                  src={customer.img} 
                  alt={customer.name} 
                  width={isMobile ? 60 : 80} 
                  height={isMobile ? 60 : 80} 
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
        onTouchEnd={() => {
          setInteracting(false);
          setTimeout(() => setAutoRotate(true), 2000);
        }}
      >
        {/* Particles for cosmic effect - reduced quantity on mobile */}
        <Particles className="absolute inset-0" quantity={isMobile ? 25 : 50} />
        
        {/* Central glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 md:w-40 h-28 md:h-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        
        {/* Future customer points - reduced on mobile */}
        {(!isMobile || futureCustomers.length < 4) && futureCustomers.map((customer) => {
          const pos = calculate3DPosition(customer.position, 0.7);
          
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
                opacity: pos.opacity * 0.5,
                filter: `brightness(${pos.brightness}%)`,
              }}
            >
              <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-500/30 rounded-full backdrop-blur-sm border border-slate-400/20 animate-pulse"></div>
            </div>
          );
        })}
        
        {/* Featured customer points */}
        {featuredCustomers.map((customer) => {
          const pos = calculate3DPosition(customer.position);
          const isActive = activeCustomer === customer.id;
          
          // Skip rendering if behind the camera for performance
          if (pos.z < -15) return null;
          
          // Scale node size based on device
          const nodeSize = isMobile ? 12 : 16;
          
          return (
            <button
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
              onClick={() => {
                setActiveCustomer(customer.id);
                setShowingTestimonial(true);
                setTimeout(() => setShowingTestimonial(false), 7000);
              }}
            >
              <div className={`relative group ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40 blur-lg rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div 
                  className={`p-1 rounded-full backdrop-blur bg-gradient-to-r ${customer.color} shadow-lg overflow-hidden transition-all duration-500 ${isActive ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                  style={{width: `${nodeSize}px`, height: `${nodeSize}px`}}
                >
                  <div className="w-full h-full rounded-full bg-slate-900/80 flex items-center justify-center p-2">
                    <Image 
                      src={customer.img} 
                      alt={customer.name} 
                      width={isMobile ? 30 : 50} 
                      height={isMobile ? 30 : 50} 
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Customer name tooltip */}
                <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap text-xs text-white bg-slate-900/90 px-2 py-1 rounded backdrop-blur-sm border border-slate-700/50 transition-all duration-300 ${isActive || interacting ? 'opacity-100' : 'opacity-0'}`}>
                  {customer.name}
                </div>
              </div>
            </button>
          );
        })}
        
        {/* Connection lines - conditional based on performance */}
        {!isMobile && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.15)" />
              </linearGradient>
            </defs>
            
            {featuredCustomers.map((customer, index) => {
              const pos1 = calculate3DPosition(customer.position);
              const nextIndex = (index + 1) % featuredCustomers.length;
              const pos2 = calculate3DPosition(featuredCustomers[nextIndex].position);
              
              // Only render if both points are in front
              if (pos1.z > -10 && pos2.z > -10) {
                const opacity = Math.min(pos1.opacity, pos2.opacity) * 0.7;
                
                return (
                  <line
                    key={`line-${index}`}
                    x1={`calc(50% + ${pos1.x * 5}px)`}
                    y1={`calc(50% + ${pos1.y * 4}px)`}
                    x2={`calc(50% + ${pos2.x * 5}px)`}
                    y2={`calc(50% + ${pos2.y * 4}px)`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity={opacity}
                    className="animate-pulse"
                  />
                );
              }
              return null;
            })}
          </svg>
        )}
        
        {/* Instructions overlay - mobile optimized */}
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm text-slate-300 pointer-events-none transition-opacity duration-500 opacity-70 border border-slate-700/30 ${isMobile ? 'w-64 text-center' : ''}`}>
          {isMobile
            ? (interacting ? 'Drag to explore' : 'Tap a customer to view their story')
            : (interacting ? 'Drag to explore our customers' : 'Click on a customer to see their story')}
        </div>
      </div>
      
      {/* Active customer detail */}
      {showCustomerDetail(featuredCustomers[activeCustomer])}
      
      {/* Control panel - responsive */}
      <div className="absolute bottom-4 right-4 z-30">
        <div className="bg-slate-900/70 backdrop-blur-md rounded-full p-1 shadow-lg border border-slate-700/30 flex space-x-1">
          <button 
            className={`p-2 rounded-full ${autoRotate ? 'text-purple-400' : 'text-slate-400'} hover:text-white transition-colors`}
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
