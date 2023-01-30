// Credits: https://www.youtube.com/watch?v=RwlFyS1Rhew

import React from 'react'
import { useEffect, useState } from 'react'
import {
  CountdownContainer,
  Dot,
  DotContainer,
  TimeBox,
  TimeContainer,
  TimeDigit,
  TimeLabel,
  Title,
} from './Countdown.style'
import { CountdownProps } from './interface'

const Countdown: React.FC<CountdownProps> = ({
  id,
  title = '',
  targetDate,
  displayDate = false,
  timeBoxClassName,
  titleClassName,
  timeDigitClassName,
  timeLabelClassName,
}) => {
  const defaultRemainingTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  const startTimer = () => {
    const deadlineDate = targetDate.getTime()

    setInterval(() => {
      const now = new Date().getTime()
      const distance = deadlineDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        })
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

  const dateString = targetDate.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const timeString = targetDate
    .toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })
    .replace('.', ':')

  return (
    <CountdownContainer id={id}>
      {/* Title */}
      <Title className={titleClassName}>{title}</Title>

      {/* Countdown */}
      <TimeContainer>
        <TimeBox className={timeBoxClassName}>
          <TimeDigit className={timeDigitClassName}>
            {remainingTime.days != 0
              ? remainingTime.days.toString().padStart(2, '0')
              : remainingTime.hours.toString().padStart(2, '0')}
          </TimeDigit>

          <TimeLabel className={timeLabelClassName}>
            {remainingTime.days != 0 ? 'Hari' : 'Jam'}
          </TimeLabel>
        </TimeBox>

        <DotContainer>
          <Dot />
          <Dot />
        </DotContainer>

        <TimeBox className={timeBoxClassName}>
          <TimeDigit className={timeDigitClassName}>
            {remainingTime.days != 0
              ? remainingTime.hours.toString().padStart(2, '0')
              : remainingTime.minutes.toString().padStart(2, '0')}
          </TimeDigit>
          <TimeLabel className={timeLabelClassName}>
            {remainingTime.days != 0 ? 'Jam' : 'Menit'}
          </TimeLabel>
        </TimeBox>

        <DotContainer>
          <Dot />
          <Dot />
        </DotContainer>

        <TimeBox className={timeBoxClassName}>
          <TimeDigit className={timeDigitClassName}>
            {remainingTime.days != 0
              ? remainingTime.minutes.toString().padStart(2, '0')
              : remainingTime.seconds.toString().padStart(2, '0')}
          </TimeDigit>
          <TimeLabel className={timeLabelClassName}>
            {remainingTime.days != 0 ? 'Menit' : 'Detik'}
          </TimeLabel>
        </TimeBox>
      </TimeContainer>

      {/* Deadline Date */}
      {displayDate && `${dateString}, ${timeString}`}
    </CountdownContainer>
  )
}

export default Countdown
