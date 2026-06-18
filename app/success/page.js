import { Suspense } from 'react';
import SuccessContent from './SuccessContent';
import './success.css';

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="success-pages"><h1>Processing your order...</h1></div>}>
      <SuccessContent />
    </Suspense>
  );
}