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
        text: '实时电量',
        textStyle: {
          color: 'white',
        },
      },
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, '#FF6E76'],
                [0.5, '#FDDD60'],
                [0.75, '#58D9F9'],
                [1, '#7CFFB2'],
              ],
            },
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2,
            },
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 5,
            },
          },
          axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: -60,
            formatter(value) {
              if (value === 0.875) {
                return 'A';
              } else if (value === 0.625) {
                return 'B';
              } else if (value === 0.375) {
                return 'C';
              } else if (value === 0.125) {
                return 'D';
              }
              return '';
            },
          },
          title: {
            offsetCenter: [0, '-20%'],
            fontSize: 30,
          },
          detail: {
            fontSize: 50,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter(value) {
              return `${Math.round(value * 100)}%`;
            },
            color: 'auto',
          },
          data: [
            {
              value: 0,
            },
          ],
        },
      ],
    });

    setInterval(() => {
      request('api/dianliang').then((data) => {
        myChart.setOption<echarts.EChartsOption>({
          series: [
            {
              data: [
                {
                  value: data.data.dianliang.toFixed(2),
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
