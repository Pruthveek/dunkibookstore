"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMapSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  const center = {
    lat: 23.0417582,
    lng: 72.6755603,
  };

  const markerIcon = {
    url: "/Images/contactus/book-store_small.png",
    scaledSize: { width: 100, height: 100 } as google.maps.Size,
  };

  const onMarkerLoad = useCallback((marker: google.maps.Marker) => {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }, []);

  return (
    <div className="w-7xl mx-auto h-[500px] mt-10 relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-lg">
          <div className="w-3/4 h-3/4 bg-gray-300 rounded-lg animate-pulse" />
        </div>
      )}

      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        onLoad={() => setIsLoaded(true)}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={15}
          onLoad={() => setIsLoaded(true)}
        >
          <Marker position={center} icon={markerIcon} onLoad={onMarkerLoad} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
