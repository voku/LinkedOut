import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, Info, CheckCircle, AlertCircle } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string, type?: 'info' | 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: 'info' | 'success' | 'error' } | null>(null);

  const showToast = useCallback((message: string, type: 'info' | 'success' | 'error' = 'info') => {
    setToast({ message, type });
    // Auto dismiss after 3 seconds
    setTimeout(() => {
        setToast(current => current?.message === message ? null : current);
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-2xl z-50 flex items-center gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
            toast.type === 'error' ? 'bg-red-900 text-white' : 
            toast.type === 'success' ? 'bg-green-800 text-white' : 
            'bg-gray-900 text-white'
        }`}>
          {toast.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5" />}
          {toast.type === 'info' && <Info className="w-5 h-5" />}
          
          <span className="font-medium text-sm">{toast.message}</span>
          
          <button onClick={() => setToast(null)} className="opacity-80 hover:opacity-100 transition-opacity ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </ToastContext.Provider>
  );
};