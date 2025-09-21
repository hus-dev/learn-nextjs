import styles from "../styles/movie-providers.module.css";
import { API_URL } from "../lib/constants";

async function getMovieProviders(id: string) {
  console.log(`Fetching providers for movie: ${id}`);
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

interface Provider {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

interface CountryProviders {
  link: string;
  flatrate?: Provider[];
  buy?: Provider[];
  rent?: Provider[];
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers: Record<string, CountryProviders> = await getMovieProviders(
    id
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Where to Watch</h1>
      <div className={styles.countriesGrid}>
        {Object.entries(providers).map(([countryCode, countryData]) => (
          <div key={countryCode} className={styles.countryCard}>
            <h2 className={styles.countryName}>{countryCode}</h2>

            {countryData.flatrate && countryData.flatrate.length > 0 && (
              <div className={styles.providerSection}>
                <h3 className={styles.sectionTitle}>Streaming</h3>
                <div className={styles.providersList}>
                  {countryData.flatrate.map((provider) => (
                    <div
                      key={provider.provider_id}
                      className={styles.providerCard}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                        alt={provider.provider_name}
                        className={styles.providerLogo}
                      />
                      <span className={styles.providerName}>
                        {provider.provider_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {countryData.buy && countryData.buy.length > 0 && (
              <div className={styles.providerSection}>
                <h3 className={styles.sectionTitle}>Buy</h3>
                <div className={styles.providersList}>
                  {countryData.buy.map((provider) => (
                    <div
                      key={provider.provider_id}
                      className={styles.providerCard}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                        alt={provider.provider_name}
                        className={styles.providerLogo}
                      />
                      <span className={styles.providerName}>
                        {provider.provider_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {countryData.rent && countryData.rent.length > 0 && (
              <div className={styles.providerSection}>
                <h3 className={styles.sectionTitle}>Rent</h3>
                <div className={styles.providersList}>
                  {countryData.rent.map((provider) => (
                    <div
                      key={provider.provider_id}
                      className={styles.providerCard}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                        alt={provider.provider_name}
                        className={styles.providerLogo}
                      />
                      <span className={styles.providerName}>
                        {provider.provider_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <a
              href={countryData.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.watchLink}
            >
              View on TMDB →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
