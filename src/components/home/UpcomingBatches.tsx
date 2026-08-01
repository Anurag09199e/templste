import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { BatchTable } from '../courses/BatchTable';

export const UpcomingBatches: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Enrollment Open"
          title="Upcoming Live Interactive"
          highlightedText="German Batches"
          subtitle="Reserve your seat in our live online or hybrid campus batches starting this month. Max 12 students per batch."
        />

        <BatchTable />
      </div>
    </section>
  );
};
