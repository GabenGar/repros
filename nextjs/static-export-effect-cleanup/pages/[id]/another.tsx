import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AnotherPage() {
  const router = useRouter();
  const { isReady, query } = router;
  const { id } = query;
  const parsedID = !id ? undefined : Array.isArray(id) ? id[0] : id;

  useEffect(() => {});

  return (
    <main>
      {!isReady ? <div>Loading...</div> : <p>Showing ID: {parsedID}</p>}
      <Link href="/">Index page</Link>
    </main>
  );
}

export default AnotherPage;
