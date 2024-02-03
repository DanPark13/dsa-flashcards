// AboutPage.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import aboutContent from './markdown/about.md';

const AboutPage: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
        </div>
    );
};

export default AboutPage;
