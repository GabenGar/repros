// Error components must be Client Components
"use client";

import { Button } from "#components/button";
import { Heading } from "#components/heading";

interface IProps {
  error: Error;
  reset: () => void;
}

/**
 * @TODO multilang
 */
function PageError({ error, reset }: IProps) {
  return (
    <div>
      <Heading level={2}>Something went wrong!</Heading>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

export default PageError;
