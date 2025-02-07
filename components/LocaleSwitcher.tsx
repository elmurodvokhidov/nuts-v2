import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
    const t = useTranslations('localeswitcher');
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: 'en',
                    label: t('en')
                },
                {
                    value: 'uz',
                    label: t('uz')
                },
                {
                    value: 'ru',
                    label: t('ru')
                },
            ]}
            label={t('label')}
        />
    );
}