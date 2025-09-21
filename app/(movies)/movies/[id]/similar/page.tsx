import { Suspense } from "react";
import SimilarMovies from "../../../../../components/similar-movies";

export default async function SimilarMoviesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading similar movies...</h1>}>
        <SimilarMovies id={id} />
      </Suspense>
    </div>
  );
}
