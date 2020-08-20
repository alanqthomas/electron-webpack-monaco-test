import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as monaco from 'monaco-editor';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef?.current) {
      const editor = monaco.editor.create(editorRef.current, {
        language: 'todoLang',
        minimap: { enabled: false },
        theme: 'vs-dark',
      });
    }
  }, []);

  return (
    <div className={styles.container} data-tid="container">
      <div
        ref={editorRef}
        style={{
          height: '500px',
          width: '650px',
        }}
      />
    </div>
  );
}
