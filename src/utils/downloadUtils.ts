// Download utility functions for portfolio

export interface DownloadOptions {
  filename?: string;
  openInNewTab?: boolean;
}

/**
 * Download a file from the public directory
 * @param filePath - Path to file in public directory (e.g., '/cv/resume.pdf')
 * @param options - Download options
 */
export const downloadFile = (filePath: string, options: DownloadOptions = {}) => {
  const { filename, openInNewTab = true } = options;
  
  try {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
    
    // Set download attribute if filename is provided
    if (filename) {
      link.download = filename;
    }
    
    // Open in new tab as fallback
    if (openInNewTab) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Download initiated: ${filename || filePath}`);
  } catch (error) {
    console.error('Download failed:', error);
    
    // Fallback: open in new window
    window.open(filePath, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Download CV with predefined settings
 */
export const downloadCV = () => {
  downloadFile('/cv/jones-mukelabai-cv.pdf', {
    filename: 'Jones_Mukelabai_CV.pdf',
    openInNewTab: true
  });
};

/**
 * Check if file exists before download
 * @param filePath - Path to check
 * @returns Promise<boolean>
 */
export const checkFileExists = async (filePath: string): Promise<boolean> => {
  try {
    const response = await fetch(filePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Download with file existence check
 * @param filePath - Path to file
 * @param options - Download options
 */
export const safeDownload = async (filePath: string, options: DownloadOptions = {}) => {
  const fileExists = await checkFileExists(filePath);
  
  if (fileExists) {
    downloadFile(filePath, options);
  } else {
    console.error(`File not found: ${filePath}`);
    alert('Sorry, the file is currently unavailable. Please try again later or contact me directly.');
  }
};

/**
 * Get file size for display
 * @param filePath - Path to file
 * @returns Promise<string> - Formatted file size
 */
export const getFileSize = async (filePath: string): Promise<string> => {
  try {
    const response = await fetch(filePath, { method: 'HEAD' });
    const contentLength = response.headers.get('content-length');
    
    if (contentLength) {
      const bytes = parseInt(contentLength, 10);
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      
      if (bytes === 0) return '0 Bytes';
      
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
    }
    
    return 'Unknown size';
  } catch {
    return 'Unknown size';
  }
};