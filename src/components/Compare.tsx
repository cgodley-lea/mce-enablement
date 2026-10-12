import React, {type ReactNode} from 'react';
import styles from './Compare.module.css';

type Props = {
  /** What the MCE concept corresponds to in Marketing Cloud Next. */
  mcn: ReactNode;
  /** What the MCE concept corresponds to in Marketing Cloud Account Engagement (Pardot). */
  mcae: ReactNode;
  /** Optional heading. Defaults to "How this compares". */
  title?: string;
};

/** The two-column comparison callout that closes every lesson. */
export default function Compare({mcn, mcae, title = 'How This Compares'}: Props): ReactNode {
  return (
    <aside className={styles.compare} aria-label={title}>
      <p className={styles.title}>{title}</p>
      <div className={styles.cols}>
        <div className={styles.col}>
          <p className={styles.label}>In MCN, this is…</p>
          <div className={styles.body}>{mcn}</div>
        </div>
        <div className={styles.col}>
          <p className={styles.label}>In MCAE, this is…</p>
          <div className={styles.body}>{mcae}</div>
        </div>
      </div>
    </aside>
  );
}
