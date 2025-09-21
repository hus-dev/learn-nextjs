import { Suspense } from "react";
import Link from "next/link";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import styles from "../../../../styles/movie-detail.module.css";
import { title } from 'process';

interface IParams {
  params: {id: string};
}

export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({
  params,
}: IParams) {
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
