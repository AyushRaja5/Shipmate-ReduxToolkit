import React, {useState} from 'react'

const FilterSection = ({sections}) => {
    const [activeSection, setActiveSection] = useState(null);

  return (
    <div className='filtermain'>
      {sections.map((section, index) => (
        <div
          className={`section ${activeSection === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActiveSection(index)}
        >
          <span className='sectiontitle'>{section.title}</span>
        </div>
      ))}
    </div>
  )
}

export default FilterSection