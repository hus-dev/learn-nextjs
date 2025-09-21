import styles from "../styles/similar-movies.module.css";
import Movie from "./movie";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "";

async function getSimilarMovies(id: string) {
  console.log(`Fetching similar movies for: ${id}`);
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimilarMovies({ id }: { id: string }) {
  const similarMovies = await getSimilarMovies(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Similar Movies</h1>
      <div className={styles.moviesGrid}>
        {similarMovies.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
