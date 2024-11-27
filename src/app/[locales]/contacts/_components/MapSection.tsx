'use client';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { BankMapProps } from '../Contacts.types';

import {
  accessToken,
  MAPBOX_STYLES,
  MAPBOX_ZOOM,
  points,
} from '@/constants/map';

mapboxgl.accessToken = accessToken;

const MapSection = ({ center }: BankMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !map) {
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAPBOX_STYLES,
        center,
        zoom: MAPBOX_ZOOM,
      });

      setMap(mapInstance);
    }
  }, [map, center]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        new mapboxgl.Marker()
          .setLngLat(point.coordinates as [number, number])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${point.name}</h3>`))
          .addTo(map);
      });

      map.flyTo({ center: points[0].coordinates as [number, number] });
    }
  }, [map]);

  return <div className="w-full h-[15rem]" ref={mapContainer} />;
};

export default MapSection;
