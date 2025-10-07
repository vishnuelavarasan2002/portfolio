export default function Contect() {
    const config = {
        email:'vishnuelavarasan2002@gamil.com',
        phone:'9025272017'
    }

    return <section id='contect' className='flex flex-col bg-primary px-5 py-32'>

        <div className='flex flex-col items-center  text-white'>
    
                <h1 className='text-4xl border-b-4 border-secondary mb-5 font-bold'>Contect</h1>
                <p className='pb-5'>If you discuss more in detail, please Contect me</p>
                <p><span className='font-bold'>E-mail:</span>{config.email}</p>
                <p><span className='font-bold'>Phone:</span>{config.phone}</p>
            
        </div>
    </section>
} 