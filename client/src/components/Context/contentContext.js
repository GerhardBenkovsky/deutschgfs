import React from 'react';

const ContentContext = React.createContext();

const ContentProvider = ContentContext.Provider;
const ContentConsumer = ContentContext.Consumer;

export { ContentProvider, ContentConsumer };
