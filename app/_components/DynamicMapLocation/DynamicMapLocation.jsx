'use client';
import dynamic from 'next/dynamic';

const DynamicLoader = dynamic(
  () => import('../MapLocation/MapLocation'),
  {
    ssr: false,
    loading: () => <p>Loading locations map...</p>,
  }
);

export default function DynamicMapLocation() {
  return (
    <div>
      <DynamicLoader />
    </div>
  );
}
