import craneBanner from '../assets/images/crane.jpg';
import nakuru1 from '../assets/images/nakuru.jpg';
import nakuru2 from '../assets/images/crane.jpg';
import kampala1 from '../assets/images/crane.jpg';
import kampala2 from '../assets/images/crane.jpg';
import kisumu1 from '../assets/images/kisumu.jpg';
import kisumu2 from '../assets/images/crane.jpg';


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
            { src: kampala2, caption: "Exhibition booth with new technologies" }
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
            { src: kampala2, caption: "Exhibition booth with new technologies" }
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
            { src: kampala1, caption: "Panel on financing WASH innovations" },
            { src: kisumu2, caption: "Exhibition booth with new technologies" }
        ],
        banner: kisumu1,
    },
    'Malindi2024': {
        title: 'I4WASH Malindi',
        year: 2022,
        theme: 'Achieving SDG 6 in a Changing Climate',
        description: `The Forum in Malindi 2022 focused on showcasing the private sector's role in water security and fostering collaboration. It emphasized the importance of trust-building, dialogue, and capacity building to scale climate-resilient innovations in the WASH sector. Stakeholders came together to promote scalable business models and technologies addressing water reuse, climate resilience, and sustainable job creation.`,
        highlights: [
            'Showcased private sector’s role in water security and innovation',
            'Facilitated stakeholder dialogue around adoption gaps in WASH solutions',
            'Built trust and connections for local deal-making and solution sharing',
            'Encouraged ecosystem development through project and organizational alignment',
            'Strengthened understanding of innovative business practices',
            'Enhanced hands-on implementation in the water and sanitation sector',
            'Promoted climate-smart WASH technologies including water recycling and reuse',
        ],
        images: [
            { src: kampala1, caption: "Panel on financing WASH innovations" },
            { src: kisumu2, caption: "Exhibition booth with new technologies" }
        ],
        banner: kisumu1,
    }
};
