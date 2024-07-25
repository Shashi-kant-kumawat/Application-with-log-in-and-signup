import React from 'react'

function About() {
    return (
        <div>
            <div className='sm:flex sm:flex-row sm:space-x-7 mt-5 sm:mx-8 place-content-center mx-3'>
                <div className='flex flex-col space-y-6'>
                    <p>In the social sciences, coding is an analytical process in which data, in both quantitative form (such as questionnaires results) or qualitative form (such as interview transcripts) are categorized to facilitate analysis.

                    </p><p>One purpose of coding is to transform the data into a form suitable for computer-aided analysis. This categorization of information is an important step,
                        for example, in preparing data for computer processing with statistical software. Prior to coding, an annotation scheme is defined. It consists of codes
                        or tags. During coding, coders manually add codes into data where required features are identified. The coding scheme ensures
                        that the codes are added consistently across the data set and allows for verification of previously tagged data</p>

                    <p>Some studies will employ multiple coders working independently on the same data. This also minimizes the chance of errors from coding and is believed to increase the reliability of data.</p>

                </div>
                <div className='w-full items-center text-center  flex flex-row place-content-center my-5 sm:my-0'>
                    <img className=' size-60 sm:size-64 sm:rounded-2xl rounded-lg' src='./coding.jpg'></img>
                </div>
            </div>
            <div className='sm:flex sm:flex-row sm:space-x-7 mt-5 sm:mx-8 place-content-center mx-3'>
                
                <div className='flex flex-col space-y-6'>
                    <p>Much of qualitative coding can be attributed to either grounded or a priori coding.
                        Grounded coding refers to allowing notable themes and patterns emerge from the document themselves,
                        where as a priori coding requires the researcher to apply pre-existing theoretical frameworks
                        to analyze the documents. As coding methods are applied across various texts, the researcher
                        is able to apply axial coding, which is the process of selecting core thematic categories present in
                        several documents to discover common patterns and relations
                    </p>
                    <p>Coding is considered a process of discovery and is done
                        in cycles. Prior to constructing categories, a researcher
                        might apply a first and second cycle coding methods. There are a
                        multitude of methods available, and a researcher will want to pick one
                        that is suited for the format and nature of their documents. Not all methods
                        can be applied to every type of document. Some examples of first cycle coding methods include:</p>
                </div>
                <div className='w-full items-center text-center  flex flex-row place-content-center my-5 sm:my-0'>
                    <img src='./aaa.jpg' className=' size-60 sm:size-64 sm:rounded-2xl rounded-lg'></img>
                </div>
            </div>
        </div>
    )
}

export default About
