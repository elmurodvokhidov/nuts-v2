import ContactForm from '@/components/ContactForm'
import { COMPANY_LOCATION } from '@/constants'

export default function Page() {
    return (
        <div className='bg-black'>
            {/* Umumiy qism */}
            <section className="lg:!px-32 pt-24 pb-32 px-10">
                <iframe
                    src={COMPANY_LOCATION}
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full'
                />

                {/* So'rov oynasi */}
                <ContactForm />
            </section>
        </div>
    )
}