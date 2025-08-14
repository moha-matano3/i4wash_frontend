import craneBanner from '../assets/images/crane.jpg';

import nakuru1 from '../assets/images/nakuru.jpg';
import nakuru2 from '../assets/images/Nakuru/Naivasha_forum_hall.jpg'
import nakuru3 from '../assets/images/Nakuru/Naivasha_booth_nozovo.jpg'
import nakuru4 from '../assets/images/Nakuru/Naivasha_booths.jpg'
import nakuru5 from '../assets/images/Nakuru/Naivasha_presentation.jpg'
import nakuru6 from '../assets/images/Nakuru/Naivasha_location.jpg'
import nakuru7 from '../assets/images/Nakuru/Naivasha_panel.jpg'
import nakuru8 from '../assets/images/Nakuru/Naivasha_lorentz_booth.jpg'


import kampala1 from '../assets/images/Kampala/_MG_5315 copy.jpg';
import kampala2 from '../assets/images/Kampala/_MG_4612 copy.jpg';
import kampala3 from '../assets/images/Kampala/_MG_4616 copy.jpg';
import kampala4 from '../assets/images/Kampala/_MG_4580 copy.jpg';
import kampala5 from '../assets/images/Kampala/_MG_5034 copy.jpg';
import kampala6 from '../assets/images/Kampala/_MG_5035 copy.jpg';
import kampala7 from '../assets/images/Kampala/_MG_5263 copy.jpg';
import kampala8 from '../assets/images/Kampala/_MG_5311 copy.jpg';
import kampala9 from '../assets/images/Kampala/_MG_5360 copy.jpg';

import kisumu1 from '../assets/images/kisumu.jpg';
// import kisumu2 from '../assets/images/crane.jpg';

import malindi1 from '../assets/images/Malindi.jpg';
import malindi2 from '../assets/images/Malindi/2J5A1470.jpg';
import malindi3 from '../assets/images/Malindi/2J5A1575.jpg';
import malindi4 from '../assets/images/Malindi/2J5A1575.jpg';
import malindi5 from '../assets/images/Malindi/2J5A1750.jpg';
import malindi6 from '../assets/images/Malindi/2J5A1989.jpg';
import malindi7 from '../assets/images/Malindi/2J5A2009.jpg';
import malindi8 from '../assets/images/Malindi/2J5A2063.jpg';
import malindi9 from '../assets/images/Malindi/2J5A2072.jpg';

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
            { src: nakuru2, caption: "Panel on financing WASH innovations" },
            { src: nakuru3, caption: "Exhibition booth with new technologies" },
            { src: nakuru4, caption: "Panel on financing WASH innovations" },
            { src: nakuru5, caption: "Exhibition booth with new technologies" },
            { src: nakuru6, caption: "Panel on financing WASH innovations" },
            { src: nakuru7, caption: "Exhibition booth with new technologies" },
            { src: nakuru8, caption: "Panel on financing WASH innovations" },
        ],
        banner: nakuru1,
    },
    'Kampala2023': {
        title: 'I4WASH Kampala',
        year: 2023,
        theme: 'Accelerating Financing of Climate SMART WASH solutions',
        description: `I4WASH Kampala 2023 focused on bridging the financing gap for climate-smart WASH solutions across Eastern Africa. The forum created space for collaboration between governments, innovators, and financiers to drive sustainable water management. The event served as a hub to present policies, funding mechanisms, and interventions aimed at scaling impactful WASH solutions.`,
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
            { src: kampala1, caption: "Panel on financing WASH innovations" },
            { src: kampala2, caption: "Exhibition booth with new technologies" },
            { src: kampala3, caption: "Caption for kampala3 here" },
            { src: kampala4, caption: "Caption for kampala4 here" },
            { src: kampala5, caption: "Caption for kampala5 here" },
            { src: kampala6, caption: "Caption for kampala6 here" },
            { src: kampala7, caption: "Caption for kampala7 here" },
            { src: kampala8, caption: "Caption for kampala8 here" },
            { src: kampala9, caption: "Caption for kampala9 here" },
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
            // { src: kampala1, caption: "Panel on financing WASH innovations" },
            // { src: kisumu2, caption: "Exhibition booth with new technologies" }
        ],
        banner: kisumu1,
    },
    'Malindi2022': {
        title: 'I4WASH Malindi',
        year: 2022,
        theme: 'Achieving SDG 6 in a Changing Climate',
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
            { src: malindi2, caption: "Exhibition booth with new technologies" },
            { src: malindi3, caption: "Exhibition booth with new technologies" },
            { src: malindi4, caption: "Panel on financing WASH innovations" },
            { src: malindi5, caption: "Exhibition booth with new technologies" },
            { src: malindi6, caption: "Panel on financing WASH innovations" },
            { src: malindi7, caption: "Exhibition booth with new technologies" },
            { src: malindi8, caption: "Panel on financing WASH innovations" },
            { src: malindi9, caption: "Panel on financing WASH innovations" },

        ],
        banner: malindi1,
    }
};
