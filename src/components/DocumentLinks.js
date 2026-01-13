import React from 'react';
import './DocumentLinks.css';

function DocumentLinks({ documents }) {
  if (!documents || documents.length === 0) return null;

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return '📄';
      case 'ppt':
      case 'pptx':
        return '📊';
      case 'doc':
      case 'docx':
        return '📝';
      default:
        return '📎';
    }
  };

  const getFileType = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    return extension.toUpperCase();
  };

  return (
    <div className="document-links">
      <h3 className="document-title">관련 자료</h3>
      <div className="document-list">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            className="document-item"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span className="document-icon">{getFileIcon(doc.name || doc.url)}</span>
            <div className="document-info">
              <span className="document-name">{doc.name || doc.url.split('/').pop()}</span>
              <span className="document-type">{getFileType(doc.name || doc.url)}</span>
            </div>
            <span className="document-download">↓</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DocumentLinks;

