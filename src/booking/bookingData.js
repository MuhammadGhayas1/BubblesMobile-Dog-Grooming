export const DOG_SIZES = [
  { id: "small", label: "Small", hint: "<15 lbs" },
  { id: "medium", label: "Medium", hint: "15-40 lbs" },
  { id: "large", label: "Large", hint: "40-75 lbs" },
  { id: "xl", label: "Extra Large", hint: "75+ lbs" }
];

export const PACKAGES = [
  {
    id: "full-groom",
    name: "Full Groom",
    description: "The complete pamper: warm hydrobath, clip or style, blow-dry, ears, nails and finishing touches.",
    prices: { small: 45, medium: 55, large: 65, xl: 75 },
    baseMinutes: 75
  },
  {
    id: "bath-brush",
    name: "Bath & Brush",
    description: "A warm hydrobath, coat conditioning, a thorough brush-out and a calm blow-dry.",
    prices: { small: 30, medium: 35, large: 40, xl: 48 },
    baseMinutes: 50
  },
  {
    id: "puppy-pamper",
    name: "Puppy's First Pamper",
    description: "A gentle first-time experience — slow, kind, with lots of praise & treats.",
    prices: { small: 35, medium: 35, large: 35, xl: 35 },
    baseMinutes: 60
  }
];

export const ADDONS = [
  {
    id: "deshedding",
    name: "De-shedding Treatment",
    price: 15,
    minutes: 10,
    blurb: "Rake out loose hair so your sofa stays clean."
  },
  {
    id: "nail-grinding",
    name: "Nail Grinding",
    price: 10,
    minutes: 10,
    blurb: "Quiet, smooth grinding — no scary clipper clicks."
  },
  {
    id: "teeth-brushing",
    name: "Teeth Brushing",
    price: 10,
    minutes: 10,
    blurb: "A gentle clean for fresher breath and happy gums."
  }
];

export const TIME_SLOTS = [
  { group: "Morning", slots: ["09:00 AM", "11:30 AM"] },
  { group: "Afternoon", slots: ["02:00 PM", "04:30 PM"] }
];

export const SIZE_DURATION_MIN = { small: -10, medium: 0, large: 15, xl: 30 };

export const DEMO_ADDRESS = "123 Wilmslow Rd, Manchester, M14 5TP";

export const SERVICE_RADIUS = /^(M|SK|WA)\d/;

/** Map a legacy servicesData id (e.g. "small-full", "medium-bath") onto a modal preset. */
export function resolvePreset(serviceId) {
  if (!serviceId) return null;
  const lower = String(serviceId).toLowerCase();
  const sizeId = lower.startsWith("xl")
    ? "xl"
    : lower.startsWith("large")
      ? "large"
      : lower.startsWith("medium")
        ? "medium"
        : lower.startsWith("small")
          ? "small"
          : "";
  let packageId = "";
  if (lower.includes("puppy") || lower.includes("pamper")) packageId = "puppy-pamper";
  else if (lower.includes("bath")) packageId = "bath-brush";
  else if (lower.includes("full")) packageId = "full-groom";
  if (!packageId) packageId = "full-groom";
  return { sizeId, packageId };
}

export function formatMinutes(mins) {
  const clamped = Math.max(30, Math.round(mins));
  const h = Math.floor(clamped / 60);
  const m = clamped % 60;
  if (h === 0) return `~${m} mins`;
  if (m === 0) return `~${h} hr`;
  return `~${h} hr ${m} mins`;
}

export function slotToHM(slot) {
  const [timeStr, mer] = slot.split(" ");
  const [h, m] = timeStr.split(":").map(Number);
  const hours = h % 12 + (mer === "PM" ? 12 : 0);
  return { h, m };
}

export function gcalDate(d) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(d.getHours())}${p(d.getMinutes())}00`;
}
