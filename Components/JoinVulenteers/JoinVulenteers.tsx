import Image from 'next/image'
import VulenteerModal from '../VulenteerModal/VulenteerModal';

const JoinVulenteers = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left" data-aos="fade-down-right" data-aos-duration="3000">
                        <h1 className="text-[24px] lg:text-[36px] font-bold lg:text-3xl">Join Our Volunteer</h1>
                        <p className="py-2 text-justify">Join Our VolunteerJoin our volunteer team and make a positive impact in your community. Together, we can create meaningful change and help those in need. Join us today and be a part of something bigger!</p>
                        <label htmlFor="joinVolunterers" className="btn btn-primary mt-2" >Join Now</label >

                    </div>
                    <div className="card flex-shrink-0" data-aos="fade-down-left" data-aos-duration="3000">
                        <div className="card-body">

                            <Image
                                src="/vtwo.png"
                                alt="Volunteer"
                                width={500}
                                height={600}
                            />

                        </div>
                    </div>
                </div>
            </div>
            <VulenteerModal></VulenteerModal>
        </div>
    );
};

export default JoinVulenteers;