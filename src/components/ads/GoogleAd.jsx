// import React, { useEffect, useState } from 'react';
// import AdSense from 'react-adsense';

// const GoogleAd = () => {
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     // Ensure AdSense script is loaded only once
//     if (!window.adsbygoogle) {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }
//   }, []);

//   const handleError = (err) => {
//     // Handle the error
//     console.error('Google AdSense error:', err);
//     setError(err);
//   };

//   if (error) {
//     // Render fallback UI if an error occurs
//     return <div>Error loading AdSense ad. Please try again later.</div>;
//   }

//   return (
//     <div style={{height:'400px', width:'400px'}}>
//       <AdSense.Google
//         client="ca-pub-9044464959846360"
//         slot="6186221430"
//         style={{ display: 'block' }}
//         format="auto"
//         responsive={"true"}
//         onError={handleError}
//       />
//     </div>
//   );
// };

// export default GoogleAd;
import React from 'react'

const GoogleAd = () => {
  return (
    <div>
      
    </div>
  )
}

export default GoogleAd
