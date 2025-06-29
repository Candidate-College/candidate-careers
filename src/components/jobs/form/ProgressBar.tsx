// components/ProgressBar.tsx
interface ProgressBarProps {
  step: number;
  totalStep: number;
}

export function ProgressBar({ step, totalStep }: ProgressBarProps) {
  const progressPercentage = (step / totalStep) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-secondary/20 h-4 z-50">
      <div
        className="bg-secondary h-4 transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
