'use client';

import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import { useTransition } from 'react';
import { Locale } from '../i18n/config';
import { setUserLocale } from '@/services/locale';
import { CheckIcon, LanguagesIcon } from 'lucide-react';

type Props = {
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
    label: string;
};

export default function LocaleSwitcherSelect({
    defaultValue,
    items,
    label
}: Props) {
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale);
        });
    }

    return (
        <div className="absolute right-10">
            <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
                <Select.Trigger
                    aria-label={label}
                    className={clsx(
                        'rounded-sm p-2 transition-colors',
                        isPending && 'pointer-events-none opacity-60'
                    )}
                >
                    <Select.Icon>
                        <LanguagesIcon className="h-6 w-6 laptop:size-7 text-white transition-colors" />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content
                        align="end"
                        className="min-w-[8rem] overflow-hidden rounded-sm bg-white py-1 shadow-md z-50"
                        position="popper"
                    >
                        <Select.Viewport>
                            {items.map((item) => (
                                <Select.Item
                                    key={item.value}
                                    className="flex cursor-default items-center px-3 py-2 laptop:px-4 laptop:py-3 text-base data-[highlighted]:bg-slate-100"
                                    value={item.value}
                                >
                                    <div className="mr-2 w-[1rem]">
                                        {item.value === defaultValue && (
                                            <CheckIcon className="h-5 w-5 laptop:size-6 text-slate-900" />
                                        )}
                                    </div>
                                    <span className="text-slate-900 laptop:text-xl">{item.label}</span>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                        <Select.Arrow className="fill-white text-white" />
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}