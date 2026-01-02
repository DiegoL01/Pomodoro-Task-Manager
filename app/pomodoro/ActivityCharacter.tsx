import React from 'react';
import { motion } from 'framer-motion';

type ActivityType = 'studying' | 'gym' | 'reading' | 'resting';

interface CharacterProps {
  activity: ActivityType;
  className?: string;
}

export const ActivityCharacter: React.FC<CharacterProps> = ({ activity, className = "w-48 h-48" }) => {
  
  const colors = {
    studying: { body: "#4F46E5", accent: "#818CF8", light: "#C7D2FE" },
    gym: { body: "#10B981", accent: "#34D399", light: "#A7F3D0" },
    reading: { body: "#F59E0B", accent: "#FBBF24", light: "#FEF3C7" },
    resting: { body: "#8B5CF6", accent: "#A78BFA", light: "#DDD6FE" }
  };

  const theme = colors[activity];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
        style={{ overflow: 'visible' }} // Evita que se corte la animación
      >
        
        {/* SOMBRA: Corregido el error de 'undefined' usando valores numéricos directos */}
        <motion.ellipse 
          cx="100" 
          cy="180" 
          fill="rgba(0,0,0,0.1)"
          initial={{ rx: 35, ry: 8 }}
          animate={{ 
            rx: [35, 45, 35], 
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* CUERPO Y CABEZA (Todo unido en un grupo para que no se separen) */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: activity === 'resting' ? 4 : 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* El Cuerpo (Blob completo) */}
          <path 
            d="M100 40C70 40 50 65 50 105C50 145 70 165 100 165C130 165 150 145 150 105C150 65 130 40 100 40Z" 
            fill={theme.body} 
          />
          
          {/* Brillo elegante en el lateral */}
          <path 
            d="M75 70C75 70 82 55 100 55" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            opacity="0.2" 
          />

          {/* ROSTRO */}
          <g transform="translate(100, 100)">
            {activity === 'resting' ? (
              <g>
                <path d="M-15 -5Q-10 0 -5 -5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <path d="M5 -5Q10 0 15 -5" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : (
              <motion.g
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.92, 0.94, 1] }}
              >
                <circle cx="-15" cy="-5" r="4" fill="white" />
                <circle cx="15" cy="-5" r="4" fill="white" />
              </motion.g>
            )}
            {/* Boca */}
            <path d="M-5 15Q0 20 5 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* ELEMENTOS DE ACTIVIDAD (Renderizado condicional) */}
          {activity === 'resting' && (
            <ZzzAnimation />
          )}

          {activity === 'gym' && (
            <motion.g animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <rect x="30" y="120" width="140" height="4" rx="2" fill="#374151" />
              <rect x="20" y="105" width="10" height="34" rx="2" fill="white" />
              <rect x="170" y="105" width="10" height="34" rx="2" fill="white" />
            </motion.g>
          )}

          {activity === 'reading' && (
            <g transform="translate(75, 130)">
              <rect width="50" height="35" rx="4" fill="white" />
              <rect width="25" height="35" rx="2" fill="#F3F4F6" />
            </g>
          )}

          {activity === 'studying' && (
            <g transform="translate(60, 140)">
              <rect width="80" height="10" rx="2" fill="#374151" />
              <motion.rect 
                width="40" height="20" x="20" y="-20" rx="2" 
                fill={theme.light} opacity="0.5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </g>
          )}
        </motion.g>
      </svg>
    </div>
  );
};

// Sub-componente para las Zzz para mantener limpio el código
const ZzzAnimation = () => (
  <g transform="translate(150, 60)">
    {[0, 1, 2].map((i) => (
      <motion.text
        key={i}
        x={i * 12}
        y={-i * 15}
        fill="white"
        fontSize={16 + i * 4}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, -40] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
        style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}
      >
        z
      </motion.text>
    ))}
  </g>
);