import styled from 'styled-components';

export const ComicsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ComicThumbnail = styled.img``;

export const ComicTitle = styled.p``;

export const ComicsListItem = styled.li`
  padding: 8px 0;
  margin: 0 16px;
  color: white;
  font-size: 16px;
  max-width: 150px;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const SectionTitle = styled.h1`
  color: white;
  font-size: 34px;
`;
