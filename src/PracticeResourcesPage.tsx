// PracticeResourcesPage.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import practiceResourcesContent from './markdown/practice-resources.md';

const PracticeResourcesPage: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{practiceResourcesContent}</ReactMarkdown>
        </div>
    );
};

export default PracticeResourcesPage;
