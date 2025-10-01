import React from "react";

export default function GalleryHero() {
  return (
    <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold">Gallery</h1>
        <p className="text-blue-100 mt-2">
          Photos and videos from our projects, events and student showcases.
        </p>
      </div>
    </section>
  );
}