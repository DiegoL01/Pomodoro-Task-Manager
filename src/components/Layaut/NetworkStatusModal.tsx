"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, AlertTriangle, RefreshCw } from "lucide-react";

export const NetworkStatusModal = () => {
  const [errorType, setErrorType] = useState<"offline" | "server" | null>(null);

  useEffect(() => {
    const handleOffline = () => setErrorType("offline");
    const handleOnline = () => setErrorType(null);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        if (response.status >= 500) {
          setErrorType("server");
        }
        
        return response;
      } catch (error) {
        if (!navigator.onLine) {
          setErrorType("offline");
        }
        throw error;
      }
    };

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {errorType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center border-t-4 border-red-500"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-4 rounded-full">
                {errorType === "offline" ? (
                  <WifiOff className="text-red-600 w-10 h-10" />
                ) : (
                  <AlertTriangle className="text-red-600 w-10 h-10" />
                )}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {errorType === "offline" ? "Sin conexión" : "Error en el servidor"}
            </h2>
            
            <p className="text-gray-600 mb-6">
              {errorType === "offline" 
                ? "Tu conexión a internet falló. Verifica tu Wi-Fi o datos móviles." 
                : "Estamos teniendo problemas técnicos en nuestro servidor (Error 500)."}
            </p>

            <button
              onClick={() => {
                setErrorType(null); 
                window.location.reload();
              }}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
            >
              <RefreshCw size={18} />
              Reintentar ahora
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};