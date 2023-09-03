import Link from "next/link";
import { useEffect, useState } from "react";

export default function useRedirectAfterSomeSeconds(
  redirectTo: string,
  seconds = 5
) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);

  useEffect(() => {
    if (secondsRemaining === 0) <Link href="/"/>;

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1) <Link href={redirectTo}/>;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining, redirectTo]);

  return { secondsRemaining };
}
