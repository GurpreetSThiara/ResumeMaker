import React, { useState } from 'react';
import { Button, Input, Stack, Image, Box, Progress, Alert, AlertIcon, SimpleGrid, Select } from '@chakra-ui/react';

const ConvertImages = () => {
  const [images, setImages] = useState([]);
  const [webpImageUrls, setWebpImageUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [quality, setQuality] = useState(0.8); // Default quality for compression

  const convertToWebP = async (imageUrl) => {
    try {
      const image = new window.Image();
      image.crossOrigin = 'Anonymous'; // Ensure cross-origin issues are handled
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const webpUrl = URL.createObjectURL(blob);
            setWebpImageUrls((prevUrls) => [...prevUrls, webpUrl]);
            setProgress((prevProgress) => prevProgress + (100 / images.length));
          } else {
            throw new Error('Conversion to WebP failed');
          }
        }, 'image/webp', quality);
      };
      image.onerror = () => {
        throw new Error('Error loading image');
      };
      image.src = imageUrl;
    } catch (error) {
      setError(error.message);
      console.error('Error converting image:', error);
    }
  };

  const handleInputChange = (e) => {
    const fileList = e.target.files;
    const imageUrls = Array.from(fileList).map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
    setWebpImageUrls([]); // Reset previous conversions
    setProgress(0); // Reset progress
    setError(null); // Reset errors
  };

  const handleConvert = () => {
    if (images.length === 0) {
      setError('No images to convert');
      return;
    }
    setProgress(0); // Reset progress
    setError(null); // Reset errors
    images.forEach((imageUrl) => convertToWebP(imageUrl));
  };

  const handleDownload = (url, index) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${index + 1}.webp`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleDownloadAll = () => {
    webpImageUrls.forEach((url, index) => {
      handleDownload(url, index);
    });
  };

  return (
    <Stack spacing={4}>
      <Input type="file" multiple onChange={handleInputChange} />
      <Select value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))}>
        <option value={1}>High Quality</option>
        <option value={0.8}>Medium Quality</option>
        <option value={0.6}>Low Quality</option>
      </Select>
      <Button onClick={handleConvert}>Convert to WebP</Button>
      {progress > 0 && progress < 100 && <Progress value={progress} size="xs" />}
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {webpImageUrls.map((webpUrl, index) => (
          <Box key={index} textAlign="center">
            <Image src={webpUrl} alt={`Converted to WebP ${index + 1}`} />
            <Button mt={2} onClick={() => handleDownload(webpUrl, index)}>
              Download
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      {webpImageUrls.length > 0 && <Button onClick={handleDownloadAll}>Download All</Button>}
    </Stack>
  );
};

export default ConvertImages;
