import { FC, useRef } from 'react';
import clsx from 'clsx';

import Loader from '@/components/shared/Loader/Loader';

import { useLoadingObject } from '@/hooks/useLoadingObject';
import { IIframe } from './iframe.interface';
import s from './Video.module.scss';

interface IframeProps {
  className?: string;
  src: IIframe['src'];
  title?: IIframe['title'];
  loader?: boolean;
  back?: boolean;
}

const Iframe: FC<IframeProps> = ({
  className,
  src,
  title = '',
  loader,
  back,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isLoading } = useLoadingObject(iframeRef);

  return (
    <div className={ clsx(className, s.video) }>
      {loader && isLoading && <Loader className={ s.video__loader } />}
      <iframe
        src={ back ? `https://www.youtube.com/embed/${ src }?autoplay=1` : src }
        title={ title }
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={ iframeRef }
      />
    </div>
  );
};

export default Iframe;
