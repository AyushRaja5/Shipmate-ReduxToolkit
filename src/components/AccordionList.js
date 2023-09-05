import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Import the default styles
import { BsChevronDown } from 'react-icons/bs';

const AccordionList = () => {
    const [className, setClassName] = useState(null)
    return (
        <>
            <Accordion allowMultipleExpanded={false} className='accordionmain'>

                <AccordionItem className='accordionItem'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionbutton'>

                            <AccordionItemState>
                                {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                            </AccordionItemState>
                            <div className='accordiontitle'>
                                <span className='primaryText'>Filters</span>
                                <div className='accordionicon'><BsChevronDown size={18} /></div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel >Price is cheap</AccordionItemPanel>
                </AccordionItem>


                <AccordionItem className='accordionItem'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionbutton'>

                            <AccordionItemState>
                                {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                            </AccordionItemState>
                            <div className='accordiontitle'>
                                <span className='primaryText'>Price</span>
                                <div className='accordionicon'><BsChevronDown size={18} /></div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel >Price is cheap</AccordionItemPanel>
                </AccordionItem>


                <AccordionItem className='accordionItem'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionbutton'>

                            <AccordionItemState>
                                {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                            </AccordionItemState>
                            <div className='accordiontitle'>
                                <span className='primaryText'>Modes</span>
                                <div className='accordionicon'><BsChevronDown size={18} /></div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel >Price is cheap</AccordionItemPanel>
                </AccordionItem>
                
                <AccordionItem className='accordionItem'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionbutton'>

                            <AccordionItemState>
                                {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                            </AccordionItemState>
                            <div className='accordiontitle'>
                                <span className='primaryText'>Seller</span>
                                <div className='accordionicon'><BsChevronDown size={18} /></div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel >Price is cheap</AccordionItemPanel>
                </AccordionItem>

            </Accordion>
        </>
    );
}

export default AccordionList;
