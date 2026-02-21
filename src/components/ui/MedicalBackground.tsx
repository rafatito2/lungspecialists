type IconKey = 'lungs' | 'cross' | 'moon' | 'ecg' | 'stethoscope';

interface IconDef {
  viewBox: string;
  paths: string[];
  strokeWidth: number;
  mode?: 'stroke' | 'fill';
}

const ICONS: Record<IconKey, IconDef> = {
  lungs: {
    viewBox: '0 0 32 32',
    paths: [
      'M14,18c0,1.2,0,0.5,0,2c0,6.8-2,7.3-5,7.3c-2.8,0-6,5.8-6-3.8S8.2,6,11.3,6c0.8,0,1.5,0.3,1.9,1.9',
      'M18,18c0,1.2,0,0.5,0,2c0,6.8,2,7.3,5,7.3c2.8,0,6,5.8,6-3.8S23.8,6,20.8,6c-0.8,0-1.5,0.3-1.9,1.9',
      'M16,2v6.6c0,1.5-0.7,3-1.9,4L10,16',
      'M16,8.6c0,1.5,0.7,3,1.9,4L22,16',
    ],
    strokeWidth: 2,
  },
  cross: {
    viewBox: '0 0 24 24',
    paths: ['M12 5v14', 'M5 12h14'],
    strokeWidth: 2,
  },
  moon: {
    viewBox: '0 0 24 24',
    paths: [
      'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    ],
    strokeWidth: 1.5,
  },
  ecg: {
    viewBox: '0 0 24 24',
    paths: ['M2 12h3.5l2-6 3 12 2-6 2.5 0H22'],
    strokeWidth: 1.5,
  },
  stethoscope: {
    viewBox: '0 0 256 256',
    paths: [
      'M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z',
    ],
    strokeWidth: 0,
    mode: 'fill',
  },
};

interface Placement {
  icon: IconKey;
  top: string;
  left: string;
  size: number;
  rotate: number;
  scale: number;
}

const PLACEMENTS: Placement[] = [
  { icon: 'lungs',       top: '4%',  left: '3%',  size: 38, rotate: -12, scale: 1.0  },
  { icon: 'cross',       top: '7%',  left: '20%', size: 22, rotate:   8, scale: 0.7  },
  { icon: 'moon',        top: '3%',  left: '44%', size: 30, rotate:  -6, scale: 0.85 },
  { icon: 'ecg',         top: '8%',  left: '67%', size: 34, rotate:  12, scale: 0.75 },
  { icon: 'stethoscope', top: '5%',  left: '86%', size: 32, rotate: -18, scale: 0.9  },
  { icon: 'cross',       top: '23%', left: '6%',  size: 24, rotate:  10, scale: 0.8  },
  { icon: 'ecg',         top: '27%', left: '31%', size: 30, rotate:  -9, scale: 0.65 },
  { icon: 'lungs',       top: '22%', left: '73%', size: 34, rotate:  15, scale: 0.95 },
  { icon: 'stethoscope', top: '30%', left: '91%', size: 30, rotate:  -4, scale: 0.7  },
  { icon: 'moon',        top: '44%', left: '14%', size: 28, rotate:  16, scale: 1.0  },
  { icon: 'ecg',         top: '47%', left: '51%', size: 28, rotate: -13, scale: 0.75 },
  { icon: 'cross',       top: '49%', left: '79%', size: 20, rotate:   6, scale: 0.85 },
  { icon: 'lungs',       top: '61%', left: '4%',  size: 36, rotate:  -7, scale: 0.8  },
  { icon: 'stethoscope', top: '64%', left: '36%', size: 30, rotate:  11, scale: 1.0  },
  { icon: 'moon',        top: '62%', left: '61%', size: 26, rotate: -16, scale: 0.7  },
  { icon: 'cross',       top: '71%', left: '87%', size: 22, rotate:   4, scale: 0.9  },
  { icon: 'ecg',         top: '77%', left: '11%', size: 28, rotate:  13, scale: 0.75 },
  { icon: 'lungs',       top: '81%', left: '46%', size: 36, rotate:  -4, scale: 0.85 },
  { icon: 'stethoscope', top: '84%', left: '71%', size: 32, rotate:   9, scale: 1.0  },
  { icon: 'moon',        top: '90%', left: '26%', size: 24, rotate: -11, scale: 0.7  },
];

interface Props {
  variant?: 'light' | 'dark';
}

export default function MedicalBackground({ variant = 'light' }: Props) {
  const baseOpacity = variant === 'dark' ? 0.14 : 0.07;
  const color = variant === 'dark' ? 'white' : '#29C4BF';

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {PLACEMENTS.map((p, i) => {
        const icon = ICONS[p.icon];
        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: p.top,
              left: p.left,
              opacity: baseOpacity * p.scale,
              transform: `rotate(${p.rotate}deg)`,
            }}
          >
            <svg
              width={p.size}
              height={p.size}
              viewBox={icon.viewBox}
              fill={icon.mode === 'fill' ? color : 'none'}
              stroke={icon.mode === 'fill' ? 'none' : color}
              strokeWidth={icon.strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icon.paths.map((d, j) => (
                <path key={j} d={d} />
              ))}
            </svg>
          </div>
        );
      })}
    </div>
  );
}
