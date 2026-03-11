"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export function Cta13() {
  const zimbabweCenter = [-19.0154, 29.1549];
  const operationalAreas = [
    { name: "Masvingo", coords: [-20.0737, 30.8309] },
    { name: "Matabeleland South", coords: [-21.0523, 29.3049] },
    { name: "Manicaland", coords: [-18.9216, 32.1746] },
    { name: "Midlands", coords: [-19.1500, 29.6500] },
  ];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-[5%] max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-green-700 text-sm font-semibold uppercase mb-2">Our Reach</p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Where We Work</h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          BHASO operates in four provinces across Zimbabwe, serving communities most affected by
          HIV/AIDS, climate change, and social inequalities.
        </p>
      </div>

      <div className="h-96 rounded-lg overflow-hidden shadow-md mb-12">
        <MapContainer
          center={zimbabweCenter}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {operationalAreas.map((area, index) => (
            <Marker key={index} position={area.coords}>
              <Popup>
                <div className="font-semibold text-green-800">{area.name} Province</div>
                <div>BHASO operational area since 2015</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {operationalAreas.map((area, index) => (
          <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-800">{area.name}</h3>
            <p className="mt-2 text-black leading-relaxed">
              Focus: HIV prevention, climate resilience, and gender equality programs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
