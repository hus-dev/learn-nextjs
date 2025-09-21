import { Suspense } from "react";
import Link from "next/link";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import styles from "../../../../styles/movie-detail.module.css";

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading move videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>

      {/* Similar Movies and Providers Links */}
      <div className={styles.linksContainer}>
        <Link href={`/movies/${id}/similar`} className={styles.similarLink}>
          View Similar Movies
        </Link>
        <Link href={`/movies/${id}/providers`} className={styles.providersLink}>
          Where to Watch
        </Link>
      </div>
    </div>
  );
}
