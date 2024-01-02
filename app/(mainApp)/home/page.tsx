import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const HomePage = async () => {
  const { isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect('/api/auth/login');
  }

  return (
    <div>
      <h1>HomePage View all the posts made by users of twizzle social media</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
        enim explicabo doloremque hic aliquam debitis, amet quo, dolor vero
        reprehenderit repellendus nihil exercitationem minus maiores provident
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus
        sed a, voluptatem sequi optio natus repellat id maxime, dolores odio hic
        minima debitis ducimus velit fugiat laudantium exercitationem
        voluptatibus.
      </p>
    </div>
  );
};

export default HomePage;
