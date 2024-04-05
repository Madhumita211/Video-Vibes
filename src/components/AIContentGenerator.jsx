import React, { useState } from "react";

const AIContentGenerator = () => {
    const [generatedContent, setGeneratedContent] = useState('');

    // Function to simulate AI-generated content (replace with your actual AI integration)
    const generateContent = () => {
        // Simulated AI content generation
        const aiGeneratedText = 'This is an example of AI-generated content.';

        setGeneratedContent(aiGeneratedText);
    };

    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">AI-Generated Content</h2>

        {generatedContent ? (
            <div className="mb-4">
            <p className="text-gray-600">{generatedContent}</p>
            </div>
        ) : (
            <p className="text-gray-600 mb-4">Click the button to generate AI content.</p>
        )}

        <button
            onClick={generateContent}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
        >
            Generate Content
        </button>
        </div>
    );
};

export default AIContentGenerator;