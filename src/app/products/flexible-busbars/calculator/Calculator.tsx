'use client';

import { useState } from 'react';

const DENSITY_PRESETS = [
  { label: 'Conservative - enclosed panel, insulated', value: 1.5 },
  { label: 'Typical - enclosed switchgear, bare copper', value: 1.8 },
  { label: 'Moderate - ventilated enclosure', value: 2.2 },
  { label: 'Optimistic - free air, short busbar', value: 2.5 },
  { label: 'Custom', value: 0 },
];

const FOIL_THICKNESSES = [0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5];

function fmt(n: number, digits = 1): string {
  return n.toLocaleString('en-US', { maximumFractionDigits: digits });
}

export default function Calculator() {
  const [width, setWidth] = useState(20);
  const [thickness, setThickness] = useState(2);
  const [foil, setFoil] = useState(0.2);
  const [presetIndex, setPresetIndex] = useState(1);
  const [customDensity, setCustomDensity] = useState(2.0);
  const [targetCurrent, setTargetCurrent] = useState(30);

  const density = DENSITY_PRESETS[presetIndex].value || customDensity;

  // Core results from geometry
  const crossSection = width * thickness;
  const capacity = crossSection * density;
  const laminations = Math.max(1, Math.round(thickness / foil));
  const actualStack = laminations * foil;
  const actualSection = width * actualStack;
  const actualCapacity = actualSection * density;

  // Target comparison (optional)
  const hasTarget = targetCurrent > 0;
  const utilization = actualCapacity > 0 ? (targetCurrent / actualCapacity) * 100 : 0;
  const densityAtTarget = actualSection > 0 ? targetCurrent / actualSection : 0;

  let status: { text: string; color: string; bg: string } | null = null;
  if (hasTarget) {
    if (actualCapacity < targetCurrent) {
      status = {
        text: `Undersized for ${fmt(targetCurrent, 0)} A - increase width or thickness`,
        color: '#B91C1C',
        bg: '#FEF2F2',
      };
    } else if (utilization >= 70) {
      status = {
        text: `Good fit for ${fmt(targetCurrent, 0)} A with sensible margin`,
        color: '#15803D',
        bg: '#F0FDF4',
      };
    } else {
      status = {
        text: `Carries ${fmt(targetCurrent, 0)} A easily - generous margin (or more copper than needed)`,
        color: '#B45309',
        bg: '#FFFBEB',
      };
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded px-3 py-2 text-[#1D2931] focus:outline-none focus:border-[#EF290E]';
  const labelClass = 'block text-sm font-medium text-[#1D2931] mb-1';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8">
        <h3 className="text-xl font-bold text-[#1D2931] mb-6">1. Set Width &amp; Thickness</h3>

        <div className="mb-5">
          <label className={labelClass} htmlFor="width">
            Width: <span className="text-[#EF290E] font-bold">{fmt(width)} mm</span>
          </label>
          <input
            id="width"
            type="range"
            min={5}
            max={200}
            step={1}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full accent-[#EF290E]"
          />
        </div>

        <div className="mb-5">
          <label className={labelClass} htmlFor="thickness">
            Overall thickness: <span className="text-[#EF290E] font-bold">{fmt(thickness, 1)} mm</span>
          </label>
          <input
            id="thickness"
            type="range"
            min={0.5}
            max={40}
            step={0.5}
            value={thickness}
            onChange={(e) => setThickness(Number(e.target.value))}
            className="w-full accent-[#EF290E]"
          />
        </div>

        <div className="mb-8">
          <label className={labelClass} htmlFor="foil">
            Foil thickness (mm)
          </label>
          <select
            id="foil"
            value={foil}
            onChange={(e) => setFoil(Number(e.target.value))}
            className={inputClass}
          >
            {FOIL_THICKNESSES.map((t) => (
              <option key={t} value={t}>
                {t.toFixed(2)} mm {t <= 0.15 ? '- most flexible' : t >= 0.4 ? '- stiffer, mostly static' : ''}
              </option>
            ))}
          </select>
        </div>

        <h3 className="text-xl font-bold text-[#1D2931] mb-6">2. Operating Assumptions</h3>

        <div className="mb-5">
          <label className={labelClass} htmlFor="density">
            Current density assumption (A/mm²)
          </label>
          <select
            id="density"
            value={presetIndex}
            onChange={(e) => setPresetIndex(Number(e.target.value))}
            className={inputClass}
          >
            {DENSITY_PRESETS.map((p, i) => (
              <option key={p.label} value={i}>
                {p.value > 0 ? `${p.label} (${p.value} A/mm²)` : p.label}
              </option>
            ))}
          </select>
          {DENSITY_PRESETS[presetIndex].value === 0 && (
            <input
              type="number"
              step={0.1}
              min={0.5}
              max={5}
              value={customDensity}
              onChange={(e) => setCustomDensity(Math.max(0.1, Number(e.target.value)))}
              className={`${inputClass} mt-2`}
              aria-label="Custom current density in amperes per square millimetre"
            />
          )}
        </div>

        <div className="mb-2">
          <label className={labelClass} htmlFor="target">
            Target current (A) <span className="font-normal text-[#6F7B83]">- optional, for comparison</span>
          </label>
          <input
            id="target"
            type="number"
            min={0}
            max={20000}
            value={targetCurrent}
            onChange={(e) => setTargetCurrent(Math.max(0, Number(e.target.value)))}
            className={inputClass}
          />
        </div>
      </div>

      {/* Results */}
      <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8">
        <h3 className="text-xl font-bold text-[#1D2931] mb-6">3. Result</h3>

        {/* Headline: capacity */}
        <div className="bg-[#1D2931] rounded-lg p-6 mb-6 text-center">
          <div className="text-sm text-[#B8BFC4] mb-1">Current carrying capacity</div>
          <div className="text-5xl font-bold text-white">{fmt(actualCapacity, 0)} A</div>
          <div className="text-sm text-[#B8BFC4] mt-2">
            at {fmt(density, 1)} A/mm² design density
          </div>
        </div>

        {status && (
          <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: status.bg }}>
            <div className="font-semibold" style={{ color: status.color }}>
              {status.text}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F4F3EE] rounded-lg p-4">
            <div className="text-sm text-[#6F7B83]">Cross-section</div>
            <div className="text-2xl font-bold text-[#1D2931]">{fmt(actualSection)} mm²</div>
            <div className="text-xs text-[#6F7B83] mt-1">
              {fmt(width)} × {fmt(actualStack, 2)} mm
            </div>
          </div>
          <div className="bg-[#F4F3EE] rounded-lg p-4">
            <div className="text-sm text-[#6F7B83]">Laminations</div>
            <div className="text-2xl font-bold text-[#EF290E]">{laminations}</div>
            <div className="text-xs text-[#6F7B83] mt-1">
              × {foil.toFixed(2)} mm foil = {fmt(actualStack, 2)} mm stack
            </div>
          </div>
          <div className="bg-[#F4F3EE] rounded-lg p-4">
            <div className="text-sm text-[#6F7B83]">Design current density</div>
            <div className="text-2xl font-bold text-[#1D2931]">{fmt(density, 2)} A/mm²</div>
            <div className="text-xs text-[#6F7B83] mt-1">
              = {fmt(actualCapacity, 0)} A ÷ {fmt(actualSection)} mm²
            </div>
          </div>
          <div className="bg-[#F4F3EE] rounded-lg p-4">
            <div className="text-sm text-[#6F7B83]">
              {hasTarget ? `Density at ${fmt(targetCurrent, 0)} A` : 'Density at target'}
            </div>
            <div className="text-2xl font-bold text-[#1D2931]">
              {hasTarget ? `${fmt(densityAtTarget, 2)} A/mm²` : '-'}
            </div>
            <div className="text-xs text-[#6F7B83] mt-1">
              {hasTarget ? 'actual loading through this section' : 'enter a target current'}
            </div>
          </div>
        </div>

        {/* Utilization bar */}
        {hasTarget && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-[#6F7B83] mb-1">
              <span>Utilization at {fmt(targetCurrent, 0)} A</span>
              <span className="font-semibold text-[#1D2931]">{fmt(Math.min(utilization, 999), 0)}%</span>
            </div>
            <div className="w-full h-3 bg-[#F4F3EE] rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full transition-all"
                style={{
                  width: `${Math.min(utilization, 100)}%`,
                  backgroundColor: utilization > 100 ? '#B91C1C' : utilization >= 70 ? '#15803D' : '#B45309',
                }}
              ></div>
            </div>
            <p className="text-xs text-[#6F7B83] mt-1">
              70-95% is a typical design target, leaving margin for ambient and aging.
            </p>
          </div>
        )}

        <p className="text-sm text-[#6F7B83] mb-6">
          Tip: the same cross-section can be wide and thin (more flexible, better cooling) or
          narrow and thick (fits tighter widths, stiffer). Thinner foils make the stack more
          flexible at the same overall thickness.
        </p>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs text-[#6F7B83]">
            Indicative sizing only, based on a simple current-density rule for bare copper at
            35-40°C ambient. Actual ampacity depends on temperature-rise limits, enclosure,
            insulation, duty cycle, and joint design. For a guaranteed rating,{' '}
            <a href="/contact/" className="text-[#EF290E] font-medium hover:underline">
              request a sized quotation
            </a>{' '}
            from our engineers.
          </p>
        </div>
      </div>
    </div>
  );
}
