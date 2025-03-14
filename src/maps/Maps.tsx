
// function Maps() {
//     return (
//         <div className="w-full flex items-center justify-center h-screen">
//             {/* <img src={Map2} alt="Game map" width={1200} height={1200} className="w-auto h-[800px] drop-shadow-2xl" /> */}
//             <div style={{ backgroundImage: 'url(/map2.webp)' }} className="fixed inset-0 bg-cover bg-center bg-no-repeat" />
//         </div>
//     )
// }

// export default Maps

import React, { useEffect, useRef } from 'react';
import '../css/Maps.css';

// Cloud Particle Component
interface CloudParticleProps {
    index: number;
}

const CloudParticle: React.FC<CloudParticleProps> = ({ index }) => {
    const cloudRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cloud = cloudRef.current;
        if (cloud) {
            const size = Math.random() * 1000 + 100; // Random size between 50px and 150px
            const x = Math.random() * 100; // Random horizontal position (0-100%)
            const y = Math.random() * 30 - 10; // Random vertical position (-10% to 20% - closer to the top)
            const delay = Math.random() * 20; // Random animation delay (0-30 seconds)
            const cloudImages = [
                '/clouds/cloud1.png',
                '/clouds/cloud2.png',
                '/clouds/cloud3.png',
            ]; // Replace with your cloud image paths
            const imageIndex = Math.floor(Math.random() * cloudImages.length); // Random image
            const image = cloudImages[imageIndex];

            cloud.style.width = `${size}px`;
            cloud.style.height = `${size * 0.5}px`; // Make them a bit wider than tall
            cloud.style.left = `${x}%`;
            cloud.style.top = `${y}%`;
            cloud.style.zIndex = "20";
            cloud.style.animationDelay = `${delay}s`;
            cloud.style.backgroundImage = `url(${image})`;
        }
    }, [index]);

    return <div className="cloud-particle" ref={cloudRef}></div>;
};

// Dust Particle Component (Previous Code - No changes needed)
interface DustParticleProps {
    index: number;
}

const DustParticle: React.FC<DustParticleProps> = ({ index }) => {
    const particleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const particle = particleRef.current;
        if (particle) {
            const size = Math.random() * 4 + 2; // Random size between 2px and 6px
            const x = Math.random() * 100; // Random horizontal position (0-100%)
            const y = Math.random() * 100; // Random vertical position (0-100%)
            const delay = Math.random() * 5; // Random animation delay (0-5 seconds)

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            particle.style.animationDelay = `${delay}s`;
        }
    }, [index]);

    return <div className="dust-particle" ref={particleRef}></div>;
};

function Maps() {
    const numClouds = 7; // Adjust the number of clouds as needed
    const numParticles = 50; // Adjust the number of dust particles as needed

    return (
        <div className="w-full flex items-center justify-center h-screen relative overflow-hidden">
            {/* Background Map */}
            <div
                style={{ backgroundImage: 'url(/map2.webp)' }}
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
            />

            {/* Cloud Particles */}
            {[...Array(numClouds)].map((_, index) => (
                <CloudParticle key={`cloud-${index}`} index={index} />
            ))}

            {/* Dust Particles */}
            {[...Array(numParticles)].map((_, index) => (
                <DustParticle key={`dust-${index}`} index={index} />
            ))}

            {/* Optional: Overlay to darken/tint the background */}
            {/* <div className="fixed inset-0 bg-black opacity-20"></div> */}
        </div>
    );
}

export default Maps;