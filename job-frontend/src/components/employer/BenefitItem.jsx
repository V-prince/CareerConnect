import { CheckCircle2 } from "lucide-react";

const BenefitItem = ({ text }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
      <p className="text-sm text-zinc-600 leading-relaxed">{text}</p>
    </div>
  );
};
export default BenefitItem;
