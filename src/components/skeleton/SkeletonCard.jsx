import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <SkeletonTheme baseColor="#fca5a5" highlightColor="#fecaca">
      <p>
        <Skeleton className="h-48 w-96" />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
