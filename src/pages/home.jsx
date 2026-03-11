import React from "react";
import { Header1 } from "../components/Header1";

import { HeroAbout } from "../components/HeroAbout";
import { StrategicPillars } from "../components/StrategicPillars";
import { OurApproach } from "../components/OurApproach";
import { GenderRights } from "../components/GenderRights";
import { LatestNews } from "../components/LatestNews";
import { ImpactGallery } from "../components/ImpactGallery";
import { DonationFlow } from "../components/DonationFlow";
import { Cta8 } from "../components/Cta8";
import { Logo6 } from "../components/Logo6";
import { Cta20 } from "../components/Cta20";

export default function Home() {
    return (
        <div>
            <Header1 />
            <HeroAbout />
            <StrategicPillars />
            <OurApproach />
            <GenderRights />
            <LatestNews />
            <ImpactGallery />
            <DonationFlow />
            <Logo6 />
            <Cta20 />
            <Cta8 />

        </div>
    );
}
