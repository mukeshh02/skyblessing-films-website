import React, { useEffect, useRef } from 'react';
import './InstagramFeed.css';

const InstagramFeed = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Check if script is already loaded
    if (window.taggbox) {
      return;
    }

    // Load Taggbox script dynamically
    const script = document.createElement('script');
    script.src = 'https://widget.taggbox.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Append script to document head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="instagram-feed" className="instagram-feed-section">
      <div 
        ref={widgetRef}
        className="taggbox" 
        style={{
          width: '100%', 
          height: '100%', 
          overflow: 'auto'
        }} 
        data-widget-id="297442" 
        data-website="1"
      />
    </section>
  );
};

export default InstagramFeed;
