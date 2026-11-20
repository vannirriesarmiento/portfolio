---
title: "BSO Role Based Website"
category: "development"
readDuration: 15
description: "I redesigned and built BSO’s multilingual website using a role-based system that tailors content, services, and user journeys for landlords, tenants, brokers, and vendors—turning a complex real estate ecosystem into a clear, intuitive, and scalable experience."

logo: "../../assets/img/case-studies/logo bso.avif"
previewDesktop: "../../assets/img/case-studies/bso website/bso website desktop.avif"
previewMobile: "../../assets/img/case-studies/bso website/bso website 1.webp"
role: "UI/UX Designer, Webflow Developer"
industry: "Real Estate"
status: "Completed"
tools: "Webflow, Figma, Spline, GSAP, etc."
gallery:
  - "../../assets/img/case-studies/bso website/bso website 1.webp"
  - "../../assets/img/case-studies/bso website/bso website 2.webp"
  - "../../assets/img/case-studies/bso website/bso website 3.webp"
  - "../../assets/img/case-studies/bso website/bso website 4.webm"
  - "../../assets/img/case-studies/bso website/bso website 5.webp"
  - "../../assets/img/case-studies/bso website/bso website 6.webm"
  - "../../assets/img/case-studies/bso website/bso website 7.webp"
  - "../../assets/img/case-studies/bso website/bso website 8.webm"
  - "../../assets/img/case-studies/bso website/bso website 9.webp"
  - "../../assets/img/case-studies/bso website/bso website 10.webm"
order: 1
draft: false
---

## Overview

<a href="https://www.bso.ae/" target="_blank" rel="noopener noreferrer">BSO Real Estate Management</a> is a Dubai-based property management company and digital real estate ecosystem that helps people manage properties, access real estate services, and connect with industry professionals. **It serves four distinct audiences: landlords, tenants, brokers, and maintenance vendors.** While some of their needs overlap, each group visits the website with a different goal.

A landlord may want to find a tenant or manage an investment. A tenant may need maintenance or rental-dispute support. A broker wants access to property opportunities, while a vendor wants to join BSO’s service network.

**The previous website treated these visitors as one broad audience. Its visual design no longer reflected the direction of the company, and its structure made BSO’s growing range of services difficult to understand.** The business needed more than a visual refresh. It needed a digital experience capable of recognizing who was visiting and showing them why BSO was relevant to them.

**As BSO’s UI/UX Designer and Webflow Developer, I redesigned and developed the website from research and information architecture through to production. The result was a role-based, multilingual experience combining tailored user journeys.**

<div class="case-study__cards">
    <div class="case-study__card">
        <span class="case-study__card-icon red">
            <span
                class="material-symbols-outlined"
                style="font-variation-settings: 'FILL' 0, 'wght' 300; font-size: 1.75rem;"
            >
                neurology
            </span>
        </span>
        <h3>Problem</h3>
        <p>
            BSO’s previous website treated landlords, tenants, brokers, and vendors as one audience, making relevant services difficult to find. <strong>Its dated design also no longer accommodating the company’s growing digital ecosystem.</strong>
        </p>
    </div>
    <div class="case-study__card">
        <span class="case-study__card-icon blue">
            <span
                class="material-symbols-outlined"
                style="font-variation-settings: 'FILL' 0, 'wght' 300; font-size: 1.75rem;"
            >
                lightbulb
            </span>
        </span>
        <h3>Solution</h3>
        <p>
            <strong>I designed and developed a role-based, multilingual website that tailors content, visuals, and user journeys for each audience.</strong> Using Webflow, CMS, and custom JavaScript, I created scalable pages and interactive tools that supported both the customer experience and BSO’s day-to-day business operations.
        </p>
    </div>
    <div class="case-study__card">
        <span class="case-study__card-icon green">
            <span
                class="material-symbols-outlined"
                style="font-variation-settings: 'FILL' 0, 'wght' 300; font-size: 1.75rem;"
            >
                devices
            </span>
        </span>
        <h3>Results</h3>
        <p>
            The new website delivered <strong>four distinct user journeys</strong> across four languages and supported approximately <strong>100+ CMS collections.</strong> Performance testing achieved a <strong>desktop Lighthouse score of up to 90</strong>, alongside <strong>mobile scores between 70 and 80</strong>.
        </p>
    </div>
</div>

## Design Process

I approached the redesign by first understanding BSO’s audiences, business priorities, and existing website challenges. These findings guided the role-based strategy and visual system, ensuring that each design decision supported both user needs and the company’s wider digital ecosystem.

### Research & Discovery

Since direct access to customers was unavailable, I based the discovery process on internal business knowledge, an assessment of the previous website, and research into Dubai’s property-management market.

#### Understanding the Business

I spoke with teams across BSO to understand its customers, internal workflows, and service processes. These discussions showed that **the website needed to support several business functions,** from attracting landlords and assisting tenants to connecting brokers and onboarding maintenance vendors.

#### Reviewing the Previous Experience

I conducted a content and navigation audit alongside a general UX assessment.

> I reviewed:
> - How services were categorized and presented.
> - Whether visitors could identify which services applied to them.
> - The clarity of the navigation and content hierarchy.
> - The consistency of calls to action.
> - The responsive experience, performance, and scalability.

The previous website functioned primarily as a general company brochure. Services were presented to a broad audience, requiring visitors to determine for themselves which information was relevant to their situation.

<video class="case-study__content-video" src="../../img/case-studies/bso-website/bso website 18.webm" aria-label="BSO Club's Finding a Tenant interfaces in the Client Module" autoplay muted loop playsinline preload="metadata"></video>

<p class="w-full text-center text-sm italic">Old BSO Website, January 2023</p>

From a long-term perspective, the existing structure offered limited flexibility for BSO’s expanding requirements. The redesigned website needed to support multiple languages, campaign landing pages, private client content, CMS-generated reports, and a growing number of services without making navigation more complicated.

The assessment established three priorities for the redesign: organize the experience around user roles, create clearer and more consistent conversion paths, and build a flexible structure that could grow with the business.

#### Competitive Research

I compared BSO’s website with other property-management companies operating in Dubai. I examined how these companies communicated their services, established trust, structured their navigation, and encouraged prospective customers to contact them. The comparison revealed an opportunity for BSO to differentiate itself through a more interactive and personalized experience. **Rather than presenting the same conventional service catalogue to everyone, BSO could organize the website around the visitor’s role.**

#### Mapping the Experience

I created a sitemap to define how each audience would enter and navigate the website. **It mapped role-specific pages, shared services, supporting content, and conversion points.** Existing high-ranking URLs were preserved to protect BSO’s search visibility and avoid disrupting established traffic. This made URL structure an important part of the user journey, ensuring each address clearly reflected the user’s destination.

![Sitemap Diagram for bso.ae](<../../assets/img/case-studies/bso website/bso website 11.webp>)

This was especially important for overlapping services such as **Property Maintenance** and **Rental Dispute**. Instead of creating duplicate pages, I planned how shared pages could adapt their content according to the visitor’s selected role.

As the project grew, the architecture expanded to include campaign landing pages and private CMS-generated client experiences. **The final sitemap therefore represents an evolving system** rather than a structure that was planned entirely at the beginning.

#### Key Takeaway

The website did not need four separate experiences. **It needed one connected system that could serve four different contexts**— shared where appropriate and personalized where necessary.

#### Research Limitation

I did not conduct direct customer interviews or usability testing during the project. **The findings were based on internal expertise, competitive research, and a structured assessment of the previous website.**

### Ideation & Strategy

Following the discovery phase, I translated the findings into a role-based strategy that organized the website around the visitor rather than a conventional list of services. The aim was to help users identify relevant information quickly while supporting BSO’s wider business goals.

#### Structuring a Multi-Purpose Website

Although everything existed within one project and official domain, **the website developed into three connected layers:**

<ol class="case-study__numbered-list">
    <li>
        <div class="case-study__numbered-list-copy">
            <h3>Main website</h3>
            <p>The public-facing experience containing the homepage, audience pages, service pages, navigation, and search. Visitors typically arrived through search engines, social media, or direct traffic, making this the primary environment for organic discovery and conversion..</p>
        </div>
    </li>
    <li>
        <div class="case-study__numbered-list-copy">
            <h3>Campaign landing pages</h3>
            <p>Focused pages created for paid advertising campaigns and kept outside the main navigation. Each page targeted a specific audience or service and used interactive hero elements, questionnaires, or calculators to capture attention and guide visitors toward conversion.</p>
        </div>
    </li>
    <li>
        <div class="case-study__numbered-list-copy">
            <h3>Private CMS-generated pages</h3>
            <p>Restricted pages created for existing clients and internal business processes. One example was the digital Property Valuation Report, which allowed BSO to deliver an interactive client report under its official domain. This system can be explored further in a separate case study.</p>
        </div>
    </li>
</ol>

Keeping these experiences within one project created a consistent brand and domain while allowing each part of the website to serve a different business purpose.

#### Structuring the Experience by Role

**The website was organized around four entry points: landlord, tenant, broker, and vendor.** Landlords received the greatest prominence because property management was the company’s primary growth focus, while the remaining roles were given journeys based on their own goals.

<div class="case-study__cards case-study__cards--grid">
    <div class="case-study__card">
        <img
            src="../../img/case-studies/img/icon-landlord.svg"
            alt=""
            class="case-study__card-icon borderless"
            width="48"
            height="48"
        />
        Landlords were guided toward property management and services geared toward their property.
    </div>
    <div class="case-study__card">
        <img
            src="../../img/case-studies/img/icon-tenant.svg"
            alt=""
            class="case-study__card-icon borderless"
            width="48"
            height="48"
        />
        Tenants followed a support-focused journey covering maintenance, leasing, and rental concerns.
    </div>
    <div class="case-study__card">
        <img
            src="../../img/case-studies/img/icon-broker.svg"
            alt=""
            class="case-study__card-icon borderless"
            width="48"
            height="48"
        />
        Brokers were introduced to BSO Club and the opportunities available through its network.
    </div>
    <div class="case-study__card">
        <img
            src="../../img/case-studies/img/icon-vendor.svg"
            alt=""
            class="case-study__card-icon borderless"
            width="48"
            height="48"
        />
        Vendors were directed toward partnership opportunities by registering with BSO.
    </div>
</div>

#### Balancing Shared and Personalized Content

As mentioned above some services, applied to more than one audience. Instead of creating duplicate pages, **I planned a shared structure where the messaging, supporting information, and calls to action could change according to the visitor’s selected role.** This approach kept the website connected while making each journey feel more relevant.

#### Defining Conversion Paths

**Each part of the website required a different conversion strategy.** The main website encouraged organic visitors to explore services and submit inquiries, while campaign landing pages provided shorter, more focused journeys for paid traffic.

*Note: The original experience sent inquiries to BSO’s CRM for offline follow-up. It was later adapted to promote BSO Club, allowing users to continue through the app and access services digitally.*

#### An Evolving Architecture

The complete structure was not planned from the beginning. It expanded incrementally as new campaign, client, and operational requirements emerged. **The strategy therefore focused on creating a flexible foundation** that could support new pages and business functions without rebuilding the website each time it grew.

### UI Design & Visual System

The visual system was designed to present BSO as a **modern and trustworthy property-management company** while preserving its established identity. The interface combined a light, professional aesthetic with interactive details that reflected the company’s increasingly digital direction.

#### Visual Direction

**Glassmorphism** was used throughout the interface to create depth, separate content, and give the website a contemporary feel. Spacious layouts, clear typography, and structured content helped balance the visual effects with the large amount of information presented across the website.

![Glassmorphism Elements found in bso.ae](<../../assets/img/case-studies/bso website/bso website 12.webp>)

At the founder’s request, subtle humorous details and references to *The Matrix* were also included. These small Easter eggs gave the experience personality without distracting from its professional purpose.

#### Typography & Color Palette

**Poppins** was retained as the primary English typeface because it was already part of BSO’s visual identity. Since it did not support every required language, I selected visually compatible alternatives.

> Similar alternatives used:
> - **English:** Poppins
> - **Russian:** Raleway
> - **Chinese:** Noto Sans SC
> - **Arabic:** Noto Sans Arabic

This allowed each locale to render correctly while maintaining a consistent typographic character across the website.

![Typography & Color Guide for bso.ae](<../../assets/img/case-studies/bso website/bso website 2.webp>)

**BSO’s signature yellow, `#FFF200`, remained the foundation of the palette.** I paired it with light backgrounds and neutral colors to make the bright yellow feel intentional, professional, and easier to use across content-heavy pages.

**Each audience, landlord, tenant, broker, and vendor, was also assigned distinct colors and icons.** This helped visitors recognize role-specific content and associate each role with a consistent visual identity. The same system was later carried into BSO Club, creating continuity between the website and app.

#### Logo Adaptation

The company founder preferred to **retain the existing logo**, so I focused on making it more flexible rather than replacing it. I created outlined, cut-out, monochrome, and symbol-only variations for different backgrounds and interface contexts.

![Logos for bso.ae](<../../assets/img/case-studies/bso website/bso website 13.webp>)

The website frequently used the simplified symbol without the full company name. This allowed the logo to integrate more naturally with the modern interface while remaining recognizable.

#### Imagery, Motion, and 3D

**Curated stock photography** was used to represent BSO’s different audiences, properties, and services while maintaining a consistent visual tone. To prevent the brand from feeling generic, **original company photography and video** were introduced to showcase its real team, workplace, and operations—adding authenticity, strengthening trust, and giving BSO a more recognizable visual identity.

![Interfaces from bso.ae](<../../assets/img/case-studies/bso website/bso website 3.webp>)

Motion was treated as part of the user journey rather than simple decoration. **Purposeful animations** guided attention, clarified transitions, and encouraged visitors to explore longer pages before reaching key calls to action.

<video class="case-study__content-video" src="../../img/case-studies/bso-website/bso website 4.webm" aria-label="3D elements from bso.ae" autoplay muted loop playsinline preload="metadata"></video>

**Custom 3D elements,** including an interactive homepage globe, added depth to the experience while visualizing BSO’s geographic reach and expanding client network across the UAE.

## Development Phase

After establishing the visual system and user journeys, I began developing the website using <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer">Webflow</a>. Webflow is a drag & drop website builder platform which uses a Content Management System (CMS) system where you can create, manage, edit, and publish digital content on a website without needing to write code from scratch.

<div class="case-study__cards case-study__cards--stacked">
    <div class="case-study__card">
        <span class="case-study__card-icon yellow">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0, 'wght' 300; font-size: 1.75rem;">
                toys_and_games
            </span>
        </span>
        The central challenge was making a largely static platform behave like a dynamic, role-aware website without sacrificing its rich content, motion, or page-load performance.
    </div>
</div>

#### Building the Role-Based System

The visitor’s selected role was stored in `localStorage` using an `entryPoint` variable. This allowed the website to remember whether someone last visited as a landlord, tenant, broker, or vendor and restore a more relevant experience when they returned.

![Screenshot of Chrome's Developer's Tool showing localStorage](<../../assets/img/case-studies/bso website/bso website 14.webp>)

For shared pages such as **Property Maintenance** and **Rental Dispute**, I assigned custom attributes to individual sections based on their intended roles. After reading the stored value, JavaScript removed sections that were not relevant to the current visitor. This allowed one Webflow page to support multiple audience journeys without creating and maintaining duplicate versions.

If a visitor entered a shared service page without an assigned role, **a mandatory modal prompted them to identify themselves before continuing.**

![Screenshot of Chrome's Developer's Tool showing localStorage](<../../assets/img/case-studies/bso website/bso website 15.webp>)

This ensured the page could display the appropriate content, messaging, and calls to action for their selected journey.

#### CMS Architecture and Business Tools

I created more than **50 Webflow CMS collections** to support services, blogs, testimonials, private client content, and other reusable information across the website.

**One of the most important implementations was the digitization of BSO’s Property Valuation Report (PVR).** A PVR is a detailed research regarding a particular property. The PVR gives landlords an expert-backed, data-driven assessment of their property's market value—based on current trends and future income potential. The brokerage team could enter property information, pricing recommendations, and selling-factor ratings through the Webflow Editor, while the published page transformed that data into an interactive, responsive report under BSO’s official domain.

![Digitization of PVR](<../../assets/img/case-studies/bso website/bso website 16.webp>)

**These reports were private and intended for individual clients rather than public discovery.** More information of the PVR experience will be explored further in a separate case study soon.

#### Interactive Landing Pages and Lead Capture

**I developed campaign-specific landing pages containing calculators, questionnaires, and guided forms.** Instead of immediately asking visitors for their contact details, these interactions first helped them explore their situation before presenting a relevant result and call to action.

![BSO Landing Pages](<../../assets/img/case-studies/bso website/bso website 17.webp>)

The lead forms were connected to BSO’s Bitrix CRM through an API endpoint developed by the IT Manager. **My responsibility was to implement the front-end experience**, collect the required information, and send it to the endpoint so the sales team could continue the process offline.

#### Multilingual Implementation

The website supported English, Russian, Chinese, and Arabic. Arabic required right-to-left layouts, which I implemented using reusable CSS styles and an `.arabic` utility class with `direction: rtl`. These styles could be applied globally or to specific elements when a component needed more precise control. **Each locale was then reviewed across responsive layouts to ensure that translated content remained readable and visually consistent.**

#### Motion and 3D Implementation

**The motion system was implemented with <a href="https://gsap.com/" target="_blank" rel="noopener noreferrer">GSAP</a>,** a JavaScript animation library for creating high-performance web animations. I used it to build scroll-triggered sequences, transitions, and interactive states that guided attention, clarified content hierarchy, and made longer pages feel more engaging.

**Interactive 3D elements were designed and embedded using <a href="https://spline.design/" target="_blank" rel="noopener noreferrer">Spline</a>,** a browser-based tool for creating real-time 3D web experiences. These scenes—including the homepage globe and iPhone presentation—added depth to the interface and reinforced BSO’s technology-focused positioning. Because 3D content can be resource-intensive, its loading behavior was optimized by device, with heavier scenes reserved for larger screens.

#### Performance Optimization

Balancing visual richness with performance was one of the most challenging parts of the build.

> I applied several optimizations throughout development:
> - Converted photography to AVIF.
> - Converted video content to WebM.
> - Used WOFF2 for web fonts.
> - Minified custom JavaScript.
> - Eager-loaded essential above-the-fold imagery.
> - Delayed tracking scripts such as Google Tag Manager and Yandex Metrica until the visitor’s first scroll.
> - Prevented heavy Spline scenes from loading on mobile devices.
> - Regularly tested desktop and mobile performance using Lighthouse.

These decisions helped maintain a responsive experience despite the website’s growing number of pages, scripts, animations, media assets, and CMS-driven features.

## Quality Assurance

**I worked closely with a QA specialist** throughout development to test the website across different screen sizes, devices, browsers, languages, forms, and interactive states. This was particularly important because the experience combined role-based content, responsive layouts, custom JavaScript, CMS pages, animations, and third-party integrations.

Testing followed an iterative staging workflow:

<ol class="case-study__numbered-list">
    <li>
        <div class="case-study__numbered-list-copy">
            <p style="margin-top:5px;">I published new features and design updates to the staging environment.</p>
        </div>
    </li>
    <li>
        <div class="case-study__numbered-list-copy">
            <p style="margin-top:5px;">QA tested the changes across supported devices, browsers, and resolutions.</p>
        </div>
    </li>
    <li>
        <div class="case-study__numbered-list-copy">
            <p style="margin-top:5px;">Issues were documented and returned to me for review.</p>
        </div>
    </li>
    <li>
        <div class="case-study__numbered-list-copy">
            <p style="margin-top:5px;">I implemented the required fixes and submitted them for another testing cycle</p>
        </div>
    </li>
    <li>
        <div class="case-study__numbered-list-copy">
            <p style="margin-top:5px;">Once the changes were verified, the approved version was published to production.</p>
        </div>
    </li>
</ol>

Forms, role selection, conditional content, multilingual layouts, CRM submissions, animations, responsive behavior, etc., were **reviewed before release.** I also used Lighthouse throughout development to monitor performance and identify pages affected by heavy media, scripts, tracking tools, or 3D content.

This process helped catch technical and responsive issues that were not always visible inside Webflow’s preview. It also established a repeatable release workflow as the website continued to grow in scope and complexity.

## Outcome

The first version **launched within four months** and delivered one role-based website for four audiences across four languages.

![BSO Website today](<../../assets/img/case-studies/bso website/bso website 1.webp>)

<p class="w-full text-center text-sm italic">BSO Lastest Website, October 2026</p>

**It later evolved into a broader platform** supporting organic discovery, paid campaigns, private CMS-generated client experiences, and BSO Club acquisition, while **achieving a desktop Lighthouse score of up to 90** during testing.

## Post-Launch

After launch, **we used Google Analytics to monitor page performance, engagement, and activity across key user journeys.** Pages and tracked interactions receiving limited engagement were reviewed to identify opportunities for improvement.

These insights informed ongoing refinements to content hierarchy, section placement, navigation, and calls to action. Rather than treating launch as the end of the project, **I continued adjusting the experience based on how visitors interacted with the live website.**

The conversion journey also evolved alongside BSO’s business strategy. The website initially directed inquiries to forms connected to the company’s CRM for offline follow-up. It was later adapted to promote BSO Club, using device-aware QR codes and download links to help desktop visitors continue their journey through the mobile app.

**Although I no longer have access to the historical analytics, this process allowed design decisions to be evaluated and refined using real visitor behavior rather than assumptions alone.**

## Conclusion

**This project taught me how closely design and development decisions influence one another.** Creating a visually rich experience was only valuable if the underlying system remained responsive, maintainable, and capable of supporting the company’s changing requirements.

Working within Webflow also encouraged me to think beyond the platform’s native capabilities. Using CMS architecture, custom attributes, and JavaScript, **I transformed a primarily static website into a role-aware experience supporting multiple audiences and business functions.**

The most important challenge was balancing complexity with performance. Animations, 3D experiences, localization, tracking tools, and a growing content library all affected loading speed. I learned that **performance should be treated as an ongoing product requirement**, supported by clear budgets, and regular monitoring. It is not something addressed only before launch.

<div class="case-study__cards case-study__cards--stacked">
    <div class="case-study__card">
        <span class="case-study__card-icon yellow">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0, 'wght' 300; font-size: 1.75rem;">
                wb_incandescent
            </span>
        </span>
        If I approached the project again, I would introduce direct customer interviews and usability testing earlier. I would also establish more detailed analytics events from the beginning, allowing engagement and performances to be measured more consistently.
    </div>
</div>

**As my first project at BSO,** the website strengthened my ability to work across UI/UX design and Webflow development. It became the foundation for several connected experiences, including [BSO Club](../bso-club/) and the digital PVR *(coming soon)*, which I explore in separate case studies.

<section
    class="case-study__card case-study__download-banner"
    aria-labelledby="explore-bso-website-title"
>
    <h3 id="explore-bso-website-title" class="case-study__download-title">See BSO Website in Real Life</h3>
    <p>After months of designing, developing, testing, and refining, I’m proud to share the finished experience. Explore the live website to see how the role-based journeys, responsive interactions, and visual system come together in the final product.</p>
    <a
        href="https://www.bso.ae/"
        target="_blank"
        rel="noopener noreferrer"
        class="case-study__link case-study__demo-link"
    >
        View Live Website
        <span class="material-symbols-outlined" aria-hidden="true">
            arrow_forward
        </span>
    </a>
    <img src="../../img/case-studies/bso-website/banner bso website desktop.webp" alt="A mac with the screen of BSO Website" class="case-study__download-img hidden md:block" loading="lazy">
    <img src="../../img/case-studies/bso-website/banner bso website mobile.webp" alt="A mac and iphone with BSO Website on its screens" class="case-study__download-img block md:hidden" loading="lazy">
</section>
