import type { CSSProperties } from 'react';

type Props = {
  text: string;
  delayStep?: number;
  baseDelay?: number;
  className?: string;
  style?: CSSProperties;
};

export default function Reveal({ text, delayStep = 0.03, baseDelay = 0, className, style }: Props) {
  const words = text.split(' ');
  let i = 0;
  return (
    <span className={className} style={style}>
      {words.map((word, wi) => {
        const chars = Array.from(word);
        const wordNode = (
          <span key={`w-${wi}`} className="inline-block" style={{ whiteSpace: 'nowrap' }}>
            {chars.map((ch, ci) => {
              const delay = baseDelay + i * delayStep;
              i++;
              return (
                <span key={`c-${wi}-${ci}`} className="reveal-mask">
                  <span style={{ animationDelay: `${delay}s` }}>{ch}</span>
                </span>
              );
            })}
          </span>
        );
        if (wi === words.length - 1) return wordNode;
        const spaceDelay = baseDelay + i * delayStep;
        i++;
        return (
          <span key={`wg-${wi}`}>
            {wordNode}
            <span className="reveal-mask">
              <span style={{ animationDelay: `${spaceDelay}s` }}>{'\u00A0'}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
