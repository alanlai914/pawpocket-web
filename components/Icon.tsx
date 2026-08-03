import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

export function LockIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden={title ? undefined : true} role={title ? "img" : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M15 21v-6a9 9 0 0 1 18 0v6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <rect x="10" y="20" width="28" height="22" rx="7" fill="currentColor" />
      <circle cx="24" cy="31" r="3" fill="#fff8e9" />
      <path d="M24 34v4" stroke="#fff8e9" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SpeakerIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden={title ? undefined : true} role={title ? "img" : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M8 19h8l10-8v26l-10-8H8z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
      <path d="M32 18c3 3 3 9 0 12M37 13c6 6 6 16 0 22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function HandIcon({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden={title ? undefined : true} role={title ? "img" : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M21 8c0-2 1.5-3.5 3.5-3.5S28 6 28 8v13l2-5c.8-1.8 2.5-2.6 4.2-1.9 1.8.8 2.5 2.8 1.8 4.6l-4.2 11.2c-1.4 3.8-5 6.3-9 6.3h-3.7c-3 0-5.8-1.4-7.6-3.8l-5.9-7.8c-1.2-1.6-.9-3.8.7-5 1.5-1.2 3.7-.9 4.9.5l3.8 4.2V12c0-2 1.5-3.5 3.5-3.5S22 10 22 12" fill="#fff8e9" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
