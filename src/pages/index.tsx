import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {course, lessonKey, totalHours, totalLessons} from '@site/src/data/course';
import {resetAll, useProgressMap} from '@site/src/lib/progress';
import PixelCluster from '@site/src/components/PixelCluster';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const allKeys = course.flatMap((p) => p.lessons.map((l) => lessonKey(p, l)));
const fmtHours = (h: number) => `${Number(h.toFixed(2))} h`;

export default function Home(): ReactNode {
  const progress = useProgressMap(allKeys);
  const logo = useBaseUrl('/img/LEA-logo-green-white.png');
  const doneCount = allKeys.filter((k) => progress[k]).length;
  const pct = Math.round((doneCount / totalLessons) * 100);
  const firstOpen = course.flatMap((p) => p.lessons.map((l) => ({p, l}))).find(({p, l}) => !progress[lessonKey(p, l)]);
  const next = firstOpen ?? {p: course[0], l: course[0].lessons[0]};

  return (
    <Layout title="Course Overview" description="Self-paced Marketing Cloud Engagement course for ListEngage Academy.">
      <header className={styles.banner} data-theme="charcoal">
        <PixelCluster className={styles.pixels} seed={11} />
        <div className={styles.bannerInner}>
          <img className={styles.logo} src={logo} alt="ListEngage Academy" />
          <p className={styles.eyebrow}>Self-Paced Course</p>
          <h1 className={styles.title}>Marketing Cloud Engagement</h1>
          <p className={styles.lede}>
            Build LEOptical in MCE, with every lesson mapped back to the MCN and MCAE features you already know.
          </p>
          <div className={styles.stats}>
            <span>{totalLessons} lessons</span>
            <span>About {Math.round(totalHours)} hours</span>
            <span>
              {doneCount} of {totalLessons} complete
            </span>
          </div>
          <div className={styles.meter} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Course progress">
            <div className={styles.meterFill} style={{width: `${pct}%`}} />
          </div>
          <Link className={styles.button} to={`/${next.p.slug}/${next.l.slug}`}>
            {doneCount === 0 ? 'Start the course' : 'Continue'}
            <span className={styles.arrow} aria-hidden="true">›</span>
          </Link>
        </div>
        <div className={styles.swoosh} aria-hidden="true" />
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h2 className={styles.sectionTitle}>Course Map</h2>
          <p>
            Work through the parts in order. Each lesson ends with a lab in the ListEngage BU and a comparison to MCN and
            MCAE. Progress is saved in this browser only.
          </p>
        </div>

        <ol className={styles.parts}>
          {course.map((part) => {
            const keys = part.lessons.map((l) => lessonKey(part, l));
            const done = keys.filter((k) => progress[k]).length;
            const hours = part.lessons.reduce((n, l) => n + l.hours, 0);
            const complete = done === keys.length;
            return (
              <li key={part.slug} className={`${styles.part} ${complete ? styles.partDone : ''}`}>
                <div className={styles.partHead}>
                  <p className={styles.partNumber}>Part {part.number}</p>
                  <p className={styles.partMeta}>
                    {fmtHours(hours)} · {done}/{keys.length}
                  </p>
                </div>
                <h3 className={styles.partTitle}>{part.title}</h3>
                <p className={styles.partSummary}>{part.summary}</p>
                <ul className={styles.lessons}>
                  {part.lessons.map((l) => {
                    const isDone = !!progress[lessonKey(part, l)];
                    return (
                      <li key={l.slug} className={isDone ? styles.lessonDone : undefined}>
                        <span className={styles.check} aria-label={isDone ? 'Complete' : 'Not complete'} />
                        <Link to={`/${part.slug}/${l.slug}`}>{l.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>

        {doneCount > 0 && (
          <p className={styles.reset}>
            <button type="button" onClick={() => resetAll(allKeys)}>
              Reset all progress
            </button>
          </p>
        )}
      </main>
    </Layout>
  );
}
