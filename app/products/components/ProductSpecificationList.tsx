'use client';

interface ProductSpecificationListProps {
  specifications: string[];
}

export function ProductSpecificationList({ specifications }: ProductSpecificationListProps) {
  return (
    <div className="grid gap-0 border-t border-gray-150/40">
      {specifications.map((spec, idx) => {
        // Find the index of the first colon
        const colonIndex = spec.indexOf(':');
        
        let label = spec;
        let value = '';
        
        if (colonIndex !== -1) {
          label = spec.substring(0, colonIndex).trim();
          value = spec.substring(colonIndex + 1).trim();
        }

        return (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-3 border-b border-gray-100 last:border-0 text-sm gap-1 sm:gap-4"
          >
            <span className="font-semibold text-gray-800 whitespace-nowrap">
              {label}
            </span>
            {value && (
              <span className="text-gray-600 font-medium text-left sm:text-right sm:max-w-[70%]">
                {value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
