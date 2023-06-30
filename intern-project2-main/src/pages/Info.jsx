import React, { useContext, useState } from 'react'

const Info = () => {

    return (
        <div className='lg:px-32 md:px-12 sm:px-5 px-3  lg:py-8 py-4'>

            <div className='text-center'>
                <h1 className=' font-semibold sm:text-3xl text-2xl  max-md:inline-block max-md:px-2 max-md:border-b-[#af7501] max-md:border-b-2   max-sm:py-1 text-center  px-1   text-[#0f5f17]'>
                    General Information
                </h1>
            </div>
            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    What is a Geographical Indication?
                </h2>
                <li className='pt-1 md:text-lg'> It is an indication, </li>
                <li className='md:text-lg'> It is used to identify agricultural,natural,or manufactured goods originating in the said area, </li>
                <li className='md:text-lg'> It originates from a definite territory in India,</li>
                <li className='md:text-lg'> It should have a special quality or characteristics unique to the geographical indication </li>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Examples of Possible Geographical Indications in India:
                </h2>
                <p className='pt-1 md:text-lg'>
                    Some of the examples of Geographical Indications in India include Basmati Rice,
                    Darjeeling Tea, Kancheepuram silk saree, Alphonso Mango, Nagpur Orange,
                    Kolhapuri Chappal, Bikaneri Bhujia etc.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    What are the Benefits of Registration of Geographical Indications?
                </h2>
                <li className='pt-1 md:text-lg'>
                    It confers legal protection to Geographical Indications in India,
                </li>
                <li className='md:text-lg' >
                    It prevents unauthorized use of a registered Geographical Indication by others.
                </li>
                <li className='md:text-lg'>
                    It boosts exports of Indian Geographical indications by providing legal Protection.
                </li>
                <li className='md:text-lg'>
                    It promotes economic Prosperity of Producers.
                </li>
                <li className='md:text-lg'>
                    It enables seeking legal protection in other WTO member countries.
                </li>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Who Can Apply For the Registration of a Geographical Indication?
                </h2>
                <p className='pt-1 md:text-lg'>
                    Any association of persons, producers, organization or authority established by or
                    under the law can apply.
                    The applicant must represent the interest of the producers.
                    The application should be in writing in the prescribed form.
                    The application should be addressed to the Registrar of Geographical Indications
                    along with prescribed fee
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Who is the Registered Proprietor of a Geographical Indication?
                </h2>
                <p className='pt-1 md:text-lg'>
                    Any association of persons, producers, organisation or authority established by or
                    under the law can be a registered proprietor. There name should be entered in the
                    Register of Geographical Indications as registered proprietor for the Geographical
                    Indication applied for.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Who is an authorized user?
                </h2>
                <p className='pt-1 md:text-lg'>
                    A producer of goods can apply for registration as an authorized user, with respect to
                    a registered Geographical Indication. He should apply in writing in the prescribed
                    form alongwith prescribed fee.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Who is a producer in relation to a Geographical Indication?
                </h2>
                <p className='pt-1 md:text-lg'>A producer is a person dealing with three categories of goods</p>
                <li className='md:text-lg'> Agricultural Goods including the production, processing, trading or dealing. </li>
                <li className='md:text-lg'> Natural Goods including exploiting, trading or dealing.</li>
                <li className='md:text-lg'> Handicrafts or industrial goods including making, manufacturing, trading or
                    dealing.</li>
            </div>
            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Is registration of a Geographical Indication compulsory?
                </h2>
                <p className='pt-1 md:text-lg'>
                    While registration of Geographical indication is not compulsory, it offers better legal
                    protection for action for infringement.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    What are the advantages of registering?
                </h2>
                <li className='pt-1 md:text-lg'>
                    Registration affords better legal protection to facilitate an action for infringement.
                </li>
                <li className='md:text-lg'>
                    The registered proprietor and authorized users can initiate infringement actions.
                </li>
                <li className='md:text-lg'>
                    The authorized users can exercise right to use the Geographical indication.
                </li>
            </div>
            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Who can use the registered Geographical Indication?
                </h2>
                <p className='pt-1 md:text-lg'>
                    Only an authorized user has the exclusive rights to use the Geographical indication in
                    relation to goods in respect of which it is registered.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    How long is the registration of Geographical Indication valid? Can it be renewed?
                </h2>
                <p className='pt-1 md:text-lg'>
                    The registration of a Geographical Indication is for a period of ten years.
                    Yes, renewal is possible for further periods of 10 years each.
                    If a registered Geographical Indications is not renewed, it is liable tobe removed
                    from the register.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    When a Registered Geographical Indication is said tobe infringed?
                </h2>
                <li className='pt-1 md:text-lg'>
                    When unauthorized use indicates or suggests that such goods originate in a
                    geographical area other than the true place of origin of such goods in a
                    manner which misleads the public as to their geographical origins.
                </li>
                <li className=' md:text-lg'>
                    When unauthorized use indicates or suggests that such goods originate in a
                    geographical area other than the true place of origin of such goods in a
                    manner which misleads the public as to their geographical origins.
                </li>
                <li className=' md:text-lg'>When the use of another Geographical Indication results in a false
                    representation to the public that goods originate in a territory in respect of
                    which a Geographical Indication relates.
                </li>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Who can initiate an infringement action?
                </h2>
                <p className='pt-1 md:text-lg'>
                    The registered proprietor or authorized users of a registered Geographical indication
                    can initiate an infringement action.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Can a registered Geographical Indication be assigned, transmitted etc?
                </h2>
                <p className='pt-1 md:text-lg'>
                    No, A Geographical Indication is a public property belonging to the producers of the
                    concerned goods. It shall not be the subject matter of assignment, transmission,
                    licensing, pledge, mortgage or such other agreement. However, when an authorized
                    user dies, his right devolves on his successor in title.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    Can a registered Geographical Indication or authorized user be removed from the register?
                </h2>
                <p className='pt-1 md:text-lg'>
                    Yes, The Appellate Board or the Registrar of Geographical Indication has the power
                    to remove the Geographical Indication or authorized user from the register. The
                    aggrieved person can file an appeal within three months from the date of
                    communication of the order.
                </p>
            </div>

            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    How a Geographical Indication differs from a trade mark?
                </h2>
                <p className='pt-1 md:text-lg'>
                    A trade mark is a sign which is used in the course of trade and it distinguishes good
                    or services of one enterprise from those of other enterprises. Whereas a
                    Geographical Indication is used to identify goods having special Characteristics
                    originating from a definite geographical territory.
                </p>
            </div>

        </div>
    )
}

export default Info;