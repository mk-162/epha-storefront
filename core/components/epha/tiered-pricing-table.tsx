import { getFormatter } from 'next-intl/server';

// BigCommerce bulk pricing types
interface BulkPricingFixedPriceDiscount {
  minimumQuantity: number;
  maximumQuantity: number | null;
  price: number;
}

interface BulkPricingPercentageDiscount {
  minimumQuantity: number;
  maximumQuantity: number | null;
  percentOff: number;
}

interface BulkPricingRelativePriceDiscount {
  minimumQuantity: number;
  maximumQuantity: number | null;
  priceAdjustment: number;
}

type BulkPricingRule =
  | BulkPricingFixedPriceDiscount
  | BulkPricingPercentageDiscount
  | BulkPricingRelativePriceDiscount;

interface Props {
  rules: BulkPricingRule[];
  basePrice: { value: number; currencyCode: string };
}

export async function TieredPricingTable({ rules, basePrice }: Props) {
  const format = await getFormatter();

  if (rules.length === 0) return null;

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          Volume Discounts
        </h3>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-white">
            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Quantity
            </th>
            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Price Per Unit
            </th>
            <th className="px-4 py-3 text-right text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Savings
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, i) => {
            let discountPrice = '';
            let savings = '';

            if ('price' in rule) {
              // Fixed price discount
              discountPrice = format.number(rule.price, {
                style: 'currency',
                currency: basePrice.currencyCode,
              });

              const savingsVal = ((basePrice.value - rule.price) / basePrice.value) * 100;

              savings = `${Math.round(savingsVal)}% OFF`;
            } else if ('percentOff' in rule) {
              // Percentage discount
              const discountedVal = basePrice.value * (1 - rule.percentOff / 100);

              discountPrice = format.number(discountedVal, {
                style: 'currency',
                currency: basePrice.currencyCode,
              });
              savings = `${rule.percentOff}% OFF`;
            } else if ('priceAdjustment' in rule) {
              // Relative price discount (price reduction amount)
              const discountedVal = basePrice.value - rule.priceAdjustment;

              discountPrice = format.number(discountedVal, {
                style: 'currency',
                currency: basePrice.currencyCode,
              });

              const savingsVal = (rule.priceAdjustment / basePrice.value) * 100;

              savings = `${Math.round(savingsVal)}% OFF`;
            }

            return (
              <tr
                className="border-b border-slate-50 transition-colors last:border-0 hover:bg-slate-50"
                key={i}
              >
                <td className="px-4 py-3 font-bold text-primary">
                  {rule.maximumQuantity
                    ? `${rule.minimumQuantity} - ${rule.maximumQuantity}`
                    : `${rule.minimumQuantity}+`}
                </td>
                <td className="px-4 py-3 font-medium text-slate-600">{discountPrice}</td>
                <td className="px-4 py-3 text-right">
                  <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
                    {savings}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
