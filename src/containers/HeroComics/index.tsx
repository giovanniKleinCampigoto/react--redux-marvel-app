import React, { useState, useCallback, useEffect } from 'react';

import {
  ComicsList,
  ComicsListItem,
  SectionTitle,
  ComicThumbnail,
  ComicTitle,
} from './styles';

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

  const getAllComics = useCallback(async () => {
    const promises = comics.map(comic => api.get(comic.resourceURI));

    const response = await Promise.all(promises);

    const heroTempComics = response.map(comic => comic.data.data.results[0]);
    setHeroComics(heroTempComics);
  }, []);

  useEffect(() => {
    getAllComics();
  }, []);

  if (!heroComics.length) return <span>Loading</span>;

  return (
    <>
      <SectionTitle>Comics</SectionTitle>
      <ComicsList>
        {heroComics.map((comic: any) => {
          return (
            <ComicsListItem key={comic.id}>
              <a href={comic.urls[0].url} rel="noreferrer" target="_blank">
                <ComicThumbnail
                  src={`${comic?.thumbnail.path}/portrait_xlarge.${comic?.thumbnail.extension}`}
                />
                <ComicTitle>{comic.title}</ComicTitle>
              </a>
            </ComicsListItem>
          );
        })}
      </ComicsList>
    </>
  );
};

export default HeroComics;
