import React from 'react';
import { render, within } from '@testing-library/react-native';

import { RepositoryListContainer } from '../src/components/RepositoryList';

describe('RepositoryList', () => {
  it('renders repository information from the repositories query', () => {
    const repositories = {
      totalCount: 2,
      pageInfo: {
        totalCount: 2,
        hasNextPage: false,
        endCursor: 'cursor2',
      },
      edges: [
        {
          node: {
            id: 'id1',
            fullName: 'jaredpalmer/formik',
            description: 'Build forms in React, without the tears',
            language: 'TypeScript',
            forksCount: 1858,
            stargazersCount: 26579,
            ratingAverage: 87,
            reviewCount: 5,
            ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/4060187?v=4',
          },
          cursor: 'cursor1',
        },
        {
          node: {
            id: 'id2',
            fullName: 'async-library/react-async',
            description: 'Flexible promise-based React data loader',
            language: 'JavaScript',
            forksCount: 92,
            stargazersCount: 2113,
            ratingAverage: 72,
            reviewCount: 3,
            ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/46244922?v=4',
          },
          cursor: 'cursor2',
        },
      ],
    };

    const { getAllByTestId } = render(
      <RepositoryListContainer
        repositories={repositories}
        navigateToRepository={() => {}}
      />
    );

    const repositoryItems = getAllByTestId('repositoryItem');
    const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

    within(firstRepositoryItem).getByText('jaredpalmer/formik');
    within(secondRepositoryItem).getByText('async-library/react-async');
  });
});
