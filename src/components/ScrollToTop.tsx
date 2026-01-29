import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToTop = () => {
  try {
    if (typeof window !== 'undefined') {
      // primary
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      // fallbacks for different browsers/containers
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      // attempt to reset common app root/main containers
      const main = document.querySelector('main') as HTMLElement | null;
      if (main) main.scrollTop = 0;
      const appRoot = document.getElementById('root') || document.getElementById('app');
      if (appRoot) appRoot.scrollTop = 0;
    }
  } catch (e) {
    // no-op
  }
};

const ScrollToTop = () => {
  const location = useLocation();

  // useLayoutEffect to ensure scroll before paint
  useLayoutEffect(() => {
    // include pathname, search and hash to cover slugs and anchors
    scrollToTop();
    // If you prefer instant jump, replace 'smooth' behaviour above with manual sets
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;
