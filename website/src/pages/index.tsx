import {useEffect, type ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): ReactNode {
  const docsUrl = useBaseUrl('/docs');

  useEffect(() => {
    window.location.replace(docsUrl);
  }, [docsUrl]);

  return null;
}
