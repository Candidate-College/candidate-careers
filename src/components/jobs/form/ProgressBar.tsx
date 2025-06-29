// components/ProgressBar.tsx
interface ProgressBarProps {
  step: number;
  totalStep: number;
}

export function ProgressBar({ step, totalStep }: ProgressBarProps) {
  const progressPercentage = (step / totalStep) * 100;
  return (
    <div className="w-full bg-secondary/20 h-4">
      <div
        className="bg-secondary h-4 transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
