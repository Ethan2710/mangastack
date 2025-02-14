import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Alert, AlertTitle, Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Loader from './Loader';
import ChapterList from './ChapterList';
import { useMangaData, useChapters } from '../hooks/mangadex-api';
import { htmlDecode, generateMetaKeywordsTitle } from '../utils/utils';
import languageOptions from '../assets/languageOptions';
import React from 'react';
import { useHistory } from 'react-router-dom';
const MangaPage = () => {
  const history = useHistory();
  const { id } = useParams();


  const handleClick = () => {
    const url = `https://mangaplus.shueisha.co.jp/titles/${id}`;
    window.open(url)
  };

  return (
    <div>
      <h1>Manga Page</h1>
      <button onClick={handleClick}>Voir le manga</button>
    </div>
  );
};

export default MangaPage;
