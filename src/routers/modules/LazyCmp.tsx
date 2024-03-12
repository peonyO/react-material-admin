import { Suspense } from "react";

import RouterGuard from "./RouterGuard";

interface Props {
  Lazy?: React.LazyExoticComponent<React.FC>;
  loading: React.ReactNode;
}

const LazyCmp: React.FC<Props> = ({ loading, Lazy }) => {
  return Lazy ? (
    <RouterGuard>
      <Suspense fallback={loading}>
        <Lazy />
      </Suspense>
    </RouterGuard>
  ) : (
    <RouterGuard>{loading}</RouterGuard>
  );
};

export default LazyCmp;
