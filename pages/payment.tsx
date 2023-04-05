import { Layout } from "@/components/Layout";
import { PaymentStep } from "@/components/PaymentForm/PaymentStep";
import { SummaryForm } from "@/components/PaymentForm/SummaryForm";

export default function PaymentPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full gap-4">
        <div className="text-xl">Order Summary</div>
        <PaymentStep />
        <SummaryForm />
      </div>
    </Layout>
  );
}
