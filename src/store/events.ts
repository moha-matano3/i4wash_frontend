import craneBanner from '../assets/images/crane.jpg';

import nakuru1 from '../assets/images/nakuru.jpg';
import nakuru2 from '../assets/images/Nakuru/Naivasha_forum_hall.jpg'
import nakuru3 from '../assets/images/Nakuru/Naivasha_booth_nozovo.jpg'
import nakuru4 from '../assets/images/Nakuru/Naivasha_booths.jpg'
import nakuru5 from '../assets/images/Nakuru/Naivasha_presentation.jpg'
import nakuru6 from '../assets/images/Nakuru/Naivasha_location.jpg'
import nakuru7 from '../assets/images/Nakuru/Naivasha_panel.jpg'
import nakuru8 from '../assets/images/Nakuru/Naivasha_lorentz_booth.jpg'


import kampala1 from '../assets/images/Kampala/_MG_4554 copy.jpg';
import kampala2 from '../assets/images/Kampala/_MG_4580 copy.jpg';
import kampala3 from '../assets/images/Kampala/_MG_4605 copy.jpg';
import kampala4 from '../assets/images/Kampala/_MG_4612 copy.jpg';
import kampala5 from '../assets/images/Kampala/_MG_4616 copy.jpg';
import kampala6 from '../assets/images/Kampala/_MG_4628 copy.jpg';
import kampala7 from '../assets/images/Kampala/_MG_4738 copy.jpg';
import kampala8 from '../assets/images/Kampala/_MG_4757 copy.jpg';
import kampala9 from '../assets/images/Kampala/_MG_4961 copy.jpg';
import kampala10 from '../assets/images/Kampala/_MG_5034 copy.jpg';
import kampala11 from '../assets/images/Kampala/_MG_5035 copy.jpg';
import kampala12 from '../assets/images/Kampala/_MG_5263 copy.jpg';
import kampala13 from '../assets/images/Kampala/_MG_5277 copy.jpg';
import kampala14 from '../assets/images/Kampala/_MG_5286.jpg';
import kampala15 from '../assets/images/Kampala/_MG_5311 copy.jpg';
import kampala16 from '../assets/images/Kampala/_MG_5315 copy.jpg';
import kampala17 from '../assets/images/Kampala/_MG_5319 copy.jpg';
import kampala18 from '../assets/images/Kampala/_MG_5360 copy.jpg';

import kisumu1 from '../assets/images/kisumu.jpg';
import kisumu2 from '../assets/images/Kisumu/CKS07428.jpg';
import kisumu3 from '../assets/images/Kisumu/CKS07459.jpg';
import kisumu4 from '../assets/images/Kisumu/CKS07462.jpg';
import kisumu5 from '../assets/images/Kisumu/CKS07524.jpg';
import kisumu6 from '../assets/images/Kisumu/CKS07553.jpg';
import kisumu7 from '../assets/images/Kisumu/CKS07556.jpg';
import kisumu8 from '../assets/images/Kisumu/CKS07580.jpg';
import kisumu9 from '../assets/images/Kisumu/CKS07735.jpg';
import kisumu10 from '../assets/images/Kisumu/IMG_3885.jpg';
import kisumu11 from '../assets/images/Kisumu/IMG_3995.jpg';
import kisumu12 from '../assets/images/Kisumu/IMG_3997.jpg';
import kisumu13 from '../assets/images/Kisumu/IMG_4000.jpg';
import kisumu14 from '../assets/images/Kisumu/IMG_7839.jpg';

import malindi1 from '../assets/images/Malindi.jpg';
import malindi2 from '../assets/images/Malindi/2J5A1470.jpg';
import malindi3 from '../assets/images/Malindi/2J5A1496.jpg';
import malindi4 from '../assets/images/Malindi/2J5A1570.jpg';
import malindi5 from '../assets/images/Malindi/2J5A1575.jpg';
import malindi6 from '../assets/images/Malindi/2J5A1743.jpg';
import malindi7 from '../assets/images/Malindi/2J5A1750.jpg';
import malindi8 from '../assets/images/Malindi/2J5A1765.jpg';
import malindi9 from '../assets/images/Malindi/2J5A1815.jpg';
import malindi10 from '../assets/images/Malindi/2J5A1989.jpg';
import malindi11 from '../assets/images/Malindi/2J5A2009.jpg';
import malindi12 from '../assets/images/Malindi/2J5A2063.jpg';
import malindi13 from '../assets/images/Malindi/2J5A2072.jpg';
import malindi14 from '../assets/images/Malindi/2J5A2073.jpg';
import malindi15 from '../assets/images/Malindi/2J5A2075.jpg';


export interface ForumImage {
    src: string;
    caption: string;
}

export interface ForumEvent {
    title: string;
    year: number;
    theme: string;
    description: string;
    highlights: string[];
    images?: ForumImage[];
    banner?: string;
}

export const events: Record<string, ForumEvent> = {
    'Nakuru2023': {
        title: 'I4WASH Nakuru',
        year: 2023,
        theme: 'Mitigating climate change through wash innovations and WRM',
        description: `The proposed Forum was a ‘home grown’ initiative that sought to provide a sustainable approach to addressing the need for innovation in the water and sanitation sector,
         not only in Nakuru but also in the region, through private sector engagement. Technology and innovation had been prescribed as the strategy to deliver this aspiration, serving as an enabler for efficient 
         water use, which thereby reduced the strain on utility companies in the country. By nurturing ‘home grown’ solutions developed by local and regional innovators, the Forum aimed to provide a platform that 
         showcased cutting-edge innovations by the private sector and addressed WASH challenges that hindered their uptake. During the I4WASH Nakuru 2023 we managed to facilitate connections for deal-making, provide 
         visibility to organizations (UN, NGOs, corporations, WASH partners) showcasing their needs/projects to potential service providers, partners, and investors, and form sustainable partnerships to adapt innovations 
         addressing climate change threats in the water and sanitation sector.`,
        highlights: [
            'Facilitated connections for deal-making',
            'Provided visibility to organizations (UN, NGOs, corporations, WASH partners)',
            'Formed sustainable partnerships addressing climate change',
        ],
        images: [
            { src: nakuru2, caption: "" },
            { src: nakuru3, caption: "" },
            { src: nakuru4, caption: "" },
            { src: nakuru5, caption: "" },
            { src: nakuru6, caption: "" },
            { src: nakuru7, caption: "" },
            { src: nakuru8, caption: "" },
        ],
        banner: nakuru1,
    },
    'Kampala2023': {
        title: 'I4WASH Kampala',
        year: 2023,
        theme: 'Accelerating Financing of Climate SMART WASH solutions',
        description: `I4WASH Kampala 2023 focused on bridging the financing gap for climate-smart WASH solutions across Eastern Africa. The forum created space for collaboration between governments, innovators, and financiers to drive sustainable water management. The event served as a hub to present policies, funding mechanisms, and interventions aimed at scaling impactful WASH solutions. We partnered with Water and Sanitation Entreprenuers Association Uganda (WASEU), SARDA and QUERCUS Group.`,
        highlights: [
            'Understood government policies and programs promoting sustainable water management',
            'Highlighted innovative water and sanitation solutions in Eastern Africa and their value',
            'Enabled capital seekers and providers to present missions and value propositions',
            'Presented available financing sources and their requirements',
            'Showcased intervention areas for non-financing-focused organizations',
            'Fostered partnerships for sustainable water and sanitation management',
            'Clarified policy and regulatory frameworks aligning public-private efforts',
            'Spotlighted Eastern African WASH technologies and regional innovation',
            'Connected funders with startups, NGOs, and WASH solutions',
            'Emphasized roles of policy, advocacy & capacity building (non-financial support)',
            'United public, private & civil society for strategic WASH collaborations',
            'Identified funding and talent pathways for scaling solutions',
        ],
        images: [
            { src: kampala1, caption: "" },
            { src: kampala2, caption: "" },
            { src: kampala3, caption: "" },
            { src: kampala4, caption: "" },
            { src: kampala5, caption: "" },
            { src: kampala6, caption: "" },
            { src: kampala7, caption: "" },
            { src: kampala8, caption: "" },
            { src: kampala9, caption: "" },
            { src: kampala10, caption: "" },
            { src: kampala11, caption: "" },
            { src: kampala12, caption: "" },
            { src: kampala13, caption: "" },
            { src: kampala14, caption: "" },
            { src: kampala15, caption: "" },
            { src: kampala16, caption: "" },
            { src: kampala17, caption: "" },
            { src: kampala18, caption: "" }
        ],
        banner: craneBanner,
    },
    'Kisumu2024': {
        title: 'I4WASH Kisumu',
        year: 2024,
        theme: 'Achieving SDG 6 in a Changing Climate',
        description: `The Forum in Kisumu 2024 focused on showcasing the private sector's role in water security and fostering collaboration. It emphasized the importance of trust-building, dialogue, and capacity building to scale climate-resilient innovations in the WASH sector. Stakeholders came together to promote scalable business models and technologies addressing water reuse, climate resilience, and sustainable job creation.`,
        highlights: [
            'Showcased private sector’s role in water security and innovation',
            'Facilitated stakeholder dialogue around adoption gaps in WASH solutions',
            'Built trust and connections for local deal-making and solution sharing',
            'Encouraged ecosystem development through project and organizational alignment',
            'Scaled water nexus technologies and models supporting SDGs, jobs, and empowerment',
            'Strengthened understanding of innovative business practices',
            'Enhanced hands-on implementation in the water and sanitation sector',
            'Promoted climate-smart WASH technologies including water recycling and reuse',
        ],
        images: [
            { src: kisumu2, caption: "" },
            { src: kisumu3, caption: "" },
            { src: kisumu4, caption: "" },
            { src: kisumu5, caption: "" },
            { src: kisumu6, caption: "" },
            { src: kisumu7, caption: "" },
            { src: kisumu8, caption: "" },
            { src: kisumu9, caption: "" },
            { src: kisumu10, caption: "" },
            { src: kisumu11, caption: "" },
            { src: kisumu12, caption: "" },
            { src: kisumu13, caption: "" },
            { src: kisumu14, caption: "" }
        ],
        banner: kisumu1,
    },
    'Malindi2022': {
        title: 'I4WASH Malindi',
        year: 2022,
        theme: 'A WASH Marketplace forum for accelerating sustainable solutions and innovative finance for WASH',
        description: `The 2022 Forum in Malindi highlighted the pivotal role of the private sector in ensuring water security amid climate challenges. The event brought together stakeholders to build trust, encourage dialogue, and enhance capacities that drive the adoption of climate-resilient innovations in the WASH sector. Participants collaborated to promote scalable business models and innovative technologies focused on water reuse, climate adaptation, and sustainable employment opportunities.`,
        highlights: [
            'Demonstrated the private sector’s impact on advancing water security and innovation',
            'Created platforms for stakeholders to address barriers to WASH technology adoption',
            'Strengthened relationships to support local partnerships and exchange of solutions',
            'Promoted coordinated efforts across projects and organizations for ecosystem growth',
            'Improved knowledge of forward-thinking and sustainable business approaches',
            'Boosted hands-on efforts for water and sanitation implementation',
            'Advocated for climate-smart solutions such as water recycling and reuse technologies',
        ],
        images: [
            { src: malindi2, caption: "" },
            { src: malindi3, caption: "" },
            { src: malindi4, caption: "" },
            { src: malindi5, caption: "" },
            { src: malindi6, caption: "" },
            { src: malindi7, caption: "" },
            { src: malindi8, caption: "" },
            { src: malindi9, caption: "" },
            { src: malindi10, caption: "" },
            { src: malindi11, caption: "" },
            { src: malindi12, caption: "" },
            { src: malindi13, caption: "" },
            { src: malindi14, caption: "" },
            { src: malindi15, caption: "" },

        ],
        banner: malindi1,
    }
};
