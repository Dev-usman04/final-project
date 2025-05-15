import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import DashBoardCard from './component/DashBoardCard';
import DashBoardEmpty from './component/DashBoardEmpty';

const DashboardPage = () => {
  const orders = true;
  useTitle("Dashboard");

  return (
    <main>
      <section>
        <p className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8'>
          My Dashboard
        </p>
      </section>

      <section>
        {orders && (
          <div>
            <DashBoardCard />
            <DashBoardCard />
          </div>
        )}
      </section>

      <section>
        {!orders && <DashBoardEmpty />}
      </section>
    </main>
  );
};

export default DashboardPage;
