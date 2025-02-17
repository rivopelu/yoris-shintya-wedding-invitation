import { Container } from '@mui/material';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { useEffect, useState } from 'react';
import { ASSETS } from '../assets/assets.ts';

export function DatePage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date('2024-04-19T14:00:00') - +new Date();
    let timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function timeComponent(value: number, label: string, delay: number) {
    return (
      <div
        data-aos-delay={delay}
        data-aos-duration="1000"
        data-aos="fade-up"
        className={'flex flex-col items-center justify-center text-center'}
      >
        <div className={'text-2xl'}>{value}</div>
        <div>{label}</div>
      </div>
    );
  }

  return (
    <div
      className={' bg-top  '}
      style={{
        backgroundImage: `url(${ASSETS.COVER_DATE})`,
      }}
    >
      <div className={'text-white py-14 bg-black/70 w-full'}>
        <Container>
          <div className={' flex flex-col items-center justify-between gap-5'}>
            <h1 data-aos-delay="0" data-aos-duration="1000" data-aos="fade-up" className={'text-2xl font-bold font-nunito'}>
              Event Will Be Organized
            </h1>
            <div className={'w-full grid gap-4 py-10 border-t border-b border-b-slate-300/20 border-t-slate-300/20'}>
              <div className={'grid grid-cols-4 gap-3'}>
                {timeComponent(timeLeft.days, 'Days', 200)}
                {timeComponent(timeLeft.hours, 'Hours', 400)}
                {timeComponent(timeLeft.minutes, 'Minutes', 600)}
                {timeComponent(timeLeft.seconds, 'Seconds', 800)}
              </div>
            </div>
            <div className={'font-nunito text-center w-full    mb-3'} data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up">
              Friday, 19th April 2024
            </div>
            <div>
              <div data-aos-delay="100" data-aos-duration="1000" data-aos="fade-up">
                <AddToCalendarButton
                  name="Yoris and Shintya's wedding day"
                  options={['Apple', 'Google']}
                  location="Bitung City"
                  startDate="2024-04-19"
                  endDate="2024-04-19"
                  startTime="14:00"
                  endTime="20:00"
                  timeZone="Asia/Makassar"
                ></AddToCalendarButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
