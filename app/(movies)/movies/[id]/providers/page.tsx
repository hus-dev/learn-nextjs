import { Suspense } from "react";
import MovieProviders from "../../../../../components/movie-providers";

export default async function MovieProvidersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading providers...</h1>}>
        <MovieProviders id={id} />
      </Suspense>
    </div>
  );
}
