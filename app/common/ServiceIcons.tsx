import React from "react";
import { Droplet, Camera, Volume2, HardDrive, Settings } from "lucide-react";

export function ScreenRepairIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M2 13h5l2-3 3 6 2-3h8" />
    </svg>
  );
}

export function BatteryRepairIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="7" y="4" width="10" height="18" rx="1" />
      <path d="M10 2h4" />
      <path d="M2 13h6l2-3 3 6 2-3h7" />
    </svg>
  );
}

export function ChargingPortIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Horizontal battery */}
      <rect x="2" y="7" width="16" height="8" rx="1" />
      <path d="M18 9h2v4h-2" />
      {/* Lightning bolt inside */}
      <path d="M11 8l-2 3h3l-2 3" />
      {/* USB Plug from bottom */}
      <path d="M10 22v-4" />
      <path d="M8 18h4v-3H8z" />
      <path d="M9 15v-1" />
      <path d="M11 15v-1" />
    </svg>
  );
}

export function HardwareRepairIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="10" cy="10" r="5" />
      <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5 5l1.5 1.5M15 15l1.5 1.5M5 15l1.5-1.5M15 5l-1.5 1.5" />
      {/* Wrench */}
      <path d="M13 13l7 7-2 2-7-7" />
      <path d="M22 18l-4 4" />
    </svg>
  );
}

export const CustomServiceIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  smartphone: ScreenRepairIcon,
  batteryCharging: BatteryRepairIcon,
  plugZap: ChargingPortIcon,
  settings: Settings,
  cpu: HardwareRepairIcon,
  droplet: Droplet,
  camera: Camera,
  volume2: Volume2,
  hardDrive: HardDrive,
};
