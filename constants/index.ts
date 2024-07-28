import ghs from "../assets/ghs.png";
import nugs from "../assets/nugs.png";
import { StaticImageData } from "next/image";

export interface CompanyLogo {
  src: StaticImageData;
  category: string;
}

export const companyLogos: CompanyLogo[] = [
  { src: ghs, category: 'Healthcare' },
  { src: nugs, category: 'Patient organizations' },
  { src: ghs, category: 'Healthcare' },
  { src: nugs, category: 'Patient organizations' },
  { src: ghs, category: 'Healthcare' },
  { src: nugs, category: 'Patient organizations' },
  { src: ghs, category: 'Healthcare' },
  { src: nugs, category: 'Patient organizations' },
  { src: ghs, category: 'Healthcare' },
];
