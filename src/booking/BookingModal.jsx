import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  X,
  ChevronLeft,
  Check,
  CheckCircle2,
  Dog,
  MapPin,
  CalendarDays,
  Clock,
  User,
  Sparkles,
  PartyPopper
} from 'lucide-react';
import { useBooking } from './BookingContext';
import { DotSeparator, PawSeparator } from '../components/RatingIcons';
import {
  DOG_SIZES,
  PACKAGES,
  ADDONS,
  TIME_SLOTS,
  SIZE_DURATION_MIN,
  DEMO_ADDRESS,
  SERVICE_RADIUS,
  formatMinutes,
  resolvePreset
} from './bookingData';

const STEP_LABELS = ['Your dog', 'Your address', 'Pick a time', 'Details', "You're set"];

function toISODate(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function prettyDate(iso) {
  if (!iso) return '';
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
}

function parseSlot(slot) {
  const [time, mer] = slot.split(' ');
  const [h, m] = time.split(':').map(Number);
  return { h: h % 12 + (mer === 'PM' ? 12 : 0), m };
}

function googleCalendarUrl(booking, pkg, addonsTotal, durationMin) {
  const start = new Date(`${booking.date}T00:00:00`);
  const { h, m } = parseSlot(booking.timeSlot);
  start.setHours(h, m, 0, 0);
  const end = new Date(start.getTime() + durationMin * 60000);
  const pad = (n) => String(n).padStart(2, '0');
  const stamp = (d) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  const details = [
    `Dog: ${booking.dogName} (${booking.breed})`,
    `Package: ${pkg.name}`,
    ...(booking.addons.length ? [`Add-ons: ${booking.addons.join(', ')}`] : []),
    `Estimated total: £${addonsTotal}`
  ].join('\n');
  const params = {
    action: 'TEMPLATE',
    text: `Bubbles grooming — ${booking.dogName}`,
    details,
    location: `${booking.address}, Manchester`,
    dates: `${stamp(start)}/${stamp(end)}`
  };
  return `https://calendar.google.com/calendar/render?${new URLSearchParams(params).toString()}`;
}

export function BookingModal() {
  const { open, preset, closeBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    sizeId: '',
    packageId: '',
    addons: [],
    address: DEMO_ADDRESS,
    date: '',
    timeSlot: '',
    ownerName: '',
    email: '',
    phone: '',
    dogName: '',
    breed: ''
  });

  const pkg = PACKAGES.find((p) => p.id === booking.packageId) || PACKAGES[0];
  const selectedSize = booking.sizeId;
  const addonsTotal = booking.addons.reduce((sum, id) => {
    const a = ADDONS.find((x) => x.id === id);
    return sum + (a ? a.price : 0);
  }, 0);
  const packagePrice = selectedSize ? pkg.prices[selectedSize] : 0;
  const durationMin = (pkg.baseMinutes + (SIZE_DURATION_MIN[selectedSize] || 0)) + booking.addons.reduce((s, id) => {
    const a = ADDONS.find((x) => x.id === id);
    return s + (a ? a.minutes : 0);
  }, 0);
  const total = packagePrice + addonsTotal;

  const postcode = booking.address.trim().split(/\s+/).pop() || '';
  const inRadius = SERVICE_RADIUS.test(postcode);

  /* ---- open/close housekeeping: seed from preset, lock scroll, esc to close ---- */
  useEffect(() => {
    if (!open) return;
    const p = preset ? resolvePreset(preset) : null;
    setStep(1);
    setBooking((prev) => ({
      ...prev,
      sizeId: p?.sizeId || '',
      packageId: p?.packageId || prev.packageId,
      addons: [],
      date: '',
      timeSlot: ''
    }));
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') closeBooking();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
    // re-seed only when the modal opens (or the preset changes)
  }, [open, preset, closeBooking]);

  const focusRef = useRef(null);
  useEffect(() => {
    if (open && focusRef.current) focusRef.current.focus();
  }, [open]);

  /* ---- mini calendar: current + next month, weekdays Mon–Sat ---- */
  const months = useMemo(() => {
    const now = new Date();
    return [new Date(now.getFullYear(), now.getMonth(), 1), new Date(now.getFullYear(), now.getMonth() + 1, 1)];
  }, []);

  const canContinue = {
    1: Boolean(booking.sizeId && booking.packageId),
    2: booking.address.trim().length >= 3,
    3: Boolean(booking.date && booking.timeSlot),
    4:
      Boolean(booking.ownerName.trim() &&
        booking.email.trim() &&
        booking.phone.trim() &&
        booking.dogName.trim() &&
        booking.breed.trim())
  };

  if (!open) return null;

  const set = (patch) => setBooking((prev) => ({ ...prev, ...patch }));

  return (
    <div
      className="booking-modal-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeBooking();
      }}
    >
      <div
        ref={focusRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="booking-modal"
      >
        {/* Header */}
        <div className="bm-header">
          <div>
            <p className="bm-eyebrow">
              <span>Bubbles</span>
              <PawSeparator size={12} />
              <span>Doorstep Grooming</span>
            </p>
            <h2 id="booking-modal-title">
              {step === 5 ? "Woof! You're booked in" : `Step ${step} of 4 — ${STEP_LABELS[step - 1]}`}
            </h2>
          </div>
          <button className="bm-close" onClick={closeBooking} aria-label="Close booking modal">
            <X size={20} />
          </button>
        </div>

        {/* Stepper */}
        <ol className="bm-stepper" aria-label="Booking progress">
          {STEP_LABELS.slice(0, 4).map((label, i) => {
            const n = i + 1;
            const state = step > n || step === 5 ? 'done' : step === n ? 'active' : 'todo';
            return (
              <li key={label} className={`bm-step ${state}`}>
                <span className="bm-step-dot">{state === 'done' ? <Check size={13} /> : n}</span>
                <span className="bm-step-label">{label}</span>
              </li>
            );
          })}
        </ol>

        {/* Body */}
        <div className="bm-body">
          {/* ---------- STEP 1: dog details & service ---------- */}
          {step === 1 && (
            <div>
              <p className="bm-lead">Let's get to know who we're pampering. Every size is welcome — even the very big ones.</p>

              <fieldset className="bm-fieldset">
                <legend className="bm-field-label">
                  <Dog size={16} /> How big is your dog?
                </legend>
                <div className="bm-choice-grid">
                  {DOG_SIZES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`bm-choice ${booking.sizeId === s.id ? 'is-selected' : ''}`}
                      onClick={() => set({ sizeId: s.id })}
                      aria-pressed={booking.sizeId === s.id}
                    >
                      <span className="bm-choice-title">{s.label}</span>
                      <span className="bm-choice-hint">{s.hint}</span>
                      {booking.sizeId === s.id && <Check size={15} className="bm-choice-tick" />}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="bm-fieldset">
                <legend className="bm-field-label">
                  <Sparkles size={16} /> Pick a package
                </legend>
                <div className="bm-package-list">
                  {PACKAGES.map((p) => (
                    <label
                      key={p.id}
                      className={`bm-package ${booking.packageId === p.id ? 'is-selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="package"
                        className="sr-only"
                        checked={booking.packageId === p.id}
                        onChange={() => set({ packageId: p.id })}
                      />
                      <span className="bm-package-text">
                        <strong>{p.name}</strong>
                        <small>{p.description}</small>
                      </span>
                      <span className="bm-package-price">
                        {booking.sizeId ? `£${p.prices[booking.sizeId]}` : 'From £30'}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="bm-fieldset">
                <legend className="bm-field-label">
                  <CheckCircle2 size={16} /> Add-on extras <small>(optional — little luxuries)</small>
                </legend>
                <div className="bm-addon-list">
                  {ADDONS.map((a) => {
                    const checked = booking.addons.includes(a.id);
                    return (
                      <label key={a.id} className={`bm-addon ${checked ? 'is-checked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() =>
                            set({
                              addons: checked
                                ? booking.addons.filter((id) => id !== a.id)
                                : [...booking.addons, a.id]
                            })
                          }
                        />
                        <span className="bm-addon-text">
                          <strong>{a.name}</strong>
                          <small>{a.blurb}</small>
                        </span>
                        <span className="bm-addon-price">+£{a.price}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="bm-nav">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canContinue[1]}
                  onClick={() => setStep(2)}
                >
                  <span>Continue to your address</span>
                </button>
                {!canContinue[1] && (
                  <p className="bm-hint">Pick a size and a package to continue — it takes ten seconds.</p>
                )}
              </div>
            </div>
          )}

          {/* ---------- STEP 2: location & radius ---------- */}
          {step === 2 && (
            <div>
              <p className="bm-lead">
                Where should the van pull up? Drop your postcode or street address and we'll do a quick hop check.
              </p>

              <div className="bm-fieldset">
                <label className="bm-field-label" htmlFor="bm-address">
                  <MapPin size={16} /> Your address
                </label>
                <input
                  id="bm-address"
                  className="form-input"
                  value={booking.address}
                  onChange={(e) => set({ address: e.target.value })}
                  placeholder="Street, town, postcode — e.g. 123 Wilmslow Rd, Manchester, M14 5TP"
                  autoComplete="street-address"
                />

                <div aria-live="polite">
                  {inRadius ? (
                    <div className="bm-radius-badge bm-radius-ok">
                      <CheckCircle2 size={17} />
                      <span>Great news! We service your area in Manchester</span>
                    </div>
                  ) : postcode.length > 1 ? (
                    <div className="bm-radius-badge bm-radius-warn">
                      <MapPin size={17} />
                      <span>
                        Hmm — {postcode} is just outside our regular route. Message us on WhatsApp and
                        we'll happily find a time that works.
                      </span>
                    </div>
                  ) : (
                    <div className="bm-radius-badge bm-radius-warn">
                      <MapPin size={17} />
                      <span>We cover M1–M21, SK1–SK8 and WA1–WA15. Add a postcode to check yours.</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bm-nav bm-nav-split">
                <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                  <ChevronLeft size={16} />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canContinue[2]}
                  onClick={() => setStep(3)}
                >
                  <span>Continue to dates</span>
                </button>
              </div>
            </div>
          )}

          {/* ---------- STEP 3: date & time ---------- */}
          {step === 3 && (
            <div>
              <p className="bm-lead">Pick a day that suits you (Sundays off — even the van needs rest) and a time slot.</p>

              <div className="bm-cal-time">
                <div className="bm-calendars">
                  {months.map((month) => {
                    const year = month.getFullYear();
                    const mIndex = month.getMonth();
                    const firstDay = new Date(year, mIndex, 1);
                    const daysInMonth = new Date(year, mIndex + 1, 0).getDate();
                    const offset = (firstDay.getDay() + 6) % 7; // Monday-first
                    const todayISO = toISODate(new Date());
                    const cells = [];
                    for (let i = 0; i < offset; i++) cells.push(null);
                    for (let d = 1; d <= daysInMonth; d++) {
                      cells.push(d);
                    }
                    return (
                      <div key={`${year}-${mIndex}`} className="bm-calendar" aria-label={month.toDateString()}>
                        <div className="bm-cal-title">
                          {month.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </div>
                        <div className="bm-cal-week" aria-hidden="true">
                          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((w) => (
                            <span key={w}>{w}</span>
                          ))}
                        </div>
                        <div className="bm-cal-grid" role="grid">
                          {cells.map((d, i) => {
                            if (d === null) return <span key={`e-${i}`} aria-hidden="true" />;
                            const iso = toISODate(new Date(year, mIndex, d));
                            const isPast = iso < todayISO;
                            const isSunday = new Date(year, mIndex, d).getDay() === 0;
                            const disabled = isPast || isSunday;
                            const selected = booking.date === iso;
                            return (
                              <button
                                key={iso}
                                type="button"
                                role="gridcell"
                                className={`bm-cal-day ${selected ? 'is-selected' : ''} ${disabled ? 'is-disabled' : ''}`}
                                disabled={disabled}
                                onClick={() => set({ date: iso, timeSlot: '' })}
                                aria-label={prettyDate(iso)}
                                aria-pressed={selected}
                              >
                                {d}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bm-timeslots">
                  <p className="bm-field-label">
                    <Clock size={16} />
                    {booking.date ? `Times for ${prettyDate(booking.date)}` : 'Pick a day to see slots'}
                  </p>
                  {booking.date ? (
                    <div className="bm-slot-groups">
                      {TIME_SLOTS.map((group) => (
                        <div key={group.group}>
                          <small className="bm-slot-group">{group.group}</small>
                          <div className="bm-slot-row">
                            {group.slots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                className={`bm-slot ${booking.timeSlot === slot ? 'is-selected' : ''}`}
                                onClick={() => set({ timeSlot: slot })}
                                aria-pressed={booking.timeSlot === slot}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="bm-hint">Tap a date on the calendar and your morning and afternoon slots will appear here.</p>
                  )}
                </div>
              </div>

              <div className="bm-nav bm-nav-split">
                <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                  <ChevronLeft size={16} />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canContinue[3]}
                  onClick={() => setStep(4)}
                >
                  <span>Continue to details</span>
                </button>
              </div>
            </div>
          )}

          {/* ---------- STEP 4: contact info & summary ---------- */}
          {step === 4 && (
            <div className="bm-detail-layout">
              <div>
                <p className="bm-lead">Almost there — just the essentials so Sarah can send a friendly confirmation.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bm-owner">
                      <User size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> Your name *
                    </label>
                    <input
                      id="bm-owner"
                      className="form-input"
                      placeholder="e.g. Emma Thompson"
                      value={booking.ownerName}
                      onChange={(e) => set({ ownerName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="bm-dog">
                      <Dog size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> Dog's name *
                    </label>
                    <input
                      id="bm-dog"
                      className="form-input"
                      placeholder="e.g. Biscuit"
                      value={booking.dogName}
                      onChange={(e) => set({ dogName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bm-email">
                      Email *
                    </label>
                    <input
                      id="bm-email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={booking.email}
                      onChange={(e) => set({ email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="bm-phone">
                      Phone *
                    </label>
                    <input
                      id="bm-phone"
                      type="tel"
                      className="form-input"
                      placeholder="07123 456789"
                      value={booking.phone}
                      onChange={(e) => set({ phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="bm-breed">
                    <Sparkles size={13} style={{ display: 'inline', verticalAlign: '-2px' }} /> Breed *
                  </label>
                  <input
                    id="bm-breed"
                    className="form-input"
                    placeholder="e.g. Cockapoo, Labrador, Cavoodle"
                    value={booking.breed}
                    onChange={(e) => set({ breed: e.target.value })}
                  />
                </div>
              </div>

              {/* Live price breakdown */}
              <aside className="bm-summary" aria-label="Booking summary">
                <h3>
                  <CalendarDays size={15} /> Your visit
                </h3>
                <div className="bm-summary-row">
                  <span className="bm-inline-sep">
                    <span>{pkg.name}</span>
                    <DotSeparator size={4} />
                    <span>{DOG_SIZES.find((s) => s.id === selectedSize)?.label || '—'}</span>
                  </span>
                  <strong>£{packagePrice}</strong>
                </div>
                {booking.addons.length === 0 ? (
                  <div className="bm-summary-row bm-summary-muted">
                    <span>No add-ons</span>
                    <strong>£0</strong>
                  </div>
                ) : (
                  booking.addons.map((id) => {
                    const a = ADDONS.find((x) => x.id === id);
                    return a ? (
                      <div key={id} className="bm-summary-row">
                        <span>{a.name}</span>
                        <strong>+£{a.price}</strong>
                      </div>
                    ) : null;
                  })
                )}
                <div className="bm-summary-row">
                  <span>Estimated duration</span>
                  <strong>{formatMinutes(durationMin)}</strong>
                </div>
                <div className="bm-summary-row bm-summary-total">
                  <span>Total estimated</span>
                  <strong>£{total}</strong>
                </div>
                <div className="bm-summary-whens">
                  {booking.date && (
                    <span>
                      {prettyDate(booking.date)} at {booking.timeSlot || 'time TBC'}
                    </span>
                  )}
                  {booking.address && <span>{booking.address}</span>}
                </div>
                <p className="bm-summary-note">We'll only charge the confirmed amount on the day. No card needed to book.</p>
              </aside>

              <div className="bm-nav bm-nav-split">
                <button type="button" className="btn btn-secondary" onClick={() => setStep(3)}>
                  <ChevronLeft size={16} />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!canContinue[4]}
                  onClick={() => setStep(5)}
                >
                  <span>Confirm Booking</span>
                </button>
              </div>
            </div>
          )}

          {/* ---------- STEP 5: confirmation ---------- */}
          {step === 5 && (
            <div className="bm-success">
              <div className="bm-success-icon" aria-hidden="true">
                <CheckCircle2 size={44} />
              </div>
              <h3>WOOF! You're all set!</h3>
              <p className="bm-lead">
                We've sent a confirmation email to your inbox ({booking.email}) and will arrive at your address on{' '}
                <strong>{prettyDate(booking.date)} at {booking.timeSlot}</strong>.
              </p>

              <div className="bm-success-card">
                <div className="bm-success-row">
                  <span>Dog</span>
                  <strong>{booking.dogName} ({booking.breed})</strong>
                </div>
                <div className="bm-success-row">
                  <span>Package</span>
                  <strong>{pkg.name} + {booking.addons.length} add-on{booking.addons.length === 1 ? '' : 's'}</strong>
                </div>
                <div className="bm-success-row">
                  <span>When</span>
                  <strong className="bm-inline-sep">
                    <span>{prettyDate(booking.date)}</span>
                    <DotSeparator size={4} />
                    <span>{booking.timeSlot}</span>
                  </strong>
                </div>
                <div className="bm-success-row">
                  <span>Estimated total</span>
                  <strong>£{total}</strong>
                </div>
              </div>

              <div className="bm-success-actions">
                <a
                  className="btn btn-secondary"
                  href={googleCalendarUrl(booking, pkg, addonsTotal, durationMin)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PartyPopper size={16} />
                  <span>Add to Google Calendar</span>
                </a>
                <button type="button" className="btn btn-primary" onClick={closeBooking}>
                  <span>Close</span>
                </button>
              </div>
              <p className="bm-hint" style={{ marginTop: 14 }}>
                Demo booking — no real email is sent, no card is charged. Tail wags guaranteed though.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
