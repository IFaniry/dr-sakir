import { useCallback } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

import styles from '../styles/contact.module.css'
import HereLocation from '../public/here_location.svg'

const Map = function () {
  const mapref = useCallback(node => {
      if (node !== null) {
        // node = mapref.current
        // https://stackoverflow.com/a/63033314
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY,
          version: 'weekly',
        });
        let map;
        loader.load().then(() => {
          const google = window.google;
          map = new google.maps.Map(node, {
            center: {lat: -18.90630549798235, lng: 47.52041727346638},
            zoom: 18,
          });
          
          const clinicLocation = { lat: -18.907120045313395, lng: 47.520711410006626 };
          new google.maps.Marker({
            position: clinicLocation,
            map,
            title: 'Cabinet dentaire Tsaralalàna\nGalerie 9, 2ème étage',
            icon: HereLocation.src
          });
        });
      }
  }, []);

  return (
    <div className={styles['map']} ref={mapref} />
  );
};

export default Map;
