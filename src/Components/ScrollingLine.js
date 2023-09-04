// ScrollingLine.js
import React, { useEffect, useState } from 'react';
import '../StyleSheet/ScrollingLine.css'; // Create this CSS file for styling

function ScrollingLine() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const updateScrollPercentage = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(Math.min(percentage, 100));
        };

        window.addEventListener('scroll', updateScrollPercentage);

        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
        };
    }, []);

    return (
        <div className="scroll-line" style={{ height: `${scrollPercentage}%` }}>
            {/* Your content goes here */}
        </div>
    );
}

export default ScrollingLine;
