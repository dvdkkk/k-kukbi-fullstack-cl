import type React from 'react';

/**
 * Navigation & Conversion links helper
 */

export const CONSULTATION_URL = 'https://naver.me/5Ea2LNnT';

/**
 * Opens the consultation application form in a new window/tab
 */
export const openConsultationPage = () => {
  if (typeof window !== 'undefined') {
    window.open(CONSULTATION_URL, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Detects whether the current device is mobile or desktop/PC
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  const userAgentCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const touchAndWidthCheck =
    ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
    window.matchMedia('(max-width: 1024px)').matches;
  return userAgentCheck || touchAndWidthCheck;
};

/**
 * Handles phone number click according to platform:
 * - PC / Desktop: opens Naver form consultation URL in a new window
 * - Mobile: dials phone number directly via tel: protocol
 * - If phone number is empty/absent: does nothing
 */
export const handlePhoneClick = (
  e: React.MouseEvent<HTMLElement>,
  phoneNumber: string = '1661-9420'
) => {
  if (!phoneNumber || !phoneNumber.trim()) {
    return;
  }
  e.preventDefault();
  if (isMobileDevice()) {
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    window.location.href = `tel:${cleanNumber || phoneNumber}`;
  } else {
    openConsultationPage();
  }
};
