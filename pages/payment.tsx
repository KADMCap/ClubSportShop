import { Layout } from "@/components/Layout";
import { PaymentStep } from "@/components/PaymentForm/PaymentStep";

export default function PaymentPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <div className="text-xl">Order Summary</div>
        <PaymentStep />
      </div>
    </Layout>
  );
}
