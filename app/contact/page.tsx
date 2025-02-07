import ContactForm from '@/components/ContactForm'

export default function Page() {
    return (
        <div className='bg-black'>
            {/* Umumiy qism */}
            <section className="lg:!px-32 pt-24 pb-32 px-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5597.179613188658!2d71.782603!3d41.019833!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzExLjQiTiA3McKwNDYnNTcuNCJF!5e1!3m2!1sen!2s!4v1738775062763!5m2!1sen!2s"
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