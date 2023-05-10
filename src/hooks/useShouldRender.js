import React, { useEffect, useState } from 'react';

export const useShouldRender = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(
      typeof window !== 'undefined' && process.env.NODE_ENV === 'production'
    );
  }, []);

  return shouldRender;
};
