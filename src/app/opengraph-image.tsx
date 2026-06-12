import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Brand social card — mirrors the hero: blue "SELL." / amber "SHIP." on near-black.
export const alt = 'Emberonix — Sites That Sell. Agents That Ship.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const [bebas, geist] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/_og/BebasNeue-Regular.ttf')),
    readFile(join(process.cwd(), 'src/app/_og/Geist-Medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          padding: '68px 76px',
          fontFamily: 'Geist',
        }}
      >
        {/* Ember glow, bottom-right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'radial-gradient(60% 80% at 82% 115%, rgba(249,115,22,0.30) 0%, transparent 60%)',
          }}
        />

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <span
            style={{
              fontFamily: 'Geist',
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: '0.10em',
              color: '#FAFAF8',
            }}
          >
            EMBERONIX
          </span>
          <span style={{ fontSize: 20, color: '#F97316', marginLeft: 10 }}>®</span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Bebas',
              fontSize: 132,
              lineHeight: 1,
              color: '#FAFAF8',
            }}
          >
            <span style={{ marginRight: '0.28em' }}>SITES THAT</span>
            <span style={{ color: '#3B82F6' }}>SELL.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Bebas',
              fontSize: 132,
              lineHeight: 1,
              color: '#FAFAF8',
            }}
          >
            <span style={{ marginRight: '0.28em' }}>AGENTS THAT</span>
            <span style={{ color: '#F97316' }}>SHIP.</span>
          </div>
        </div>

        {/* Subline */}
        <div
          style={{
            display: 'flex',
            zIndex: 1,
            fontFamily: 'Geist',
            fontSize: 24,
            letterSpacing: '0.04em',
            color: '#A1A1A1',
          }}
        >
          DESIGN-FORWARD WEBSITES · PRODUCTION AGENTIC AI · ONE ENGINEER
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Bebas', data: bebas, weight: 400, style: 'normal' },
        { name: 'Geist', data: geist, weight: 500, style: 'normal' },
      ],
    },
  );
}
