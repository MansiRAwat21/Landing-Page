import React from 'react';
import '../styles/Page.css';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Faq = () => {
    return (
        <div className='page-main'>
            <h1 className='page-title p-4'>Questions</h1>
            <Accordion className='faq-content'>
            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>What is group?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae molestias, rem perferendis dolorum eligendi alias! Natus aliquam doloribus impedit dicta fugiat, magnam rem? Incidunt, facere laboriosam. Voluptatibus ipsam consequuntur ex.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>How can I place an order?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa in soluta rem sed aperiam enim reiciendis. Facere pariatur, sunt ipsum hic commodi ullam laborum fuga, impedit reiciendis recusandae ex quaerat?
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>What are Groop delivery points?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ut unde voluptatum delectus, quibusdam odio placeat illum asperiores perferendis. Excepturi amet mollitia eum autem accusamus velit, vero cumque placeat libero!
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default Faq