import React, { useState, useCallback, useEffect } from 'react';

import {
  ComicsList,
  ComicsListItem,
  SectionTitle,
  ComicThumbnail,
  ComicTitle,
} from './styles';

import LoadingResults from '../../components/LoadingResults';

import api from '../../services/api';

interface HeroComicsProps {
  comics: Comic[];
}

interface Comic {
  name: string;
  resourceURI: string;
}

const HeroComics: React.FC<HeroComicsProps> = ({ comics }) => {
  const [heroComics, setHeroComics] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getAllComics = useCallback(async () => {
    const promises = comics.map(comic => api.get(comic.resourceURI));

    setLoading(true);

    const response = await Promise.all(promises);

    const heroTempComics = response.map(comic => comic.data.data.results[0]);
    setHeroComics(heroTempComics);
    setLoading(false);
  }, [comics]);

  useEffect(() => {
    getAllComics();
  }, [getAllComics]);

  return (
    <>
      <SectionTitle>Comics</SectionTitle>
      {loading && <LoadingResults itemsNumber={4} size="small" />}
      {!!heroComics.length && (
        <ComicsList>
          {heroComics.map((comic: any) => {
            return (
              <ComicsListItem
                key={comic.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <a
                  href={comic.urls[0].url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ComicThumbnail
                    src={`${comic?.thumbnail.path}/portrait_xlarge.${comic?.thumbnail.extension}`}
                  />
                  <ComicTitle>{comic.title}</ComicTitle>
                </a>
              </ComicsListItem>
            );
          })}
        </ComicsList>
      )}
    </>
  );
};

export default HeroComics;
