import {useCallback, useEffect, useState} from 'react';

// Progress lives in this browser only (localStorage). Keys look like `mce-progress:part-2-data/data-extensions`.
const PREFIX = 'mce-progress:';
const EVENT = 'mce-progress-updated';

function read(key: string): boolean {
  try {
    return window.localStorage.getItem(PREFIX + key) === '1';
  } catch {
    return false;
  }
}

function write(key: string, done: boolean): void {
  try {
    if (done) window.localStorage.setItem(PREFIX + key, '1');
    else window.localStorage.removeItem(PREFIX + key);
  } catch {
    // Storage blocked (private window). Progress simply won't persist.
  }
  window.dispatchEvent(new Event(EVENT));
}

export function resetAll(keys: string[]): void {
  keys.forEach((k) => {
    try {
      window.localStorage.removeItem(PREFIX + k);
    } catch {
      /* ignore */
    }
  });
  window.dispatchEvent(new Event(EVENT));
}

/** Completion state for many lessons at once. Re-renders when any lesson changes. */
export function useProgressMap(keys: string[]): Record<string, boolean> {
  const [state, setState] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const sync = () => setState(Object.fromEntries(keys.map((k) => [k, read(k)])));
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, [keys.join('|')]);
  return state;
}

/** Completion state for one lesson, plus a setter. */
export function useLessonProgress(key: string): [boolean, (done: boolean) => void] {
  const map = useProgressMap([key]);
  const set = useCallback((done: boolean) => write(key, done), [key]);
  return [!!map[key], set];
}
