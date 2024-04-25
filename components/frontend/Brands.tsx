import { companyLogos } from '@/constants'
import React from 'react'


export const Brands = () => {
  return (
    <div>Brands

<ul className="flex sliding">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}
