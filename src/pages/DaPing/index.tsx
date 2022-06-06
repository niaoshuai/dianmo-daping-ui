import { Box } from '@alifd/next';
import * as React from 'react';
import DianLiang from './components/DianLiang';
import DianLiangQushi from './components/DianLiangQushi';
import Speed from './components/Speed';
import styles from './index.module.scss';

const DaPing = () => {
  return (
    <div>
      <div>
        <Box align="center" >
          <Box justify="center">
            <h1 className={styles.colorWhite}>电摩实时监控大屏展示-【我的】</h1>
          </Box>
        </Box>
      </div>
      <div>
        <Box direction="row" align="center">
          <Box >
            <DianLiang />
          </Box>
          <Box >
            <DianLiangQushi />
          </Box>
          <Box >
            <Speed />
          </Box>
        </Box>
      </div>

      <div>
        <Box direction="row" align="center">
          DIAOBAO
        </Box>
      </div>
    </div>
  );
};

export default DaPing;
