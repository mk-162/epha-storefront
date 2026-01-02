import { getFormatter } from 'next-intl/server';

interface BulkPricingRule {
    quantityMin: number;
    quantityMax: number | null;
    price?: { value: number; currencyCode: string };
    percentage?: number;
}

interface Props {
    rules: BulkPricingRule[];
    basePrice: { value: number; currencyCode: string };
}

export async function TieredPricingTable({ rules, basePrice }: Props) {
    const format = await getFormatter();

    if (!rules || rules.length === 0) return null;

    return (
        <div className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">Volume Discounts</h3>
            </div>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b border-slate-100 bg-white">
                        <th className="px-4 py-3 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Quantity</th>
                        <th className="px-4 py-3 font-bold text-slate-500 uppercase text-[10px] tracking-widest">Price Per Unit</th>
                        <th className="px-4 py-3 font-bold text-slate-500 uppercase text-[10px] tracking-widest text-right">Savings</th>
                    </tr>
                </thead>
                <tbody>
                    {rules.map((rule, i) => {
                        let discountPrice = '';
                        let savings = '';

                        if (rule.price) {
                            discountPrice = format.number(rule.price.value, {
                                style: 'currency',
                                currency: rule.price.currencyCode,
                            });
                            const savingsVal = ((basePrice.value - rule.price.value) / basePrice.value) * 100;
                            savings = `${Math.round(savingsVal)}% OFF`;
                        } else if (rule.percentage) {
                            const discountedVal = basePrice.value * (1 - rule.percentage / 100);
                            discountPrice = format.number(discountedVal, {
                                style: 'currency',
                                currency: basePrice.currencyCode,
                            });
                            savings = `${rule.percentage}% OFF`;
                        }

                        return (
                            <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors" key={i}>
                                <td className="px-4 py-3 font-bold text-primary">
                                    {rule.quantityMax ? `${rule.quantityMin} - ${rule.quantityMax}` : `${rule.quantityMin}+`}
                                </td>
                                <td className="px-4 py-3 font-medium text-slate-600">
                                    {discountPrice}
                                </td>
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
