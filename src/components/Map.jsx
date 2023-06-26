import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MyMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false,
    });

    const ciudadViejaCoords = [-34.9065, -56.2038];

    map.setView(ciudadViejaCoords, 15);

    const darkTileLayer = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '',
      }
    );

    darkTileLayer.addTo(map);

    const blackIcon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    const marker = L.marker(ciudadViejaCoords, { icon: blackIcon }).addTo(map); // Usar el icono negro

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: '170px', width: 'auto' }} />;
};

export default MyMap;