import { useRef, useEffect } from 'react';

export default function Home() {
  const monacoRef = useRef(null);

  useEffect(() => {
    if (!monacoRef.current) return;

    import('monaco-editor').then(monaco => monaco.editor.create(monacoRef.current));
  }, []);

  return <div ref={monacoRef} />
}
