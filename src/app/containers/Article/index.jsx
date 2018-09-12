import React, { Fragment } from 'react';
import { bool, string, shape } from 'prop-types';
import Metadata from '../../components/Metadata';
import Header from '../../components/Header';
import Footer from '../Footer';
import MainContent from '../MainContent';
import articlePropTypes from '../../models/propTypes/article';

const ArticleContainer = ({ loading, error, data }) => {
  if (loading) return 'Loading...';
  if (error) return 'Something went wrong :(';
  if (data) {
    const { amp, data: articleData } = data;

    const { content, metadata, promo } = articleData;
    const { id: aresArticleId } = metadata;

    const id = aresArticleId.split(':').pop();
    const { blocks } = content.model;
    const canonicalLink = `https://www.bbc.com/news/articles/${id}`;

    const metadataProps = {
      amp,
      canonicalLink,
      lang: metadata.passport.language,
      title: promo.headlines.seoHeadline,
    };

    return (
      <Fragment>
        <Header />
        <Metadata {...metadataProps} />
        <MainContent blocks={blocks} />
        <Footer />
      </Fragment>
    );
  }

  return null;
};

ArticleContainer.propTypes = {
  loading: bool,
  error: string,
  data: shape(articlePropTypes),
};

ArticleContainer.defaultProps = {
  loading: false,
  error: null,
  data: null,
};

export default ArticleContainer;
