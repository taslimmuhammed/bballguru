
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./pdfViewer.css";
import PDF from '../../assets/sample.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <div className="controls">
        <button onClick={prevPage} disabled={pageNumber === 1} className="button-29">
          Prev
        </button>
        <button onClick={nextPage} disabled={pageNumber === numPages} className="button-29">
          Next
        </button>

      </div>

      <Document
        file={PDF}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
      >
        <Page pageNumber={pageNumber}  className="pdf_view" />
      </Document>
    </div>
  );
};

export default PdfViewer;