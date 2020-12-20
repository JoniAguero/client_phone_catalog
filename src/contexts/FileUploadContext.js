import React from 'react';

const FileUploadContext = React.createContext({
  file: null,
  setFile: () => {}
});

export default FileUploadContext;