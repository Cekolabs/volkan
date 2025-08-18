import React from 'react';

const Videos: React.FC = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* First Video */}
          <div className="w-full">
            <video
              className="w-full h-auto aspect-video object-cover rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            >
              <source
                src={`${process.env.PUBLIC_URL}/videos/carpet-video.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Second Video */}
          <div className="w-full">
            <video
              className="w-full h-auto aspect-video object-cover rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            >
              <source
                src={`${process.env.PUBLIC_URL}/videos/carpet-video2.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
