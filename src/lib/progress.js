import { useCallback, useEffect, useState } from "react";

const KEY = "yk-progress-v1";
const EVT = "yk-progress-changed";

function read() {
  if (typeof window === "undefined") return [];
  try {
    const v = JSON.parse(window.localStorage.getItem(KEY));
    return Array.isArray(v) ? v : [];
  } catch (e) {
    return [];
  }
}

function write(ids) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent(EVT));
  } catch (e) {
  }
}

export function useProgress() {
  const [done, setDone] = useState([]);

  useEffect(() => {
    const sync = () => setDone(read());
    sync();
    window.addEventListener(EVT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isDone = useCallback((id) => done.includes(id), [done]);

  const toggle = useCallback((id) => {
    const cur = read();
    write(cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
  }, []);

  return { done, isDone, toggle };
}
