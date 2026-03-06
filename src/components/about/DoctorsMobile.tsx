'use client';

import { useState } from 'react';
import Image from 'next/image';
import { doctors } from '@/data/doctors';

export default function DoctorsMobile() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {doctors.map((doctor) => {
        const isOpen = openId === doctor.id;

        return (
          <div
            key={doctor.id}
            className="rounded-2xl overflow-hidden bg-white"
            style={{
              boxShadow: isOpen
                ? '0 8px 32px -6px rgba(43, 86, 197, 0.16)'
                : '0 2px 12px -4px rgba(43, 86, 197, 0.08)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Gradient top bar */}
            <div
              className="h-1.5"
              style={{ background: 'linear-gradient(to right, #2B56C5, #29C4BF)' }}
            />

            {/* Tap target — photo + name + chevron */}
            <button
              type="button"
              className="w-full flex items-center gap-4 px-5 py-4 text-left"
              onClick={() => setOpenId(isOpen ? null : doctor.id)}
              aria-expanded={isOpen}
            >
              {/* Photo */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden"
                style={{
                  boxShadow: isOpen
                    ? '0 0 0 2px white, 0 0 0 4px #29C4BF'
                    : '0 0 0 2px white, 0 0 0 4px #d5e1f7',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={`Photo of ${doctor.name}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #d5e1f7 0%, #eef9f9 100%)',
                    }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="#2B56C5" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Name + role */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-semibold text-[15px] leading-snug"
                  style={{ color: '#122868' }}
                >
                  {doctor.name}, {doctor.title}
                </p>
                <p className="text-xs font-medium mt-0.5" style={{ color: '#29C4BF' }}>
                  {doctor.role}
                </p>
              </div>

              {/* Chevron */}
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: isOpen ? '#eef9f9' : '#eef2fb',
                  transition: 'background 0.3s ease',
                }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke={isOpen ? '#29C4BF' : '#2B56C5'}
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.35s ease',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Expandable body */}
            <div
              style={{
                maxHeight: isOpen ? '600px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div
                className="px-5 pb-6"
                style={{ borderTop: '1px solid #f0f0f0' }}
              >
                {/* Bio */}
                <p
                  className="text-sm leading-relaxed pt-4 pb-5"
                  style={{ color: '#525252' }}
                >
                  {doctor.bio}
                </p>

                {/* Divider */}
                <div
                  className="h-px w-full rounded-full mb-4"
                  style={{
                    background: 'linear-gradient(to right, #eef2fb, #eef9f9)',
                  }}
                />

                {/* Credentials */}
                <p
                  className="text-[10px] font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#a3a3a3' }}
                >
                  Credentials
                </p>
                <ul className="space-y-2.5">
                  {doctor.credentials.map((credential, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: '#eef9f9' }}
                      >
                        <svg
                          width="10" height="10"
                          fill="none"
                          stroke="#29C4BF"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-sm" style={{ color: '#525252' }}>
                        {credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
