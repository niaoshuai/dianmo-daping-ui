import { Box } from '@alifd/next';
import * as React from 'react';
import DianLiang from './components/DianLiang';
import Speed from './components/Speed';
import styles from './index.module.scss';
import DianLiangQuShi from '@/pages/DaPing/components/DianLiangQuShi';
import SpeedQuShi from '@/pages/DaPing/components/SpeedQuShi';
import LocationQuShi from './components/LocationQuShi';
import Location from '@/pages/DaPing/components/Location';

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
        <div>
          实时信息
        </div>
        <Box direction="row" align="center">
          <Box >
            <DianLiang />
          </Box>
          <Box >
            <Speed />
          </Box>
          <Box >
            <Location />
          </Box>
        </Box>
      </div>

      <div>
        <Box direction="row" align="center">
          <Box >
            <DianLiangQuShi />
          </Box>
          <Box >
            <SpeedQuShi />
          </Box>
          <Box >
            <LocationQuShi />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default DaPing;
