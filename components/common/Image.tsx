'use client';

import {
  Image as NextUIImage,
  ImageProps as NextUIImageProps,
} from '@nextui-org/react';
import NextImage, { ImageProps } from 'next/image';
import React from 'react';

const Image: React.FC<NextUIImageProps & ImageProps> = (props) => {
  return <NextUIImage as={NextImage} radius="none" {...props} />;
};

export default Image;
