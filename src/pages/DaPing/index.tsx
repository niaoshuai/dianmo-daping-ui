import { Box } from '@alifd/next';
import * as React from 'react';
import DianLiang from './components/DianLiang';
import styles from './index.module.scss';

const DaPing = () => {
  return (
    <Box direction="row" align="center">
      <Box className={styles.box180}>
        <DianLiang />
      </Box>
      <Box className={styles.box180} />
      <Box className={styles.box180} />
      <Box className={styles.box180} />
    </Box>
  );
};

export default DaPing;
