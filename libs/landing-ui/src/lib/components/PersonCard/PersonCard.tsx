import { forwardRef, useMemo } from 'react';

import { Founder } from './Founder';
import { Person } from './Person';
import type { PersonCardProps } from './PersonCard.props';

import { Card, CardAppearance } from '../Card';

export const PersonCard = forwardRef<HTMLDivElement, PersonCardProps>(
  (
    {
      name,
      tag,
      imageSrc,
      appearance = 'founder',
      children,
      width = appearance === 'founder' ? '454px' : '308px',
      height = appearance === 'founder' ? '320px' : '189px',
      ...props
    },
    ref,
  ) => {
    const cardAppearance = useMemo<CardAppearance>(() => {
      if (appearance === 'founder') {
        return 'ghost';
      } else if (appearance === 'person') {
        return 'purple';
      } else {
        return 'purple';
      }
    }, [appearance]);

    const cardBorderRadius = useMemo<string>(() => {
      if (appearance === 'founder') {
        return '65px !important';
      } else if (appearance === 'person') {
        return '33px !important';
      } else {
        return '33px !important';
      }
    }, [appearance]);

    return (
      <Card
        appearance={cardAppearance}
        borderRadius={cardBorderRadius}
        width={width}
        height={height}
        ref={ref}
        {...props}
      >
        {appearance === 'founder' ? (
          <Founder name={name} tag={tag} imageSrc={imageSrc}>
            {children}
          </Founder>
        ) : appearance === 'person' ? (
          <Person name={name} tag={tag} imageSrc={imageSrc}>
            {children}
          </Person>
        ) : null}
      </Card>
    );
  },
);
