import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PaystackPop from '@paystack/inline-js';
import { FiCheckCircle, FiXCircle, FiCopy, FiLoader, FiLock } from 'react-icons/fi';
import AlertModal from '../../modals/AlertModal';
import { PAYABLE_TIERS, formatNaira } from '../../../shared/membershipTiers';
import {
  initializeMembershipPayment,
  verifyMembershipPayment,
} from '../../services/paymentService';

const MAX_PENDING_POLLS = 5;

const inputClasses =
  'w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors';

const MembershipPaymentForm = ({ initialTierId = 'student', onClose }) => {
  const [formData, setFormData] = useState({
    tierId: PAYABLE_TIERS[initialTierId] ? initialTierId : 'student',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  // form → paying → verifying → success | failed
  const [phase, setPhase] = useState('form');
  const [reference, setReference] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', title: '', message: '' });

  const pollCountRef = useRef(0);
  const pollTimerRef = useRef(null);
  useEffect(() => () => clearTimeout(pollTimerRef.current), []);

  const selectedTier = PAYABLE_TIERS[formData.tierId];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const runVerify = async (ref) => {
    setPhase('verifying');
    try {
      const res = await verifyMembershipPayment(ref);
      if (res.status === 'success') {
        setResult(res);
        setPhase('success');
      } else if (res.status === 'pending') {
        if (pollCountRef.current < MAX_PENDING_POLLS) {
          pollCountRef.current += 1;
          pollTimerRef.current = setTimeout(() => runVerify(ref), 3000);
        } else {
          setErrorMessage(
            'Your payment is still processing. Use "Re-check payment" in a moment — do not pay again.'
          );
          setPhase('failed');
        }
      } else {
        setErrorMessage(res.reason || 'Payment was not completed.');
        setPhase('failed');
      }
    } catch (err) {
      setErrorMessage(err.message);
      setPhase('failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phase !== 'form') return; // double-click guard

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim()) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Missing Information',
        message: 'Please fill in all required fields',
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Invalid Email',
        message: 'Please provide a valid email address',
      });
      return;
    }

    setPhase('paying');
    try {
      const { accessCode, reference: ref } = await initializeMembershipPayment(formData);
      setReference(ref);
      pollCountRef.current = 0;

      const popup = new PaystackPop();
      popup.resumeTransaction(accessCode, {
        onSuccess: () => runVerify(ref),
        onCancel: () => {
          setPhase('form');
          setAlert({
            show: true,
            type: 'warning',
            title: 'Payment Cancelled',
            message: 'You closed the payment window. You can try again whenever you are ready.',
          });
        },
        // Ambiguous outcome — let the server decide via verification.
        onError: () => runVerify(ref),
      });
    } catch (err) {
      setPhase('form');
      setAlert({
        show: true,
        type: 'error',
        title: 'Could Not Start Payment',
        message: err.message,
      });
    }
  };

  const copyReference = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — reference is still visible on screen */
    }
  };

  const startOver = () => {
    clearTimeout(pollTimerRef.current);
    pollCountRef.current = 0;
    setReference('');
    setResult(null);
    setErrorMessage('');
    setPhase('form');
  };

  if (phase === 'success' && result) {
    return (
      <div className="text-center py-8 px-4">
        <FiCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Payment Successful!</h3>
        <p className="text-gray-300 mb-6">
          Welcome to IOIFA. Your membership application has been received.
        </p>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-left space-y-3 max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="text-gray-400">Membership</span>
            <span className="text-white font-medium">{result.tier}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Amount Paid</span>
            <span className="text-white font-medium">{formatNaira(result.amountNaira)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Email</span>
            <span className="text-white font-medium">{result.email}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-gray-400">Reference</span>
            <button
              onClick={copyReference}
              className="flex items-center gap-1 text-blue-300 hover:text-blue-200 font-mono text-sm break-all"
              title="Copy reference"
            >
              {result.reference}
              <FiCopy className="w-4 h-4 shrink-0" />
            </button>
          </div>
          {copied && <p className="text-green-400 text-xs text-right">Copied!</p>}
        </div>
        <p className="text-gray-400 text-sm mt-4">
          Save your reference — you will need it for any enquiries.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-lg"
        >
          Done
        </motion.button>
      </div>
    );
  }

  if (phase === 'failed') {
    return (
      <div className="text-center py-8 px-4">
        <FiXCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Payment Not Confirmed</h3>
        <p className="text-gray-300 mb-4">{errorMessage}</p>
        {reference && (
          <p className="text-gray-400 text-sm mb-6">
            Your reference: <span className="font-mono text-blue-300 break-all">{reference}</span>
            <br />
            Quote this if you contact support.
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {reference && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => runVerify(reference)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg"
            >
              Re-check Payment
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startOver}
            className="bg-transparent border border-gray-600 hover:border-blue-400 text-white font-medium py-3 px-6 rounded-lg"
          >
            Start Over
          </motion.button>
        </div>
      </div>
    );
  }

  if (phase === 'verifying') {
    return (
      <div className="text-center py-16 px-4">
        <FiLoader className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-spin" />
        <h3 className="text-xl font-bold text-white mb-2">Confirming your payment…</h3>
        <p className="text-gray-300">Please do not close this window.</p>
      </div>
    );
  }

  return (
    <div className="px-2 sm:px-4 py-2">
      <h3 className="text-2xl font-bold text-white mb-1">Apply for Membership</h3>
      <p className="text-gray-300 text-sm mb-6">
        Fill in your details and pay securely with Paystack.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Membership Tier <span className="text-red-400">*</span>
          </label>
          <select
            name="tierId"
            value={formData.tierId}
            onChange={handleChange}
            className={inputClasses}
          >
            {Object.values(PAYABLE_TIERS).map((tier) => (
              <option key={tier.id} value={tier.id}>
                {tier.name} — {formatNaira(tier.amountNaira)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClasses}
            required
          />
          <p className="text-gray-500 text-xs mt-1">Your payment receipt will be sent here.</p>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-1">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 08012345678"
            className={inputClasses}
            required
          />
        </div>

        <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
          <span className="text-gray-300">Total due</span>
          <span className="text-white text-lg font-bold">
            {formatNaira(selectedTier.amountNaira)}
          </span>
        </div>

        <motion.button
          type="submit"
          disabled={phase !== 'form'}
          whileHover={phase === 'form' ? { scale: 1.02 } : {}}
          whileTap={phase === 'form' ? { scale: 0.98 } : {}}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center gap-2"
        >
          {phase === 'paying' ? (
            <>
              <FiLoader className="w-5 h-5 animate-spin" />
              Opening secure payment…
            </>
          ) : (
            <>
              <FiLock className="w-4 h-4" />
              Pay {formatNaira(selectedTier.amountNaira)} Securely
            </>
          )}
        </motion.button>
        <p className="text-gray-500 text-xs text-center">
          Payments are processed securely by Paystack. We never see your card details.
        </p>
      </form>

      <AlertModal
        show={alert.show}
        onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
        type={alert.type}
        title={alert.title}
        message={alert.message}
      />
    </div>
  );
};

export default MembershipPaymentForm;
