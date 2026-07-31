import {
  Check,
  MapPin,
  PhoneMissed,
  Send,
  ClipboardList,
} from "lucide-react";

/**
 * The hero's product visual: one workflow, shown as a finished record.
 *
 * This used to loop on a timer with a tilted 3D panel. Both are removed. The
 * restrained reference set shows product surfaces as still images — a screen
 * that replays itself forever competes with the headline and reads as a
 * template. A single completed run says the same thing and then stops talking.
 */

const STEPS = [
  {
    icon: PhoneMissed,
    label: "Missed call",
    meta: "4:12 PM",
    detail: "Rachel M. · no voicemail left",
  },
  {
    icon: ClipboardList,
    label: "Details captured",
    meta: "4:12 PM",
    detail: "Water heater · no hot water · today if possible",
  },
  {
    icon: MapPin,
    label: "Service area confirmed",
    meta: "4:13 PM",
    detail: "Inside territory · ZIP 54915",
  },
  {
    icon: Send,
    label: "Office alerted",
    meta: "4:13 PM",
    detail: "Assigned to dispatch",
  },
] as const;

export function WorkflowStage() {
  return (
    <figure className="stage">
      <div className="stage-panel">
        <header className="stage-head">
          <strong>Missed-Call Job Rescue</strong>
          <span className="stage-tag">Completed</span>
        </header>

        <ol className="stage-steps">
          {STEPS.map((s) => (
            <li key={s.label} className="stage-step">
              <span className="stage-icon">
                <s.icon size={13} strokeWidth={1.8} />
              </span>
              <span className="stage-copy">
                <span className="stage-label">
                  {s.label}
                  <em>{s.meta}</em>
                </span>
                <span className="stage-detail">{s.detail}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="stage-result">
          <Check size={14} strokeWidth={2.2} aria-hidden="true" />
          <span>
            <strong>Job booked — Tuesday, 9:00 AM</strong>
            <small>61 seconds after the missed call</small>
          </span>
        </div>
      </div>

      <figcaption>One workflow, from trigger to booked job.</figcaption>
    </figure>
  );
}
