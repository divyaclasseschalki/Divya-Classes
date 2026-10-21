import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Logo } from '../common/Logo';
import { Shield, Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface AdminLoginPageProps {
  onSuccess: () => void;
  onBackToHome: () => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onSuccess, onBackToHome }) => {
  const { loginAdmin } = useAuth();
  const [email, setEmail] = useState('divyaclasses@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await loginAdmin(password, email);
    setLoading(false);

    if (res.success) {
      onSuccess();
    } else {
      setError(res.error || 'Authentication failed. Please verify the administrator password.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="w-3.5 h-3.5 text-amber-500" />
            <span>Authorized Administrator Portal</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Dipak Sir Administrative Login
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Access students registry, admission inquiries, test scores & file uploads.
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 flex items-start gap-2.5 text-rose-700 dark:text-rose-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              Admin Authorized Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Authorized admin account: <span className="font-semibold text-slate-700 dark:text-slate-300">divyaclasses@gmail.com</span>
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
              Administrator Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-amber-500" />
              <span>Configured securely via environment variables</span>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl text-sm shadow-xl shadow-blue-950/20 transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : 'Sign In as Administrator'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center">
          <button
            onClick={onBackToHome}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 font-medium"
          >
            ← Back to Divya Classes Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
