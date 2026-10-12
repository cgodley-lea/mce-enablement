import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useLessonProgress} from '@site/src/lib/progress';
import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

function MarkComplete({lessonKey}: {lessonKey: string}): ReactNode {
  const [done, setDone] = useLessonProgress(lessonKey);
  return (
    <div className={`${styles.complete} ${done ? styles.isDone : ''}`}>
      <label className={styles.label}>
        <input type="checkbox" checked={done} onChange={(e) => setDone(e.target.checked)} />
        <span>{done ? 'Lesson complete' : 'Mark this lesson complete'}</span>
      </label>
      <span className={styles.hint}>Saved in this browser only.</span>
    </div>
  );
}

export default function FooterWrapper(props: Props): ReactNode {
  const {metadata} = useDoc();
  return (
    <>
      <Footer {...props} />
      <MarkComplete lessonKey={metadata.id} />
    </>
  );
}
