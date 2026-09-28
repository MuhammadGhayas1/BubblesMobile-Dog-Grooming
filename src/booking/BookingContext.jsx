import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const BookingContext = createContext(null);

/**
 * Global controller for the interactive booking modal.
 *
 * Any trigger (hero "Book Now", a pricing card, the "Check Availability"
 * button, a services page card, the sticky mobile CTA) calls
 * `openBooking(preset?)`. The preset can pre-select a dog size and a service
 * package so the modal opens on the right place.
 */
export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState(null);

  const openBooking = useCallback((presetOverride = null) => {
    if (presetOverride) setPreset(presetOverride);
    setOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ open, preset, openBooking, closeBooking }),
    [open, preset, openBooking, closeBooking]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error('useBooking must be used inside <BookingProvider>');
  }
  return ctx;
}
