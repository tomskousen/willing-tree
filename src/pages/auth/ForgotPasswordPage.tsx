import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../../stores/authStore';
import { Button } from '../../components/Button';

interface ForgotPasswordFormData {
  email: string;
}

export const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword, isLoading, error, clearError } = useAuthStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      clearError();
      await resetPassword(data.email);
      setEmailSent(true);
      toast.success('Password reset email sent! Check your inbox.');
    } catch (err) {
      toast.error('Failed to send reset email. Please check the email address.');
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to your email address. 
              Please check your inbox and follow the instructions to reset your password.
            </p>
            <Link to="/auth/login">
              <Button fullWidth>
                Back to Login
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Didn't receive the email? Check your spam folder or{' '}
              <button
                onClick={() => setEmailSent(false)}
                className="text-primary-600 hover:underline"
              >
                try again
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        {/* Back to Login Link */}
        <Link
          to="/auth/login"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password?</h1>
          <p className="text-gray-600 mt-1">
            No worries! Enter your email and we'll send you reset instructions.
          </p>
        </div>

        {/* Reset Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-xl p-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email'
                }
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            loading={isLoading || isSubmitting}
            fullWidth
            className="h-12"
          >
            Send Reset Instructions
          </Button>
        </motion.form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Remember your password?{' '}
          <Link to="/auth/login" className="text-primary-600 hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};