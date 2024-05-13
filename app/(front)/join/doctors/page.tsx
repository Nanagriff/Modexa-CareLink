import CustomButton from '@/components/CustomButton'
import { CustomAccordion, FAQItem } from '@/components/frontend/CustomAccordion';
import { Check } from 'lucide-react'
import Image from 'next/image'
// import { title } from 'process';

import React from 'react'


export default function page() {

    const features = [
        "Carelink brings Patients to you",
        "Seamless e-processing experience",
        "Integrated clinical note-taking",
    ];

    const steps = [
        "List your practice",
        "Create competitive offerings",
        "Start seeing patients",
    ]

    const cards = [
        {
            title: "Begin Your Journey",
            description: "Start a new application",
            link: "#",
            linkTitle: "Start a new application"
        },
        {
            title: "Resume application",
            description: "Complete your onboarding process",
            link: "#",
            linkTitle: "continue your application"
        },
        
         {
            title: "Schedule a Call",
            description: "Arrange time for call to finalize your application",
            link: "#",
            linkTitle: "Schedule a call"
        },
         {
            title: "Track your Progress",
            description: "Monitor your application status in real time",
            link: "#",
            linkTitle: "Check Status"
        },
    ]

    const faqs: FAQItem[] = [
        {
          qn: "How do I start the onboarding process at Care Link?",
          ans: "To start your onboarding process, please register through our online portal and complete the required steps as outlined in the registration email you will receive."
        },
        {
          qn: "What documents are required for onboarding?",
          ans: "You'll need to provide your medical license, proof of residency, and your updated CV. Additional documents may be requested depending on your specialty."
        },
        {
          qn: "How long does the onboarding process take?",
          ans: "The onboarding process typically takes about two to four weeks, depending on the completeness of the documents submitted and the necessary background checks."
        },
        {
          qn: "Who can I contact if I have questions during the onboarding?",
          ans: "For any questions during the onboarding process, you can contact our support team at support@carelink.com or call us at (123) 456-7890."
        },
        {
          qn: "Is there a training program for new doctors?",
          ans: "Yes, Care Link provides a comprehensive training program that covers our operational protocols, patient care standards, and use of our healthcare platforms."
        },
        {
          qn: "What happens after I complete the onboarding process?",
          ans: "After completing the onboarding process, you will be given access to our scheduling system to start booking appointments and will be introduced to our team of healthcare professionals."
        }
      ];
      

    return (
        <div className='min-h-screen '>
            {/* First Hero Section on the Doctors Page */}
            <section className='lg:py-10 sm:py-6 md:py-8 px-5' >
                <div className='max-w-6xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-2'>
                    <div className="">
                        <h2 className='sm:text-[2.5rem] text-[1.5rem] md:leading-[3.5rem] text-left font-medium'>Build a thriving <span className='text-blue font-semibold'>direct-pay</span> {" "} practice with Carelink</h2>
                        <p className='py-8 opacity-70'>Welcome to Carelink, where connecting with patients is made easier than ever before.
                            Our platform streamlines the process of managing appointments, providing care remotely
                            and keeping track of patient records.</p>
                            
                        <CustomButton title="List your Service"
                        className='uppercase font-medium bg-best'

                        />
                      <div className="py-6">
                      {
                            features.map((fetaure,i)=> {
                                return(
                                    <p key={i} className='flex font-medium pt-3 items-center text-blue'>
                                        <Check className='w-6 h-6 mr-2 flex-shrink-0 text-cyan font-bold '/>
                                        {fetaure}
                                    </p>
                                )
                            })
                        }
                      </div>
                    
                            
                        
                    </div>
                    <Image alt='DoctorImage'height={848} width={1170} className='' src="/login.jpg" />
                </div>
            </section>

            {/* Second Hero Section with Start new applications */}
            <section className='lg:py-10 sm:py-6 md:py-8 px-5' >
                <div className='max-w-6xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-2'>
                <Image alt='DoctorImage'height={848} 
                    width={1170}  src="/doctors.jpg"
                    className='w-full hidden md:block mr-'

                    />


                    <div className="">
                        <h2 className='sm:text-[2.5rem] text-[1.5rem] leading-[2rem] text-left font-medium'>
                            Join Carelink to increase your 
                         <span className='text-blue font-semibold mx-2'>Revenue today</span></h2>
                         
                         <div className="py-6">
                      {
                            steps.map((step,i)=> {
                                return(
                                    <p key={i} className='flex font-medium pt-3 items-center text-blue'>
                                        <Check className='w-6 h-6 mr-2 flex-shrink-0 text-cyan font-bold '/>
                                        {step}
                                    </p>
                                )
                            })
                        }
                      </div> 

                      {/* Application Cards */}
                    <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 xl:grid-cols-2 md:grid-cols-1">  
                     {
                        cards.map((card,i)=> {
                            return (
                                <div key={i} className="bg-blue p-4 rounded-lg shadow-2xl text-center">
                                <h3 className='text-[18px] font-semibold text-white'>
                               {card.title}
                                </h3>
                                <p className='text-gray-400 text-xs py-3'>
                                {card. description}
                                </p>
                                <CustomButton title={card.linkTitle} 
                                className="text-white sm:w-[170px] md:w-[190px]  bg-cyan" href={card.link} />
                            </div>
                            )
                        })
                     }

                    </div>
                    </div>
                </div>
            </section>

            {/* FAQS */}

            <section className='lg:py-10 my-12 sm:py-6 md:py-8 px-5' >
                <div className='max-w-4xl mx-auto gap-8'>
                    <h2 className='sm:2xl font-semibold text-blue lg:text-3xl'>Frequently Asked Questions - Doctors Onboarding</h2>
                <CustomAccordion FAQS={faqs}/>
                </div>
            </section>




        </div>
    )
}
