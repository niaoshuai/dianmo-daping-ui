import React, { useRef, MutableRefObject, useEffect } from 'react';
import * as echarts from 'echarts';

import styles from './index.module.scss';
import { request } from 'ice';

const DianLiang = () => {
  const divEl: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(divEl.current);
    myChart.setOption({
      title: {
        text: '实时速度',
        textStyle: {
          color: 'white',
        },
      },
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4,
            },
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20,
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} km/h',
            color: 'auto',
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    });

    setInterval(() => {
      request('api/speed').then((data) => {
        myChart.setOption<echarts.EChartsOption>({
          series: [
            {
              data: [
                {
                  value: data.data.speed.toFixed(2),
                },
              ],
            },
          ],
        });
      });
    }, 2000);
  }, []);

  return (
    <div>
      <div ref={divEl} className={styles.box480} />
    </div>
  );
};

export default DianLiang;
